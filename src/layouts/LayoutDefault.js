/* j'importe le composant 'Outlet' de la bibliothèque 'React Router DOM'. 'Outlet' est utilisé pour rendre les enfants de l'itinéraire actuel.*/
import {Outlet} from 'react-router';

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const LayoutDefault = () => {

    return (
        <>
            <main className={'mainAboutContainer'}>
                <Navigation/>
                <div className={'home'}>
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default LayoutDefault;


