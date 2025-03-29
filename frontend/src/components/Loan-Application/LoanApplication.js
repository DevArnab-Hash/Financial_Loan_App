import React, { useState } from "react";
import axios from "axios";
import "./loanApplication.css";

const LoanApplication = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [repaymentDate, setRepaymentDate] = useState("");
  const [num, setNum] = useState("");
  const [loantype, setLoantype] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/loans",
        { amount, repaymentDate, num, loantype, name, file },
        {
          headers: { Authorization: token },
        }
      );
      alert("Loan Application Submitted");
    } catch (err) {
      alert("Application Failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="loanapp-container">
        <h2>Apply for Loan</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Loan-Type:</label>
        <select
          value={loantype}
          onChange={(e) => setLoantype(e.target.value)}
          required
        >
          <option></option>
          <option>personal loan</option>
          <option>Student loan</option>
          <option>Car loan</option>
          <option>Home loan</option>
          <option>Gold loan</option>
        </select>
        <input
          type="number"
          placeholder="Loan Amount⟨₹⟩"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Enter Your Phone No."
          value={num}
          onChange={(e) => setNum(e.target.value)}
          required
        />
        <label>Enter a document proof </label>
        <input
          type="file"
          value={file}
          onChange={(e) => setFile(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Repayment Date"
          value={repaymentDate}
          onChange={(e) => setRepaymentDate(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Apply</button>
      </form>
    </div>
  );
};

export default LoanApplication;
