import { useNavigate } from "react-router-dom";
import '../Styles/MyIssuedBooks.css'
const MyIssuedBooks = () => {
    const navigate = useNavigate()
        const logout = () => (
            navigate('/')
    )
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>

        <ul className='sidebar-menu'>
            <li><a href='/studentdashboard'>📊 Dashboard</a></li>
            <li><a href='/browsebooks'>📚 Browse Books</a></li>
            <li><a href='myissuedbooks'>📖 My Issued Books</a></li>
            <li>↩ Return Books</li>
            <li>👤 Profile</li>
            <li onClick={logout}>🚪 Logout</li>
        </ul>
      </div>
      <div className="main-content">

        <h1>My Issued Books</h1>

        <table className="book-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Issue Date</th>
              <th>Return Date</th>
            </tr>
          </thead>

          <tbody>
            
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MyIssuedBooks;