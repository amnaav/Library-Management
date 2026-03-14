import { useNavigate } from "react-router-dom";
import '../Styles/ViewBooks.css'
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
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
    const editBook = (id) =>{
      navigate(`/editbook/${id}`)
    }
    const deleteBook = async(id)=>{
      const confirmDelete = window.confirm('Are you sure want to delete this book?')
      if(confirmDelete){
        await deleteDoc(doc(db,"Book",id))
        fetchBooks()
      }
    }
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
              <td><button className="edit-btn" onClick={()=>editBook(book.id)}>Edit</button>
                  <button className="delete-btn" onClick={()=>deleteBook(book.id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ViewBooks;