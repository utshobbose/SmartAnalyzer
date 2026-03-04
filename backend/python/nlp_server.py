from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import spacy
from sentence_transformers import SentenceTransformer

app = FastAPI(title="SmartAnalyzer NLP Service")

# Load models once at startup
nlp = spacy.load("en_core_web_sm")
embedder = SentenceTransformer("all-MiniLM-L6-v2")

SKILL_LABELS = {"SKILL", "ORG", "PRODUCT", "WORK_OF_ART"}
EDUCATION_KEYWORDS = {"bachelor", "master", "phd", "degree", "university", "college", "b.sc", "m.sc", "b.tech", "m.tech"}
EXPERIENCE_KEYWORDS = {"experience", "worked", "developed", "built", "managed", "led", "engineer", "developer", "analyst"}


class TextInput(BaseModel):
    text: str


class Entity(BaseModel):
    text: str
    label: str


class ParsedResume(BaseModel):
    skills: List[str]
    education: List[str]
    experience: List[str]
    entities: List[Entity]
    summary: str


class EmbedResponse(BaseModel):
    embedding: List[float]


def extract_section(lines: List[str], keywords: set) -> List[str]:
    return [
        line.strip()
        for line in lines
        if any(kw in line.lower() for kw in keywords)
    ]


@app.post("/extract", response_model=ParsedResume)
def extract(payload: TextInput):
    text = payload.text
    if not text:
        raise HTTPException(status_code=400, detail="Text is empty")

    doc = nlp(text)
    lines = text.split("\n")

    entities = [
        Entity(text=ent.text.strip(), label=ent.label_)
        for ent in doc.ents
        if ent.text.strip()
    ]

    # Skills: ORG, PRODUCT entities + noun chunks that look like tech terms
    skills = list({
        ent.text.strip()
        for ent in doc.ents
        if ent.label_ in SKILL_LABELS
    })

    education = extract_section(lines, EDUCATION_KEYWORDS)
    experience = extract_section(lines, EXPERIENCE_KEYWORDS)

    # Simple summary: first 3 non-empty lines
    summary_lines = [l.strip() for l in lines if l.strip()][:3]
    summary = " ".join(summary_lines)

    return ParsedResume(
        skills=skills,
        education=education,
        experience=experience,
        entities=entities,
        summary=summary,
    )


@app.post("/embed", response_model=EmbedResponse)
def embed(payload: TextInput):
    if not payload.text:
        raise HTTPException(status_code=400, detail="Text is empty")
    vector = embedder.encode(payload.text).tolist()
    return EmbedResponse(embedding=vector)


@app.get("/health")
def health():
    return {"status": "ok"}
