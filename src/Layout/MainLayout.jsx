import React from 'react';
import Home from '../Pages/Home/Home/Home';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {

    const location = useLocation();
    const noHeadFoot = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div>
            {noHeadFoot || <Header></Header>}
            <Outlet></Outlet>
            {noHeadFoot || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;