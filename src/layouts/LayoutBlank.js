import {Outlet} from 'react-router';
import Navigation from "../components/Navigation";

const LayoutBlank = () => {

    return (
        <>
            <main className={'mainAboutContainer'}>
                <Navigation/>
                <div className={'home'}>
                <Outlet/>
                </div>
            </main>

        </>
    )
}

export default LayoutBlank;
