import '../Styles/Home.css'
function Feature()
{
    return(
        <div>
          <section className='features'>
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
        </div>
    )
}
export default Feature;