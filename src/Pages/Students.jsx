import { useNavigate } from "react-router-dom";
import "../Styles/Students.css";
import React from 'react'

const Students = () => {
  const navigate = useNavigate()
    const logout = () => (
        navigate('/')
    )
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>
        <ul className="sidebar-menu">
            <li><a href='/admindashboard'>📊Dashboard</a></li>
            <li><a href='/addbook'>📚Add Books</a></li>
            <li><a href='/viewbooks'>📖View Books</a></li>
            <li><a href='/students'>👥Students</a></li>
            <li><a href='/issuebook'>📕Issue Books</a></li>
            <li><a href='/returnbook'>↩Return Book</a></li>
            <li onClick={logout}>🚪Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Registered Students</h1>
        <table className="book-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
      </div>
    </div>
  );
};

export default Students
