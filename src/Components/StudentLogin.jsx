import { Link } from "react-router-dom"
import "../Styles/StudentLogin.css"

const StudentLogin = () => {
  return (
        <div>
            <div className="login-page">
                <div className="login-box">
                    <h2>Student Login</h2>
                    <form>
                        <div className="input-group">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username"/>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password"/>
                        </div>
                        <button className="login-btn">Login</button>
                        <p className="login-text">Don't have an account? <span><Link to="/studentregister">Register</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default StudentLogin
