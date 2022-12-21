/* eslint-disable no-loop-func */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { get_stored_data } from '../../Utilitis/fakeDB';
import ReviewItem from './ReviweItem/ReviewItem';
import './Order.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Orders = () => {

    const { theme } = React.useContext(AuthContext);
    const course = useLoaderData();
    const stored_cart = get_stored_data();
    const initial_cart = [];

    let items = 0;
    let price = 0;
    let duration = 0;

    for (const id in stored_cart) {
        course.map(product => {
            if (product.id === id) {
                initial_cart.push(product)
                items += 1;
                const new_duretion = parseFloat(product.Duration)
                duration = duration + new_duretion;
                const new_price = parseFloat(product.price)
                price = price + new_price;
            }
        });
    }

    return (
        <div className={!theme ? 'bg-dark' : undefined}>
            <div className='order_container'>
                <Container>
                    <Row>
                        <Col lg='9' md="9" className='pt-4 pb-4'>
                            <div className='container_course'>
                                {
                                    initial_cart.map(items => <ReviewItem key={items.id} items={items} />)
                                }
                            </div>
                        </Col>
                        <Col lg='3' md="3">
                            <div className='cart_container bg-light'>
                                <h4 className='mt-4'>Order Summary</h4>
                                <div className="">
                                    <p>Item selected: {items}</p>
                                    <p>Total Price:$ {price.toFixed(2)}</p>
                                    <p>Duration: {duration} Days</p>
                                    <Link to='/checkout'><Button variant='outline-success'>Checkout</Button></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Orders;