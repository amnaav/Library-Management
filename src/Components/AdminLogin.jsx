import { Link, useNavigate } from "react-router-dom"
import '../Styles/AdminLogin.css'
import { useState } from "react"

const AdminLogin = () => {
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate();
    const login = () =>{
        if(username ==='admin' && password ==='admin123'){
            navigate('/admindashboard');
        }
        else{
            alert('invalid username or password')
        }
    };
    return (
        <div>
            <div className="login-page">
                    <div className="login-box">
                        <h2>Admin Login</h2>
                        <form>
                            <div className="input-group">
                                <label>Admin Username</label>
                                <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your username"/>
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                            </div>
                            <button className="login-btn" onClick={login}>Login</button>
                            <p className="login-text">Back to <Link to="/">Home</Link></p>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default AdminLogin
