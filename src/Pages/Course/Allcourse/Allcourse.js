import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { addToDb } from '../../../Utilitis/fakeDB';
import './Allcourse.css';

const Allcourse = ({ course }) => {
    const { theme } = React.useContext(AuthContext);

    const { id, name, discription, price, ratting, image, Duration } = course;

    const add_to_db = (id) => {
        addToDb(id);
    }

    return (
        <div className='rescard'>
            <Card className={!theme? 'bg-dark text-light':undefined} style={{ width: '100%' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {discription}
                    </Card.Text>
                    <Card.Text>
                        Duration: {Duration} Days
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>
                        <Card.Text>
                            Ratting: <FaStar className='text-warning' />{ratting}
                        </Card.Text>
                    </div>
                    <Button onClick={() => add_to_db(id)} className='w-100' variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Allcourse;