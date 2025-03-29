import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

const AdminDashboard = () => {
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
        alert("Failed to fetch loans");
      }
    };
    fetchLoans();
  }, []);

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/api/loans/${id}`, { status: "approved" }, {
        headers: { Authorization: token },
      });
      alert("Loan Approved");
      setLoans(loans.map((loan) => (loan._id === id ? { ...loan, status: "approved" } : loan)));
    } catch (err) {
      alert("Approval Failed");
    }
  };

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/api/loans/${id}`, { status: "rejected" }, {
        headers: { Authorization: token },
      });
      alert("Loan Rejected");
      setLoans(loans.map((loan) => (loan._id === id ? { ...loan, status: "rejected" } : loan)));
    } catch (err) {
      alert("Rejection Failed");
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan._id}>
            User: {loan.userId} | Name:{loan.name} | Loan Type:{loan.loantype} | Amount: ₹{loan.amount} | Number:{loan.num} | Status: {loan.status} | File:{loan.file}
            <button onClick={() => handleApprove(loan._id)}>Approve</button>
            <button onClick={() => handleReject(loan._id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;


// import { useNavigate } from "react-router-dom";
// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [loans, setLoans] = useState([]);

//   useEffect(() => {
//       // Check if admin is logged in
//       const isAdmin = localStorage.getItem("isAdmin");
//       if (isAdmin !== "true") {
//           alert("Access Denied! Admins Only.");
//           navigate("/login");
//           return;
//       }

//       // Fetch loans
//       axios.get("http://localhost:5000/api/loans")
//           .then(response => setLoans(response.data))
//           .catch(error => console.error("Error fetching loans:", error));
//   }, [navigate]);

//   return (
//       <div>
//           <h2>Admin Dashboard - Manage Loans</h2>
//           <table border="1">
//               <thead>
//                   <tr>
//                       <th>Applicant</th>
//                       <th>Amount</th>
//                       <th>Status</th>
//                   </tr>
//               </thead>
//               <tbody>
//                   {loans.map((loan) => (
//                       <tr key={loan._id}>
//                           <td>{loan.user.name}</td>
//                           <td>₹{loan.amount}</td>
//                           <td>{loan.status}</td>
//                       </tr>
//                   ))}
//               </tbody>
//           </table>
//       </div>
//   );
// };

// export default AdminDashboard;