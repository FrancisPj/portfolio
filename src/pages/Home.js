import React from 'react';
import cv from "./../media/cv.pdf";

const Home = () => {
    return (
        <section className="home" >
            <div className="sectionTitle">
                <h2>Qui suis-je?</h2>
            </div>
            <div className="presentationContainer">
                 <div className="presentation">
                    <div className="presentationP">
                        <p>
                            Hello! Vous êtes au bon endroit pour en savoir plus sur moi ! <br />
                            Pour connaître mon parcours, mes
                            projets et mes hard skills ! <br />
                            Je me nomme Francis, je vis en Bourgogne. <br /> En 2018, j'ai fait une reconversion. J'ai décidé d'exercer un métier
                            passionnant, porteur et innovant : celui de développeur web !
                            <br /> Après un bootcamp chez WebForce3, pour
                            confirmer mon projet professionnel, j'ai effectué la formation de
                            développeur web chez OpenClassrooms.<br /><br />
                             Je suis attiré par les nouvelles technologies,
                            les jeux de société.<br /><br />
                            Je suis de nature curieux, j’aime apprendre et voir des projets
                            arriver à terme. <br /> <br />Bonne visite!
                        </p>
                    </div>
                    <div className="downloadCVButton">
                        <a href={cv} download className="downloadCVLink" target="_blank" rel="noopener noreferrer">
                            Téléchargez mon CV!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
