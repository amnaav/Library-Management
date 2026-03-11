import { Link, useNavigate } from "react-router-dom"
import "../Styles/StudentLogin.css"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "../Firebase"

const StudentLogin = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate();
    const login = async(e) => {
        e.preventDefault()
        try{
            const userCredential=await signInWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            const docRef=doc(db,"Registration",user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                navigate('/studentdashboard')
            }
            else{
                alert('Not Registered')
            }
        }catch(e){
            alert(e.message)
        }
    }
  return (
        <div>
            <div className="login-page">
                <div className="login-box">
                    <h2>Student Login</h2>
                    <form onSubmit={login}>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" onChange={(e) =>setEmail(e.target.value)} placeholder="Enter your email"/>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                        </div>
                        <button type="submit" className="login-btn" >Login</button>
                        <p className="login-text">Don't have an account? <span><Link to="/studentregister">Register</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default StudentLogin
