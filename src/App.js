import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Stat from "./Components/Stat";
import Feature from "./Components/Feature";
import Cta from "./Components/Cta";
import Book from "./Components/Book";
import Category from "./Components/Category";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feature" element={<Feature/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/stat" element={<Stat/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
    <Cta/>
    </BrowserRouter>
  );
}

export default App;
