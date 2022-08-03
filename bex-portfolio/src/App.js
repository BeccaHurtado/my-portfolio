import React from 'react'
import { Routes, Route } from "react-router"
import Home from './pages/Home/home'
import Portfolio from './pages/Portfolio/portfolio'
// import Art from './pages/Art/art'
import Resume from './pages/Resume/resume'
import Contact from './pages/Contact/contact'
import Navbar from './pages/Navigation/Navbar'
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar /> */}
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    </div>
  );
}
      // <Routes>
      //   <Route path='/home' element={<Home />} />
      //   <Route path='/portfolio' element={<Portfolio />} />
      //   {/* <Route path='/art' element={<Art />} /> */}
      //   <Route path='/resume' element={<Resume />} />
      //   <Route path='/contact' element={<Contact />} />
      // </Routes>

export default App;
