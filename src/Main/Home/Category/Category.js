import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './category.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Category = ({ category }) => {
    const { name, image, description, category_id } = category;
    const { theme } = React.useContext(AuthContext);
    
    return (
        <div >
            <Card className={!theme? 'rescard bg-dark':'rescard'} style={{ width: '100%', height: '400px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div>
                        <Card.Title>{name}</Card.Title>
                    </div>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Link to={`/course/bycategory/${category_id}`}>
                    <Button className='button_b' variant="primary">Viwe More <FaArrowRight /></Button>
                </Link>
            </Card>
        </div>
    );
};

export default Category;