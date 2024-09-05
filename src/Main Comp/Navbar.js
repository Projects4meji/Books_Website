import React, {useState} from "react";
import { Link } from "react-router-dom";

const linkStyles ={
    fontSize: "3em",
    fontWeight: "bold"
}

function Navbar({onSubmit}){
  const [term, setTerm] = useState('');

    const handleChange = (e) => {
        setTerm(e.target.value)
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term)
    };
return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/?" style={linkStyles}>Cixx</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://localhost:3000/?" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Books">Books</Link></li>
                  <li><Link className="dropdown-item" to="/Side">ToDo</Link></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="http://localhost:3000/?">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form onSubmit={handleFormSubmit} className="d-flex" role="search">
              <input 
                className="form-control me-2"
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={term} 
                onChange={handleChange}>
                </input>
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
              <p style={{border:"1px solid orange",borderRadius:"50%",backgroundColor:"orange",color:"aliceblue",fontSize:"22px"}}>AM</p>
              <p>ABDUL MOEED</p>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;