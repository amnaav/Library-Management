import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const BrowseBooks = () => {
  const navigate = useNavigate()
    const logout = () => (
      navigate('/')
    )
    const[books,setBooks]=useState([])
    const[search,setSearch]=useState("")
    const fetchBooks= async () =>{
      const querySnapshot= await getDocs(collection (db,"Book"));
      const data = querySnapshot.docs.map(doc =>({
        id:doc.id,
        ...doc.data()
      }));
      setBooks(data);
    }
    const filterBooks=books.filter(book=>
      book.Name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    useEffect(()=>{
      fetchBooks();
    },[])
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>
        <ul className='sidebar-menu'>
            <li><a href='/studentdashboard'>Dashboard</a></li>
            <li><a href='/browsebooks'>Browse Books</a></li>
            <li><a href='/myissuedbooks'>My Issued Books</a></li>
            <li><a href='/profile'>Profile</a></li>
            <li onClick={logout}>Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Browse Books</h1>
        <input type="text" placeholder="Search Books" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        <table className="book-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filterBooks.map((book,index)=>(
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.Name}</td>
              <td>{book.Author}</td>
              <td>{book.Category}</td>
              <td>{book.Quantity}</td>
              <td>{book.Quantity>0?(
                <span>Available</span>):(
                  <span>Unavailable</span>
              )}</td>
            </tr>
          ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default BrowseBooks;