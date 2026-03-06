import '../Styles/Home.css'
function Category()
{
    return(
        <div>
          <section className='categories'>
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
        </div>
    )
}
export default Category;