import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaCode, FaDatabase, FaRegFileCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Right.css';

const RightSideNav = () => {
    const { theme } = React.useContext(AuthContext);

    
    return (
        <div className='right sticky'>
            <div className={!theme? 'bg-dark text-light':undefined}>
                <h5>Categories</h5>
                <ListGroup>
                    <Link className='right_link' to='/course/bycategory/c1'>
                        <ListGroup.Item className='mb-2 btn btn-outline-secondary'>
                            Front-End Development
                        </ListGroup.Item>
                    </Link>
                    <Link className='right_link' to='/course/bycategory/c2'>
                        <ListGroup.Item className='mb-2 btn btn-outline-secondary'>
                            Back_End Development
                        </ListGroup.Item>
                    </Link>
                    <Link className='right_link' to='/course/bycategory/c3'>
                        <ListGroup.Item className='mb-2 btn btn-outline-secondary'>
                            MERN-Stack Development
                        </ListGroup.Item>
                    </Link>
                    <Link className='right_link' to='/course/bycategory/c4'>
                        <ListGroup.Item className='mb-2 btn btn-outline-secondary'>
                            Full-Stack Development
                        </ListGroup.Item>
                    </Link>
                    <Link className='right_link' to='/course/bycategory/c5'>
                        <ListGroup.Item className='mb-2 btn btn-outline-secondary'>
                            Skill Development
                        </ListGroup.Item>
                    </Link>
                    <Link className='right_link' to='/course/bycategory/c6'>
                        <ListGroup.Item className='mb-2 btn btn-outline-secondary'>
                            Learning Language
                        </ListGroup.Item>
                    </Link>
                    <Link className='right_link' to='/course/bycategory/c7'>
                        <ListGroup.Item className='mb-2 btn btn-outline-secondary'>
                            HSC Preparation
                        </ListGroup.Item>
                    </Link>
                    <Link className='right_link' to='/course/bycategory/c8'>
                        <ListGroup.Item className='mb-2 btn btn-outline-secondary'>
                            SSC Preparation
                        </ListGroup.Item>
                    </Link>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSideNav;