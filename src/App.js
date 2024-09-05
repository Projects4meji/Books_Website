import React, {useState} from "react";
import "./styles.css";
import Navbar from "./Main Comp/Navbar";
import Home from "./Home";
import About from "./Main Comp/About";
import Books from "./Books";
import searchImage from "./api";
import ImageList from "./components/ImageList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Side from "./Todo Components/Side";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImage(term);
    setImages(result);
  };

  return (
    <div className="body">
    <Router>
      
      <ImageList images={images}/>
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Books" Component={Books} />
          <Route path="/Side" Component={Side} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
