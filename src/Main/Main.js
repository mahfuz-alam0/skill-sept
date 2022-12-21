import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

import Header from '../Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <Toaster/>
        </div>
    );
};

export default Main;