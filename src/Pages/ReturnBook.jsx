import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../Firebase'
import '../Styles/ReturnBook.css'

const ReturnBook = () => {

    const navigate = useNavigate()
    const logout = () => navigate('/')

    const [borrowed, setBorrowed] = useState([])

    useEffect(() => {
        fetchBorrowed()
    }, [])

    const fetchBorrowed = async () => {
        const snap = await getDocs(collection(db, 'BorrowedBooks'))

        let data = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        data.sort((a, b) => {
            const nameA = (a.studentName || "").toLowerCase()
            const nameB = (b.studentName || "").toLowerCase()
            return nameA.localeCompare(nameB)
        })

        setBorrowed(data)
    }

    const returnBook = async (borrow) => {

        const bookRef = doc(db, 'Book', borrow.bookId)
        const bookSnap = await getDoc(bookRef)
        const bookData = bookSnap.data()

        const today = new Date()
        const formattedDate = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear()

        await updateDoc(doc(db, 'BorrowedBooks', borrow.id), {
            status: 'Returned',
            actualReturnDate: formattedDate
        })

        await updateDoc(bookRef, {
            Quantity: bookData.Quantity + 1
        })

        alert('Book Returned Successfully')
        fetchBorrowed()
    }

    const formatDate = (date) => {
        if (!date) return "-"
        return date
    }

    const convertToDate = (dateStr) => {
        if (!dateStr) return null
        const parts = dateStr.split('/')
        return new Date(parts[2], parts[1] - 1, parts[0])
    }

    const isOverdue = (item) => {
        if (!item.returnDate) return false

        const now = new Date()
        const returnDate = convertToDate(item.returnDate)

        return now > returnDate && item.status === "Issued"
    }

    return (
        <div className="admin-container">

            {/* SIDEBAR */}
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

            {/* MAIN */}
            <div className="main-content">
                <h1>Return Books</h1>

                <table className="book-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Code</th>
                            <th>Book</th>
                            <th>Book Code</th>
                            <th>Borrow Date</th>
                            <th>Return Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {borrowed.map(b => (
                            <tr key={b.id} className={isOverdue(b) ? "overdue-row" : ""}>

                                <td>{b.studentName || "-"}</td>
                                <td>{b.studentCode || "-"}</td>

                                <td>{b.bookName || "-"}</td>
                                <td>{b.bookCode || "-"}</td>

                                <td>{formatDate(b.borrowDate)}</td>
                                <td>{formatDate(b.returnDate)}</td>

                                <td>
                                    {isOverdue(b) ? "Overdue" : b.status}
                                </td>

                                <td>
                                    {b.status === 'Issued' && (
                                        <button
                                            className='return-btn'
                                            onClick={() => returnBook(b)}
                                        >
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