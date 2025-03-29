import React, { useEffect, useState } from "react";
import axios from "axios";
import "./userDashboard.css";

const UserDashboard = () => {
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
    <div className="user-dashboard">
      <h2>Your Loan Applications</h2>
      
      <table border="1">
  <thead>
    <tr>
      <th>User</th>
      <th>Name</th>
      <th>Loan Type</th>
      <th>Amount</th>
      <th>Number</th>
      <th>Status</th>
      <th>File</th>
      <th>Repayment Date</th>
    </tr>
  </thead>
  <tbody>
    {loans.map((loan) => (
      <tr key={loan._id}>
        <td>{loan.userId}</td>
        <td>{loan.name}</td>
        <td>{loan.loantype}</td>
        <td>₹{loan.amount}</td>
        <td>{loan.num}</td>
        <td>{loan.status}</td>
        <td>{loan.file}</td>
        <td>{new Date(loan.repaymentDate).toDateString()}</td>
      </tr>
    ))}
  </tbody>
</table>

          
        
      
    </div>
  );
};

export default UserDashboard;
