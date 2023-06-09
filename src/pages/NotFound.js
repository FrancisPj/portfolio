import React from 'react';
import imgFountain from '../media/fountain404.jpg';
import './../styles/_error.scss'

const NotFound = () => {
    return (
        <div>
            <div className="sectionTitle">
                <h1>Oups !</h1>
            </div>
            <div className="descript-Error">
                <p>Il semble que cette page ne corresponde pas à votre recherche !</p><br/>
                <p>N'ayez pas de crainte, il vous suffit de regarder à coté !</p><br/>
                <p>Vous retrouverez la bonne page ! </p>
            </div>
            <div className="erreur404">
                <img src={imgFountain} alt="fontaine"/>
            </div>
        </div>
    );
};

export default NotFound;


