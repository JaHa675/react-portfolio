import React from 'react';
import { Link } from "react-router-dom"
import '../styles/Navigation.css'

function Navigation() {
    return (
        <ul className="nav col-9 nav-tabs">
            <li className="nav-item">
                <Link to="/">About Me</Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}

export default Navigation;