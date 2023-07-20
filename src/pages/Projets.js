import React from 'react';

import Card from './../components/cardProjets'
import Perso from "./../components/cardPerso";


function Projets() {
    return (

        <div >
            <div className="sectionTitle">
                <h1>Mes Projets</h1>
            </div>
            <p>Projets réalisés lors de ma formation.</p>
            <Card/>
            <p>Projets personnels !</p>
            <Perso/>
        </div>


    )
}

export default Projets;
