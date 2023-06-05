import React from 'react';
import './../styles/_card.scss'
import data from './../data/listProjets_data.json'
import {Link} from 'react-router-dom'

import bookiImg from './../media/projetsImg/booki.png'
import kanapImg  from './../media/projetsImg/kanap.png'
import kasaImg  from './../media/projetsImg/kasa.png'
import LapanthereImg  from './../media/projetsImg/Lapanthere.png'
import ohmyfoodImg  from './../media/projetsImg/ohmyfood.png'
import piquanteImg from './../media/projetsImg/piquante.png'

import htmlLogo from './../media/technos/html.png'
import cssLogo from './../media/technos/css.png'
import sassLogo from './../media/technos/sass.png'
import jsLogo from './../media/technos/js.png'
import nodejsLogo from './../media/technos/nodejs.png'
import mongodbLogo from './../media/technos/mongodb.png'
import mysqlLogo from './../media/technos/mysql.png'
import reactjsLogo from './../media/technos/react.png'

const imgProjets = {
    booki: bookiImg,
    kanap: kanapImg,
    kasa: kasaImg,
    Lapanthere: LapanthereImg,
    ohmyfood: ohmyfoodImg,
    piquante: piquanteImg
}

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


function Card() {
    return (
        <section className='cart'>
            <div className='cart-container'>
                {data.map((projet) => (
                    <Link className={'cartGrid'} key={projet.id} to={projet.link}  target="_blank">
                        <p className={'cart_text'} >{projet.name}</p>
                          <div className="blocImg-projet">
                            <div className={'img-projet'}>
                                <img key={projet.cover} src={imgProjets[projet.cover]} alt={projet.cover} />
                            </div>
                          </div>
                       <div className="descript-projet">
                        <p>{projet.description}<br/> {projet.development}</p>
                       </div>
                      <div className={'bloc-projet'}>
                        <div className='project-technologies'>
                            {projet.techno.map((techno) => (
                                <img className={'logo-img'} key={techno} src={logos[techno]} alt={techno} />
                            ))}
                        </div>
                      </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
export default Card;

