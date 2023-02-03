import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./styles/main.css"


import Navbar from "./components/nav/Navbar"

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact"
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        
    
    </div>
  );
}


export default App;
