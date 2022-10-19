import React from 'react';
import './Main.css';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';
import LeftNav from '../pages/Shared/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='layo'>
                <LeftNav></LeftNav>
                <Outlet></Outlet>
            </div>
            <Footer>

            </Footer>
        </div>
    );
};

export default Main;