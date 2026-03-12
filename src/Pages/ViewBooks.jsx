import { useNavigate } from "react-router-dom";
import "../Styles/Viewbooks.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const ViewBooks = () => {
  const navigate = useNavigate()
    const logout = () => (
        navigate('/')
    )
    const[books,setBooks]=useState([])
    const fetchBooks = async () =>{
      const querySnapshot=await getDocs(collection(db,"Book"));
      const data = querySnapshot.docs.map(doc=> ({
        id:doc.id,
        ...doc.data()
      }));
      setBooks(data);
    }
    useEffect(() =>{
      fetchBooks();
    },[]);
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

        <h1>View Books</h1>

        <table className="book-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Actions</th>
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

export default ViewBooks;