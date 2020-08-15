import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import './App.css';

function App() {
  return (
  <Router>
    <div className="body">
      <Navbar />
     
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      
      <Footer />
    </div>
  </Router>
  );
}

export default App;
