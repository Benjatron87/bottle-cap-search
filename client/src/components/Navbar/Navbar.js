import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
      <div className="container-fluid navbar sticky-top">
            
            <div className="nav-item">
                    <Link to="/" className="nav-link home">Bottle Cap Search</Link>
            </div>

            <div className="d-flex justify-content-center">

                <div className="nav-item">
                        <Link to="/images" className="nav-link images">All Images</Link>
                </div>
            </div>
      </div>
  );
};

export default Navbar;