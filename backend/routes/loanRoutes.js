const express = require("express");
const Loan = require("../models/Loan");
const authMiddleware = require("../middleware/authmiddleware");

const router = express.Router();

// Apply for a Loan
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { amount, repaymentDate } = req.body;
    const newLoan = new Loan({ userId: req.user.userId, amount, repaymentDate });
    await newLoan.save();
    res.status(201).json({ message: "Loan application submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get User Loans
router.get("/", authMiddleware, async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.user.userId });
    res.json(loans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin: Approve/Reject Loan
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin") return res.status(403).json({ error: "Unauthorized" });

    const { status } = req.body;
    await Loan.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: "Loan status updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


// Approve Loan (Admin Only)
// router.put("/approve/:id", async (req, res) => {
//   try {
//       const { loanId } = req.params;
      
//       // Find loan and update status
//       const loan = await Loan.findByIdAndUpdate(
//           loanId,
//           { status: "approved" }, // Update status to "approved"
//           { new: true } // Return updated loan
//       );

//       if (!loan) {
//           return res.status(404).json({ message: "Loan not found" });
//       }

//       res.json({ message: "Loan approved successfully", loan });
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
