const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Job Schema
const jobSchema = new mongoose.Schema({
    company: String,
    position: String,
    status: { type: String, enum: ["Applied", "Interviewing", "Rejected", "Accepted"], default: "Applied" },
    interviewDate: Date,
    recruiterFeedback: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' } // Reference to User model
});

// Exporting the models
const User = mongoose.model("User ", userSchema);
const Job = mongoose.model("Job", jobSchema);

module.exports = { User, Job };
