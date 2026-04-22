import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
import "../Styles/IssueBooks.css";

const IssueBooks = () => {

    const [books, setBooks] = useState([]);
    const [students, setStudents] = useState([]);

    const [bookCode, setBookCode] = useState("");
    const [studentCode, setStudentCode] = useState("");

    const [searchBook, setSearchBook] = useState("");
    const [searchStudent, setSearchStudent] = useState("");

    useEffect(() => {
        fetchBooks();
        fetchStudents();
    }, []);

    const fetchBooks = async () => {
        const snap = await getDocs(collection(db, 'Book'));
        setBooks(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };

    const fetchStudents = async () => {
        const snap = await getDocs(collection(db, 'Registration'));
        setStudents(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };

    const issuebook = async (e) => {
        e.preventDefault();

        const cleanBookCode = bookCode.trim().toUpperCase();
        const cleanStudentCode = studentCode.trim().toUpperCase();

        const book = books.find(b => b.bookCode === cleanBookCode);
        const student = students.find(s => s.studentCode === cleanStudentCode);

        if (!book) return alert("Invalid Book Code");
        if (!student) return alert("Invalid Student Code");
        if (book.Quantity <= 0) return alert("Book Out of Stock");

        const today = new Date();
        const returnDate = new Date();
        returnDate.setDate(today.getDate() + 7);

        await addDoc(collection(db, "BorrowedBooks"), {
            studentName: student.Username,
            studentEmail: student.Email,
            studentCode: student.studentCode,

            bookId: book.id,
            bookName: book.Name,
            bookCode: book.bookCode,

            borrowDate: today.toLocaleDateString(),
            returnDate: returnDate.toLocaleDateString(),
            status: "Issued"
        });

        await updateDoc(doc(db, 'Book', book.id), {
            Quantity: book.Quantity - 1
        });

        alert("Book Issued Successfully");

        setBookCode("");
        setStudentCode("");

        fetchBooks();
    };

    const navigate = useNavigate();

    const logout = () => navigate('/');

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

                <div className="page-header">
                    <h1>Issue Book</h1>
                    <p>Select student & book or type code</p>
                </div>

                <div className="issue-layout">

                    
                    <div className="list-card">
                        <h3>Students</h3>

                        <input
                            className="search-box"
                            placeholder="Search student..."
                            value={searchStudent}
                            onChange={(e) => setSearchStudent(e.target.value)}
                        />

                        <div className="scroll-box">
                            {students
                                .filter(s =>
                                    s.Username?.toLowerCase().includes(searchStudent.toLowerCase())
                                )
                                .map(s => (
                                    <p key={s.id} onClick={() => setStudentCode(s.studentCode)}>
                                        {s.Username}
                                        <span>{s.studentCode}</span>
                                    </p>
                                ))}
                        </div>
                    </div>

                    
                    <div className="form-card">
                        <h3>Issue Form</h3>

                        <form onSubmit={issuebook}>
                            <input
                                placeholder="Student Code"
                                value={studentCode}
                                onChange={(e) => setStudentCode(e.target.value)}
                                required
                            />

                            <input
                                placeholder="Book Code"
                                value={bookCode}
                                onChange={(e) => setBookCode(e.target.value)}
                                required
                            />

                            <button type="submit">Issue Book</button>
                        </form>
                    </div>

                    
                    <div className="list-card">
                        <h3>Books</h3>

                        <input
                            className="search-box"
                            placeholder="Search book..."
                            value={searchBook}
                            onChange={(e) => setSearchBook(e.target.value)}
                        />

                        <div className="scroll-box">
                            {books
                                .filter(b =>
                                    b.Name?.toLowerCase().includes(searchBook.toLowerCase())
                                )
                                .map(b => (
                                    <p key={b.id} onClick={() => setBookCode(b.bookCode)}>
                                        {b.Name}
                                        <span>{b.bookCode}</span>
                                    </p>
                                ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default IssueBooks;