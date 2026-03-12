import { useNavigate } from "react-router-dom";
import "../Styles/Dashboard.css";
import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const BrowseBooks = () => {
  const navigate = useNavigate()
    const logout = () => (
      navigate('/')
    )
    const[books,setBooks]=useState([])
    const fetchBooks= async () =>{
      const querySnapshot= await getDocs(collection (db,"Book"));
      const data = querySnapshot.docs.map(doc =>({
        id:doc.id,
        ...doc.data()
      }));
      setBooks(data);
    }
    useEffect(()=>{
      fetchBooks();
    },[])
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>
        <ul className='sidebar-menu'>
            <li><a href='/studentdashboard'>📊 Dashboard</a></li>
            <li><a href='/browsebooks'>📚 Browse Books</a></li>
            <li><a href='/myissuedbooks'>📖 My Issued Books</a></li>
            <li><a href='/returnbooks'>↩ Return Books</a></li>
            <li><a href='/profile'>👤 Profile</a></li>
            <li onClick={logout}>🚪 Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Browse Books</h1>
        <table className="book-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book,index)=>(
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.Name}</td>
              <td>{book.Author}</td>
              <td>{book.Category}</td>
              <td>{book.Quantity}</td>
            </tr>
          ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default BrowseBooks;