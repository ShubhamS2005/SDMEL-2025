import mongoose from "mongoose";

const PaperSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  email: { type: String, required: true },
  file: { type: String, required: true },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Paper", PaperSchema);
