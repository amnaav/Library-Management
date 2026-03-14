import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
import '../Styles/AddBook.css'
const AddBook = () => {
    const[name,setName]=useState("")
    const[author,setAuthor]=useState("")
    const[category,setCategory]=useState("")
    const[quantity,setQuantity]=useState("")
    const addbook = async(e) => {
        e.preventDefault()
        try{
            await addDoc(collection(db,'Book'),{
                Name:name,
                Author:author,
                Category:category,
                Quantity:Number(quantity)
            })
            alert("Book added successfully")
        }catch(e){
            alert(e.message)
        }
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
                <h1>Add New Book</h1>
                <div className="form-container">
                    <form className="add-book-form">
                        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Book Title" required/>
                        <input type="text" onChange={(e)=>setAuthor(e.target.value)} placeholder="Author Name" required/>
                        <input type="text" onChange={(e)=>setCategory(e.target.value)} placeholder="Category" required/>
                        <input type="text" onChange={(e)=>setQuantity(e.target.value)} placeholder="Quantity" required/>
                        <button type="submit" onClick={addbook}>Add Book</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddBook