import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import {collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const Students = () => {
  const[student,setStudent]=useState([])
  useEffect(()=>{
    fetchStudent()
  })
  const fetchStudent = async() =>{
    const snap = await getDocs(collection(db,'Registration'))
    const list = snap.docs.map(doc => ({
      id:doc.id,
      ...doc.data()
    }))
    setStudent(list)
  }
  const navigate = useNavigate()
    const logout = () => (
        navigate('/')
    )
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>
        <ul className="sidebar-menu">
            <li><a href='/admindashboard'>Dashboard</a></li>
            <li><a href='/addbook'>Add Books</a></li>
            <li><a href='/viewbooks'>View Books</a></li>
            <li><a href='/students'>Students</a></li>
            <li><a href='/issuebook'>Issue Books</a></li>
            <li><a href='/returnbook'>Return Book</a></li>
            <li onClick={logout}>Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Registered Students</h1>
        <table className="book-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Role</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
              {student.map(a=>(
                <tr key={a.id}>
                  <td>{a.Username}</td>
                  <td>{a.Email}</td>
                  <td>{a.Department}</td>
                  <td>{a.Role}</td>
                  <td>{a.studentCode}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students
