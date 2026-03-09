import { useNavigate } from "react-router-dom";
import "../Styles/Viewbooks.css";

const ViewBooks = () => {
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

        <h1>View Books</h1>

        <table className="book-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>

      </div>
    </div>
  );
};

export default ViewBooks;