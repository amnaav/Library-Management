import { useNavigate } from "react-router-dom";
import "../Styles/AddBook.css";
const AddBook = () => {
    const navigate = useNavigate()
    const logout = () => (
        navigate('/')
    )
  return (

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
                <h1>Add New Book</h1>
                <div className="form-container">
                    <form className="add-book-form">
                        <input type="text" placeholder="Book Title" required/>
                        <input type="text" placeholder="Author Name" required/>
                        <input type="text" placeholder="Category" required/>
                        <input type="text" placeholder="Quantity" required/>
                        <input type="text" placeholder="Book Image URL"/>
                        <button type="submit">Add Book</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddBook