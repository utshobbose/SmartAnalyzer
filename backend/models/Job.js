const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        company: { type: String, required: true },
        location: { type: String, default: "Remote" },
        description: { type: String, required: true },
        skills: [String],
        embedding: {
        type: [Number],
        default: [],
        },
        source: { type: String, default: "manual" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);