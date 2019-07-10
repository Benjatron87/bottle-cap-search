import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
      <div className="container-fluid navbar sticky-top d-flex justify-content-center">
            
            <div className="nav-item">
                    <Link to="/" className="nav-link home">Bottle Caps</Link>
            </div>

            <div className="d-flex justify-content-center">

                <div className="nav-item">
                        <Link to="/images" className="nav-link images">All Caps</Link>
                </div>

                <div className="nav-item">
                        <Link to="/add" className="nav-link images">Add Cap</Link>
                </div>
            </div>
      </div>
  );
};

export default Navbar;