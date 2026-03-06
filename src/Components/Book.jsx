import '../Styles/Home.css'

const Book = () => {
  return (
    <div>
      <section className='books'>
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
    </div>
  )
}

export default Book
