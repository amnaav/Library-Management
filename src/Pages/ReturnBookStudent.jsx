import { useNavigate } from "react-router-dom";
import "../Styles/Dashboard.css";

const ReturnBookStudent = () => {

  const navigate = useNavigate();
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
            <li><a href='/myissuedbooks'>📖 My Issued Books</a></li>
            <li><a href='/returnbooks'>↩ Return Books</a></li>
            <li><a href='/profile'>👤 Profile</a></li>
            <li onClick={logout}>🚪 Logout</li>
        </ul>
      </div>

      <div className="main-content">

        <h1>Return Books</h1>

        <table className="book-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Book</th>
              <th>Author</th>
              <th>Issue Date</th>
              <th>Return Date</th>
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

export default ReturnBookStudent;