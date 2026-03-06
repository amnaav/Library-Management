
import "../Styles/StudentLogin.css"

const StudentRegister = () => {
  return (
        <div>
            <div className="login-page">
                <div className="login-box">
                    <h2>Student Register</h2>
                    <form>
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name"/>
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email"/>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter password"/>
                        </div>
                        <div className="input-group">
                            <label>Department</label>
                            <input type="text" placeholder="Enter department"/>
                        </div>
                        <button className="login-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default StudentRegister
