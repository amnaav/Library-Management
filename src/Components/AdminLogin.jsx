import { Link } from "react-router-dom"
import "../Styles/StudentLogin.css"

const AdminLogin = () => {
  return (
    <div>
        <div className="login-page">
                <div className="login-box">
                    <h2>Admin Login</h2>
                    <form>
                        <div className="input-group">
                            <label>Admin Email</label>
                            <input type="email" placeholder="Enter your email"/>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password"/>
                        </div>
                        <button className="login-btn">Login</button>
                        <p className="login-text">Back to <Link to="/">Home</Link></p>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default AdminLogin
