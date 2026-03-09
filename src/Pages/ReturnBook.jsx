import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReturnBook = () => {
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
                <h1>Return Books</h1>
                <table className="book-table">

                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>Book Name</th>
                        <th>Issue Date</th>
                        <th>Return Date</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReturnBook
