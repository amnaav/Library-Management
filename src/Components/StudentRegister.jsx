
import { useState } from "react"
import "../Styles/StudentLogin.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase"

const StudentRegister = () => {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[department,setDepartment]=useState("")
    const register= async (e) => {
        e.preventDefault()
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        }
    }
  return (
        <div>
            <div className="login-page">
                <div className="login-box">
                    <h2>Student Register</h2>
                    <form>
                        <div className="input-group">
                            <label>Username</label>
                            <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your name"/>
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
                        </div>
                        <div className="input-group">
                            <label>Department</label>
                            <input type="text" onChange={(e)=>setDepartment(e.target.value)} placeholder="Enter department"/>
                        </div>
                        <button className="login-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default StudentRegister
