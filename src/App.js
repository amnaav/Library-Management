import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLogin from "./Components/StudentLogin";
import StudentRegister from "./Components/StudentRegister";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/studentregister" element={<StudentRegister/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
