import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes} from 'react-router';

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projets from "../pages/Projets";
import NotFound from "../pages/NotFound";
import LayoutDefault from "../layouts/LayoutDefault";
import LayoutBlank from "../layouts/LayoutBlank";



const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<LayoutDefault/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projets" element={<Projets />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                    <Route element={<LayoutBlank/>}>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    );
};

export default Router;
