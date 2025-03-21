import React, { useEffect, useState } from "react";
import axios from "axios";

const LoanStatus = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/loans", {
          headers: { Authorization: token },
        });
        setLoans(res.data);
      } catch (err) {
        alert("Failed to fetch loan data");
      }
    };
    fetchLoans();
  }, []);

  return (
    <div>
      <h2>Your Loan Applications</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan._id}>
            Amount: ${loan.amount} | Status: {loan.status} | Repayment Date: {new Date(loan.repaymentDate).toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanStatus;
