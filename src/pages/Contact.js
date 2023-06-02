import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import './../styles/_contact.scss'

const Contact = () => {
    return (
        <div className="contactSection">
            <div className="contactTitle">
                <h2>Contact</h2>
            </div>
            <div className="contactContainer">
                <p>Vous avez la possibilité de me suivre et de me contacter via :</p>
                <div className="contactSection">
                            <a href="https://www.linkedin.com/in/francis-jubilo" target="_blank" rel="noopener noreferrer">
                                <p>C'est mon espace Linkedin !</p>
                                <div className="contactIcons">
                                    <FontAwesomeIcon icon={faLinkedin} className="icons" aria-label="lien linkedin"/>
                                </div>

                            </a>
                            <a href="https://github.com/FrancisPj" target="_blank" rel="noopener noreferrer">
                                <p>Mon Github pour visualiser mes projets ! </p>
                                <div className="contactIcons" aria-label="lien github">
                                    <FontAwesomeIcon icon={faGithub} className="icons" />
                                </div>
                            </a>
                            <a href="mailto:francis.jub@free.fr" target="_blank"  rel="noopener noreferrer">
                                <p>Le lien pour me joindre par mail!</p>
                                <div className="contactIcons">
                                <FontAwesomeIcon icon={faEnvelope} className="icons" aria-label="M'envoyer un mail"/>
                                </div>
                            </a>
                </div>
            </div>
        </div>

    );
};

export default Contact;
