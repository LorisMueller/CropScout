import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './sites/home.js';
import AboutUs from './sites/aboutUs.js';
import Contact from './sites/contact.js';

function App() {
  return (
    //<Home/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
