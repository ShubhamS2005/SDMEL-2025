import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  category: { type: String, enum: ["Diamond", "Gold", "Silver", "Bronze","Other"], required: true },
  amountPaid: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Sponsor", SponsorSchema);
