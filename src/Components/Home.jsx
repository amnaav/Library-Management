import { Link } from "react-router-dom";
import "../Styles/Home.css";


const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">📚Library LMS</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#feature">Features</a></li>
          <li><a href="#books">Books</a></li>
          <li><Link to="/adminlogin">Admin Login</Link></li>
          <li><Link to="/studentlogin">Student Login</Link></li>
        </ul>

        <Link to="/studentregister" className="register-btn">Register</Link>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Digital Library Platform</h1>

          <p>
            Discover thousands of books, manage borrowing, and experience a
            smart digital library.
          </p>

          <div className="hero-buttons">
            <button className="browse-btn">Browse books</button>
            <Link to="/studentlogin" className="student-btn">Student Login</Link>
          </div>
        </div>
      </section>
      <section className='stats'id ="stats">
        <div className="stat">
          📚
          <h2>5000+</h2>
          <p>Books Available</p>
        </div>

        <div className="stat">
          👩‍🎓
          <h2>1200+</h2>
          <p>Students</p>
        </div>

        <div className="stat">
          👨‍💻
          <h2>350+</h2>
          <p>Daily Readers</p>
        </div>

        <div className="stat">
          📘
          <h2>50+</h2>
          <p>Categories</p>
        </div>
      </section>
      <section className='features' id ="feature">
        <h2>Library Features</h2>
          <div className='feature-grid'>
            <div className='feature-card'>
              📚
              <h3>Smart Book Search</h3>
              <p>Find books by title,author, and category.</p>
            </div>
            <div className='feature-card'>
              🔄
              <h3>Easy Issue & Return</h3>
              <p>Issue and return books digitally.</p>
            </div>
            <div className='feature-card'>
              📊
              <h3>Admin Dashboard</h3>
              <p>Monitor library activities & reports.</p>
            </div>
            <div className="feature-card">
            💰
            <h3>Fine Management</h3>
            <p>Automated overdue fine tracking.</p>
          </div>
        </div>
      </section>
      <section className='categories'id ="categories">
        <h2>Book Categories</h2>
        <div className='category-grid'>
          <div className='cat blue'>Programming</div>
          <div className='cat green'>science</div>
          <div className='cat red'>Technology</div>
          <div className='cat yellow'>History</div>
          <div className='cat purple'>Education</div>
          <div className='cat orange'>Mathematics</div>
        </div>
      </section>
      <section className='books'id ="books">
        <h2>Popular Books</h2>
        <div className='book-grid'>
          <div className="book-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"/>
            <h4>React Development</h4>
          </div>
          <div className="book-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"/>
            <h4>Data Structures</h4>
          </div>
          <div className="book-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"/>
            <h4>Machine Learning</h4>
          </div>
          <div className="book-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"/>
            <h4>Artificial Intelligence</h4>
          </div>
        </div>
      </section>
      <section className='cta'>
        <h2>Start Your Learning Journey Today</h2>
        <p>Join our digital library and explore unlimited books</p>
        <Link to="/studentregister" className="cta-btn">Register Now</Link>
      </section>
    </div>
  );
};

export default Home;