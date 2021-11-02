import React from 'react';
import './Navigation.css';
import logo from './logo.jpg';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <div className="navigation">
            <ul>
                <img className="img1" src={logo} alt="Logo" />
                <Link to="/Connexion" >
                    <li>Connexion</li>
                </Link>
                <Link to="/Blog" >
                    <li>Blog</li>
                </Link>
                <Link to="/Contact" >
                    <li>Contact</li>
                </Link>
                <Link to="/Home" >
                    <li>Accueil</li>
                </Link>
            </ul>
        </div>  
    )
     
}
export default Navbar;
