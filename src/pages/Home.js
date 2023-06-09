import React from 'react';
import cv from "./../media/cv.pdf";

const Home = () => {
    return (
        <section className="home" >
            <div className="sectionTitle">
                <h1>Qui suis-je?</h1>
            </div>
            <div className="presentationContainer">

                    <div className="presentationP">
                        <p>
                            Hello! Vous êtes au bon endroit pour en savoir plus sur moi ! <br />
                            Pour connaître mon parcours, mes
                            projets ! <br />
                            Je me nomme Francis, je vis en Bourgogne. <br /> En 2018, j'ai décidé d’entreprendre une reconversion professionnelle dans un domaine alliant créativité et informatique: le Développement Web !
                            <br /> J'ai débuté en 2021 avec un bootcamp chez WebForce3 et j'ai validé la partie de développeur Front-end. J’ai donc complété mon parcours par une formation diplômante, afin de confirmer mon projet professionnel, avec le centre de formation <strong> OpenClassrooms.</strong><br /><br />
                             Je suis attiré par les nouvelles technologies,
                            les jeux de société.<br /><br />
                            Je suis de nature curieux, j’aime apprendre et voir des projets
                            arriver à terme. <br /> <br />Bonne visite!
                        </p>
                    </div>


                <div className="downloadCVButton">
                    <a href={cv} download className="downloadCVLink" target="_blank" rel="noopener noreferrer">Téléchargez mon CV !<br/><br/>
                        <p>le document est un PDF</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
