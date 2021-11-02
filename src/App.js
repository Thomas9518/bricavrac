import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";



const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/Connexion" exact component={Connexion}/>
      <Route path="/Contact" exact component={Contact}/>
      <Route path="/Blog" exact component={Blog}/>
      <Route path="/Home" exact component={Home}/>


    </Router>
  );
};

export default App;
