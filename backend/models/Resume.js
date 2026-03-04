const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
{
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    },
    fileName: { type: String, required: true },
    rawText: { type: String, required: true },
    parsed: {
    skills: [String],
    experience: [String],
    education: [String],
    entities: [
        {
        text: String,
        label: String,
        },
    ],
    },
    embedding: {
    type: [Number],
    default: [],
    },
    summary: { type: String, default: "" },
},
{ timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);