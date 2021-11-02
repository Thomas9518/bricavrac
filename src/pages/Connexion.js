import React from 'react';
import '../styles/Connexion.css';
import Navigation from "../components/Navbar";



function Connexion() {
  return (
    <div>
        <Navigation />
        <form>
        <div> 
            <h3>Connexion </h3>
            <div>
                <label>Adresse email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div>
                <label>Mot de passe</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>

        </div>
        
    </form>
    </div>
    
  );
}

export default Connexion;