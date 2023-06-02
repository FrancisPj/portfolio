import {Outlet} from 'react-router';
import Navigation from "../components/Navigation";

const LayoutBlank = () => {

    return (
        <>
            <Navigation/>
            <main>
                <Outlet/>
            </main>

        </>
    )
}

export default LayoutBlank;
