import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './sites/home/home.js';
import AboutUs from './sites/about/aboutUs.js';
import Contact from './sites/contact/contact.js';
import Gallery from './sites/gallery/gallery';

function App() {
  return (
    //<Home/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
