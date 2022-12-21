import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ReviewItem = ({ items }) => {
    const { theme } = React.useContext(AuthContext);
    return (
        <div>
            <Card className={!theme ? 'bg-dark text-light':undefined} style={{ width: '100%' }}>
                <Card.Img variant="top" src={items.image} />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>
                        {items.discription}
                    </Card.Text>
                    <Card.Text>
                        Duration: {items.Duration} Days
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Card.Text>
                            Price: ${items.price}
                        </Card.Text>
                        <Card.Text>
                            Ratting: <FaStar className='text-warning' />{items.ratting}
                        </Card.Text>
                    </div>
                    <Button  className='w-100' variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewItem;