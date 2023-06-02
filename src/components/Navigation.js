import React from 'react';
import imageProfil from "../media/fjmin.JPG"
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <nav className={"sidebar"}>
        <div className="id">
            <div className="idContent">
                <img src={imageProfil} alt="profil francis"/>
                <div className={"name"}><h3>JUBILO Francis</h3>
                <h4>Développeur Web</h4></div>
            </div>

        </div>
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="navActive">
                        <i className="fas fa-home"/>
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projets" activeClassName="navActive">
                        <i className="fas fa-mountain"/>
                        <span>Projets</span>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-book"/>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="socialNetwork">
            
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/francis-jubilo" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"/></a>
                </li>
                <li>
                    <a href="https://github.com/FrancisPj" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"/></a>
                </li>
            </ul>
        </div>
      </nav>
    );
};

export default Navigation;
