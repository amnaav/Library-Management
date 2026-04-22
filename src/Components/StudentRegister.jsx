import '../Styles/StudentRegister.css'
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../Firebase"
import { doc, setDoc } from "firebase/firestore"
import { Link } from 'react-router-dom'

const StudentRegister = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [department, setDepartment] = useState("")

    const generateStudentCode = () => {
        return "STU-" + Date.now().toString().slice(-6)
    }

    const register = async (e) => {
        e.preventDefault()

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            const studentCode = generateStudentCode()

            await setDoc(doc(db, "Registration", user.uid), {
                Username: username,
                Email: email,
                Department: department,
                Role: "student",
                studentCode: studentCode
            })

            alert("Registered successfully")

        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Student Register</h2>

                <form onSubmit={register}>

                    <div className="input-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Enter your name" 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input 
                            type="email"
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label>Department</label>
                        <input 
                            type="text"
                            onChange={(e) => setDepartment(e.target.value)} 
                            placeholder="Enter department" 
                            required 
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Register
                    </button>

                    <p className="login-text">
                        Back to <Link to="/">Home</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default StudentRegister