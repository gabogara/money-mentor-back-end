const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },

    description: { type: String, trim: true },

    date: { type: Date, default: Date.now, required: true },

    type: { type: String, enum: ["income", "expense"], required: true },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    note: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
