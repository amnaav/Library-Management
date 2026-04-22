import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import "../Styles/AddBook.css";
import { useNavigate } from "react-router-dom";

const AddBook = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");

    const generateBookCode = (bookName, count) => {
        const prefix = bookName
            .substring(0, 3)
            .toUpperCase()
            .replace(/[^A-Z]/g, '') || "BK";

        const number = String(count + 1).padStart(3, "0");

        return `BOOK-${prefix}${number}`;
    };

    const addBook = async (e) => {
        e.preventDefault();

        try {
            const snapshot = await getDocs(collection(db, "Book"));
            const count = snapshot.size;

            const bookCode = generateBookCode(name, count);

            await addDoc(collection(db, "Book"), {
                Name: name,
                Author: author,
                Category: category,
                Quantity: Number(quantity),
                bookCode: bookCode,
                createdAt: new Date()
            });

            alert(`Book Added!\nCode: ${bookCode}`);

            setName("");
            setAuthor("");
            setCategory("");
            setQuantity("");

        } catch (err) {
            alert(err.message);
        }
    };

    const logout = () => navigate('/');

    return (
        <div className="addbook-container">

            {/* SIDEBAR */}
            <div className="addbook-sidebar">
                <h2 className="addbook-logo">📚 LMS</h2>

                <ul className="addbook-menu">
                    <li><a href="/admindashboard">Dashboard</a></li>
                    <li className="active"><a href="/addbook">Add Books</a></li>
                    <li><a href="/viewbooks">View Books</a></li>
                    <li><a href="/students">Students</a></li>
                    <li><a href="/issuebook">Issue Books</a></li>
                    <li><a href="/returnbook">Return Book</a></li>
                    <li onClick={logout}>Logout</li>
                </ul>
            </div>

            {/* MAIN */}
            <div className="addbook-main">
                <h1 className="addbook-title">Add Book</h1>

                <div className="addbook-form-wrapper">
                    <form onSubmit={addBook} className="addbook-form">
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Book Name" required />
                        <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
                        <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
                        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" required />
                        <button type="submit">Add Book</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddBook;