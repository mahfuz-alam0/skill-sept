import React from 'react';
import './Header.css';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Header = () => {

    const { user, log_out, theme, set_theme } = React.useContext(AuthContext);
    const[visivility, set_visivility] = React.useState(false);

    const handle_theme = () => {
        set_theme(!theme);
    }
    const handle_logout = () => {
        log_out()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const onMouseOver = () => {
        set_visivility(!visivility);
    }
    const mouseLeave = () => {
        set_visivility(!visivility);
    }
    

    return (
        <Navbar collapseOnSelect expand="lg" className='p-0 header border-bottom' bg={theme?"light":"dark"} variant={theme?"light":"dark"}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <Image src="/images/logo.png" alt="logo" width="140" height="50" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">

                        <Nav>
                            <NavLink className={`${({ isActive }) => isActive ? 'active' : undefined} nav-link navs_link`} to='/home'>Home</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className='nav-link navs_link' to='/course'>Course</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className='nav-link navs_link' to='/blog'>Blog</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className='nav-link navs_link' to='/faq'>FAQ</NavLink>
                        </Nav>
                        <Nav className='ms-2 toggle_theme'>
                            <FaSun onClick={handle_theme} className={!theme? 'text-light icon':'icon'} />
                        </Nav>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <NavLink className='nav-link navs_link' to='/orders'>Orders</NavLink>
                        <NavLink className='nav-link navs_link' to='/premium'>Go Premium</NavLink>
                        {user?.uid ?
                            <>
                                <span className={`profile_name ${visivility?'profile_name_active':undefined} ${!theme ? 'text-light':undefined}`}>{user?.displayName}</span>
                                <Link to="/profile">
                                    {user?.photoURL ? <Image onMouseLeave={mouseLeave} onMouseOverCapture={onMouseOver} className=' ms-2' src={user.photoURL} roundedCircle width='30px' /> : <FaUserAlt />}
                                </Link>
                                <Button onClick={handle_logout} className='ms-3' variant={!theme ?"outline-light":"outline-dark"}>LogOut</Button>

                            </> :
                            <>
                                <NavLink className='nav-link navs_link' to='/login'>Login</NavLink>
                                <NavLink className='nav-link navs_link' to='/register'>Resister</NavLink>
                            </>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;