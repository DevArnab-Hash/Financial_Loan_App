const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  file: String,
  name:String,
  loantype:{type:String},
  amount: Number,
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  repaymentDate: Date,
  num: Number

});

module.exports = mongoose.model("Loan", LoanSchema);
