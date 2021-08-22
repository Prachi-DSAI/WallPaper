import React from "react";
import {Link} from 'react-router-dom';

export function Navbar() {
 
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
     
        <Link to="/">
        <div className="logo-section">
      <div class="navbar-brand">
        <h1 class="logo">wallscraft</h1>
      </div>
      </div>
        </Link>
      
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="input-group ml-3">
            <input type="text" class="form-control" />
            <div class="input-group-append ">
              <button class="btn btn-primary" >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div> 
        <div class="navbar-nav ml-5 mr-5"> 
        <Link to="/">
          <a href="#" class="nav-item nav-link">
            Home
          </a>
        </Link>
          <div class="btn-group">
        <button type="button" class="btn  dropdown-toggle nav-item nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Categories
         </button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="#Nature">Nature</a>
        <a className="dropdown-item" href="#Pets">Pets</a>
        <a className="dropdown-item" href="#Cars">Cars</a>
        <a className="dropdown-item" href="#Toursit">Tourist Places</a>
        </div>
        </div>
        </div>
        <div class="join-btn navbar-nav bg-primary justify-content-center align-items-center">
          <Link to="/Login">
          <a href="#" class="nav-item nav-link text-light">
           Login
          </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
