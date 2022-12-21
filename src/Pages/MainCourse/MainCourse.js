import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import RightSideNav from '../../Shared/Right/Right';
import './Maincourse.css'

const MainCourse = () => {
    
    const { theme } = React.useContext(AuthContext);

    return (
        <div className={!theme ? 'bg-dark':undefined}>
            <Container className='pt-4'>
                <Row>
                    <Col lg='9'>
                        <Outlet />
                    </Col>
                    <Col lg='3'>
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainCourse;