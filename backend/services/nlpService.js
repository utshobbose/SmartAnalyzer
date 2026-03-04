const axios = require("axios");

const NLP_URL = process.env.NLP_SERVICE_URL || "http://localhost:8000";

/**
 * Extracts skills, education, experience, and entities using spaCy NER.
 * Returns structured parsed data.
 */
const extractEntities = async (text) => {
  const res = await axios.post(`${NLP_URL}/extract`, { text });
  return res.data;
};

/**
 * Generates a sentence-transformer embedding for the given text.
 * Used for cosine similarity against job descriptions.
 */
const getEmbedding = async (text) => {
  const res = await axios.post(`${NLP_URL}/embed`, { text });
  return res.data.embedding;
};

/**
 * Computes cosine similarity between a resume embedding
 * and an array of job embeddings.
 * Returns scores in [0, 1] range.
 */
const cosineSimilarity = (vecA, vecB) => {
  const dot = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
};

/**
 * Ranks a list of jobs against a resume embedding.
 * Returns jobs sorted by match score descending.
 */
const rankJobs = (resumeEmbedding, jobs) => {
  return jobs
    .map((job) => ({
      ...job.toObject(),
      matchScore: parseFloat(
        (cosineSimilarity(resumeEmbedding, job.embedding) * 100).toFixed(1)
      ),
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
};

module.exports = { extractEntities, getEmbedding, rankJobs };
