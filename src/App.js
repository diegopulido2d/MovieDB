import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import './App.css';
import NavBar from './components/NavBar';
import Title from "./pages/Title";
import Search from "./pages/Search";


function App() {
  return (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search/:title" element={<Search />}/>
            <Route path="/title/:id" element={<Title />}/>
          </Routes>
        </Router>
  );
}

export default App;
