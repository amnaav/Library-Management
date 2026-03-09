import { useNavigate } from "react-router-dom"
import "../Styles/Issuebook.css"

const IssueBooks = () => {
    const navigate = useNavigate()
    const logout = () => (
        navigate('/')
    )
  return (
    <div>
        <div className="admin-container">
            <div className="sidebar">
            <h2 className="sidebar-logo">📚 LMS</h2>
            <ul className="sidebar-menu">
                <li><a href='/admindashboard'>📊Dashboard</a></li>
                <li><a href='/addbook'>📚Add Books</a></li>
                <li><a href='/viewbooks'>📖View Books</a></li>
                <li><a href='/students'>👥Students</a></li>
                <li><a href='/issuebook'>📕Issue Books</a></li>
                <li><a href='/returnbook'>↩Return Book</a></li>
                <li onClick={logout}>🚪Logout</li>
            </ul>
        </div>
        <div className="main-content">
            <h1>Issue Book</h1>
            <div className="form-container">
                <form className="add-book-form">
                    <label>Select Student</label>
                    <option></option>

                    <label>Select Book</label>
                    <option></option>

                    <label>Issue Date</label>
                    <input type="date"/>

                    <label>Return Date</label>
                    <input type="date"/>

                    <button type="submit">Issue Book</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default IssueBooks
