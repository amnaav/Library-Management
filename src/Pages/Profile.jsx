import { useNavigate } from "react-router-dom";
import "../Styles/profile.css";

const Profile = () => {

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
            <li><a href='/profile'>👤 Profile</a></li>
            <li onClick={logout}>🚪 Logout</li>
        </ul>
      </div>

      <div className="main-content">

        <h1>Student Profile</h1>

        <div className="dash-card">

        </div>

      </div>

    </div>
  );
};

export default Profile;