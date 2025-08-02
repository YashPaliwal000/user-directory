import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';




function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
       </div>
    </Router>
  );
}

export default App;
