import React from 'react';
import './../styles/_card.scss';
import data from './../data/listPerso_data.json';
import {Link} from 'react-router-dom';

import memoryCsn from './../media/perso_memory-csn.png';

import htmlLogo from './../media/technos/html.png';
import cssLogo from './../media/technos/css.png';
import sassLogo from './../media/technos/sass.png';
import jsLogo from './../media/technos/js.png';
import nodejsLogo from './../media/technos/nodejs.png';
import mongodbLogo from './../media/technos/mongodb.png';
import mysqlLogo from './../media/technos/mysql.png';
import reactjsLogo from './../media/technos/react.png';


const logos = {
    html: htmlLogo,
    css: cssLogo,
    js: jsLogo,
    reactjs: reactjsLogo,
    nodejs: nodejsLogo,
    mongodb: mongodbLogo,
    mysql: mysqlLogo,
    sass: sassLogo
}
const imgPerso = {
    memory: memoryCsn
}


function Perso() {
    return (
        <section className='cart'>
            <div className='cart-container'>
                {data.map((perso) => (
                    <div className={'cartGrid'} key={perso.id} to={perso.link}  target="_blank" rel="noopener noreferrer">
                        <p className={'cart_text'} >{perso.name}</p>
                        <Link  key={perso.id} to={perso.link}  target="_blank" rel="noopener noreferrer" className="blocImg-projet responsive-div">
                            <div className={'img-projet'}>
                                <img key={perso.cover} src={imgPerso[perso.cover]} alt={perso.cover} />
                            </div>
                        </Link>
                        <>
                            <div className="descript-projet">
                                <p>{perso.description}<br/> {perso.development} </p>

                                {perso.deployment && (
                                    <div className="url">
                                        <a href={perso.deployment} target="_blank" rel="noopener noreferrer">/"lien du site"/</a>
                                    </div>
                                )}
                            </div>
                            <div className={'bloc-projet'}>
                                <div className='project-technologies'>
                                    {perso.techno.map((techno) => (
                                        <img className={'logo-img'} key={techno} src={logos[techno]} alt={techno} />
                                    ))}
                                </div>
                            </div>
                        </>
                    </div>
                ))}
            </div>
        </section>

    );
}
export default Perso;
