import React from 'react';
import Navigation from "../components/Navbar";
import logo from '../components/logo.jpg';
import '../styles/Home.css';



const Home = () => {
    return (
        <div>
            <Navigation />
            <img className="img2" src={logo} alt="Logo" />
            <h1>Bannissons les emballages !</h1>
            <p>
                <div>
                    Chaque année 400 millions de tonnes de plastique sont produites dans le monde dont 40% pour des emballages.
                </div>
                <br/>
                <div>
                    La vente en vrac est la solution pour éliminer les emballages superflus de notre quotidien !   
                </div>   
            </p>
        </div>
    )
}
export default Home;