import React, { useState } from "react";
import axios from "axios";

const LoanApplication = () => {
  const [amount, setAmount] = useState("");
  const [repaymentDate, setRepaymentDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/loans", { amount, repaymentDate }, {
        headers: { Authorization: token },
      });
      alert("Loan Application Submitted");
    } catch (err) {
      alert("Application Failed");
    }
  };

  return (
    <div>
      <h2>Apply for Loan</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <input type="date" placeholder="Repayment Date" value={repaymentDate} onChange={(e) => setRepaymentDate(e.target.value)} required />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default LoanApplication;
