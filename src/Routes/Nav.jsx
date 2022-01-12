import React from 'react';
import {Link} from "react-router-dom";
import IMAGES from '../Gallery/IMAGES';

export default function Nav() {
    return (
        <>
          <div className="nav">
              <div className="logo">
                 <Link to="/"><img src={ IMAGES.brandLogo } alt="Brand Logo" /></Link>
              </div>
              <div className="navbar">
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link>
                        <ul>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/team">Team</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/contact">Contact</Link></li>
                  </ul>
              </div>
          </div>  
        </>
    )
}
