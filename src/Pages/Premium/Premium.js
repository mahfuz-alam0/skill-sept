import React from 'react';
import { Button, Card, CarouselItem, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Premium = () => {
    const { theme } = React.useContext(AuthContext);
    return (
        <div className={!theme ? 'bg-dark text-light' : undefined}>
            <Container className='Pricing pt-5 pb-5 text-center'>
                <Card className={!theme? 'bg-dark':undefined}>
                    <Card.Header>
                        <Card.Title>Premium</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>$35/<small>month</small></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className={!theme?'bg-dark text-light':undefined}>All Courses</ListGroup.Item>
                        <ListGroup.Item className={!theme?'bg-dark text-light':undefined}>Watch Demo Videos</ListGroup.Item>
                        <ListGroup.Item className={!theme?'bg-dark text-light':undefined}>24/7 Support</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Text>
                            Also you can get 10% discount for 6 months and 20% discount for 1 year.
                        </Card.Text>
                        <Link to=''>
                            <Button variant="primary">Get Premium</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
};

export default Premium;