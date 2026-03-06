import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLogin from "./Components/StudentLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
