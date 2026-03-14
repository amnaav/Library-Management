import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../Firebase'
import '../Styles/ReturnBook.css'

const ReturnBook = () => {
    const navigate = useNavigate()
    const logout = () => (
        navigate('/')
    )
    const[borrowed,setBorrowed]=useState([])
    useEffect(()=>{
        fetchBorrowed()
    },[])
    const fetchBorrowed=async()=>{
        const snap=await getDocs(collection(db,'BorrowedBooks'))
        setBorrowed(snap.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        })))
    }
    const returnBook=async(borrow)=>{
        const bookRef=doc(db,'Book',borrow.bookId)
        const bookSnap=await getDoc(bookRef)
        const bookData=bookSnap.data()
        await updateDoc(doc(db,'BorrowedBooks',borrow.id),{
            status:'Returned',
            returnDate:new Date().toLocaleDateString()
        })
        await updateDoc(bookRef,{
            Quantity:bookData.Quantity+1
        })
        alert('Book Returned')
        fetchBorrowed()
    }
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
                        <th>Student</th>
                        <th>Book Name</th>
                        <th>Borrow Date</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {borrowed.map(b=>(
                            <tr key={b.id}>
                                <td>{b.studentName}</td>
                                <td>{b.bookName}</td>
                                <td>{b.borrowDate}</td>
                                <td>{b.status}</td>
                                <td>
                                    {b.status==='Issued' && (
                                    <button className='return-btn' onClick={()=>returnBook(b)}>
                                        Return
                                    </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReturnBook
