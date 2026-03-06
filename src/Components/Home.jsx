import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import Book from './Book'
import Feature from './Feature'
import Stat from './Stat'
import Category from './Category'

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          📚Library LMS
        </div>
        <ul className="nav-links">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/feature'}>Features</Link></li>
          <li><Link to={'/book'}>Books</Link></li>
          <li>Admin Login</li>
          <li>Student Login</li>
        </ul>
        <button className="register-btn">
          Register
        </button>
      </nav>
    
      <div>
        <section className='hero'>
          <div className='hero-content'>
            <h1>Digital Library Platform</h1>
            <p>Discover thousands of books, manage borrowing, and experience a smart digital library.</p>
            <div className='hero-buttons'>
              <button className='browse-btn'>Browse books</button>
              <button className='student-btn'>Student Login</button>
            </div>
          </div>
        </section>
      </div>
      <Stat/>
      <Feature/>
      <Category/>
      <Book/>
    </div>
  )
}

export default Home
