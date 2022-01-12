import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Routes from "../../Routes/Routes";
import "./header.scss";

export default function Header() {
    return (
        <>
            <div className="banner">
                <div className="overlay"></div>
                <div className="headerContent container">
                        <h2 className='h1'>Welcome to our site</h2>
                        <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        <Router>
                            <Link to="/about"><button className='btn btnLarge btnText aboutBtn'> About Us</button></Link>
                            <Link to="/contact"><button className='btn btnLarge btnText contactBtn'>Contact us</button></Link>
                        </Router>
                        <div className="gotoNext">
                            <p>bottom</p>
                        </div>
                </div>
            </div>
            <div className="navigation">
                <Routes />
            </div>
        </>
    )
}
