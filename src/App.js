import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLogin from "./Components/StudentLogin";
import StudentRegister from "./Components/StudentRegister";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import StudentDashboard from "./Pages/StudentDashboard";
import AddBook from "./Pages/AddBook";
import ViewBooks from "./Pages/ViewBooks";
import Students from "./Pages/Students";
import IssueBooks from "./Pages/IssueBooks";
import ReturnBook from "./Pages/ReturnBook";
import BrowseBooks from "./Pages/BrowsBooks";
import MyIssuedBooks from "./Pages/MyIssuedBooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/studentregister" element={<StudentRegister/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        <Route path="/viewbooks" element={<ViewBooks/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/issuebook" element={<IssueBooks/>}/>
        <Route path="/returnbook" element={<ReturnBook/>}/>
        <Route path="/studentdashboard" element={<StudentDashboard/>}/>
        <Route path="/browsebooks" element={<BrowseBooks/>}/>
        <Route path="/myissuedbooks" element={<MyIssuedBooks/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
