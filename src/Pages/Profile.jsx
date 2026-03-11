import { useNavigate } from "react-router-dom";
import "../Styles/profile.css";

const Profile = () => {

  const navigate = useNavigate();


  return (
    <div className="admin-container">

      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>

        <ul className="sidebar-menu">
          <li onClick={() => navigate("/studentdashboard")}>📊 Dashboard</li>
          <li onClick={() => navigate("/browsebooks")}>📚 Browse Books</li>
          <li onClick={() => navigate("/myissued")}>📖 My Issued Books</li>
          <li onClick={() => navigate("/returnbooks")}>↩ Return Books</li>
          <li onClick={() => navigate("/profile")}>👤 Profile</li>
          <li onClick={() => navigate("/")}>🚪 Logout</li>
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