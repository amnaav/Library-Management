import { useNavigate } from "react-router-dom";
import "../Styles/Dashboard.css";

const BrowseBooks = () => {
  const navigate = useNavigate()
    const logout = () => (
        navigate('/')
    )
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>
        <ul className="sidebar-menu">
          <li><a href='/studentdashboard'>📊 Dashboard</a></li>
            <li><a href='/browsebooks'>📚 Browse Books</a></li>
            <li>📖 My Issued Books</li>
            <li>↩ Return Books</li>
            <li>👤 Profile</li>
            <li onClick={logout}>🚪 Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Browse Books</h1>
        <table className="book-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default BrowseBooks;