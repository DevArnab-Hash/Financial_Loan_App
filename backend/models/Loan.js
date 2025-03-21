const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  repaymentDate: Date
});

module.exports = mongoose.model("Loan", LoanSchema);


// const mongoose = require("mongoose");

// const LoanSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     amount: { type: Number, required: true },
//     status: { type: String, default: "pending" }, // Pending by default
//     createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Loan", LoanSchema);