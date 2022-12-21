import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import { FaPhoneAlt } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import Category from './Category/Category';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Home = () => {
    
    const { theme } = React.useContext(AuthContext);
    const categories = useLoaderData();

    return (
        <div className={!theme ? 'bg-dark white pb-5': 'pb-5'}>
            <Container>
                <h3 className='text-center h1 pt-4'>We are committed to teach you</h3>
                <div className='text-center mt-4 call_info'>
                    <p className='mb-0'> Call for any information regarding the course</p>
                    <p className='phone_icon mb-0 ms-3'><FaPhoneAlt /> 160026</p>
                </div>
                <h3 className='mt-4 text-center'>Categories</h3>
                <div className='cards_container mt-4'>
                    {
                        categories.map((category, index) => <Category category={category} key={index}></Category>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;