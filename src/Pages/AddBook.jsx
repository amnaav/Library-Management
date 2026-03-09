import "../Styles/AddBook.css";
const AddBook = () => {
  return (

        <div className="admin-container">
            <div className="sidebar">
                <h2 className="sidebar-logo">📚 LMS</h2>
                <ul className="sidebar-menu">
                    <li>📊Dashboard</li>
                    <li onClick={'/AddBook'}>📚Add Books</li>
                    <li>📖View Books</li>
                    <li>👥Students</li>
                    <li>📕Issue Books</li>
                    <li>↩Return Book</li>
                    <li>🚪Logout</li>
                </ul>
            </div>
            <div className="main-content">
                <h1>Add New Book</h1>
                <div className="form-container">
                    <form className="add-book-form">
                        <input type="text" placeholder="Book Title" required/>
                        <input type="text" placeholder="Author Name" required/>
                        <input type="text" placeholder="Category" required/>
                        <input type="text" placeholder="Quantity" required/>
                        <input type="text" placeholder="Book Image URL"/>
                        <button type="submit">Add Book</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddBook