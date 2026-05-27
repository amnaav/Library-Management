import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { db } from '../Firebase'

const Edit = () => {
    const[name,setName]=useState("")
    const[author,setAuthor]=useState("")
    const[category,setCategory]=useState("")
    const[quantity,setQuantity]=useState("")
    const {id} = useParams()
    const fetchBooks = async(e) =>{
        const docRef=doc(db,"Book",id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const data = docSnap.data()
            setName(data.Name);
            setAuthor(data.Author);
            setCategory(data.Category);
            setQuantity(data.Quantity);
        }
    };
    useEffect(()=>{
        fetchBooks();
    },[fetchBooks]);
    const updateBook= async(e) =>{
        e.preventDefault()
        const bookRef=doc(db,"Book",id);
        await updateDoc(bookRef,{
            Name:name,
            Author:author,
            Category:category,
            Quantity:quantity
        })
        alert("Book updated successfully")
        navigate('/viewbooks')
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
                <h1>Edit Book</h1>
                <div className="form-container">
                    <form className="add-book-form" onSubmit={updateBook}>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Book Title" required/>
                        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Author Name" required/>
                        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Category" required/>
                        <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder="Quantity" required/>
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Edit
