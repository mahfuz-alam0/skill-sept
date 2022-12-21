/* eslint-disable no-loop-func */
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { get_stored_data } from '../../Utilitis/fakeDB';

const Chackout = () => {
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
        <div className={!theme ?'bg-dark text-light':undefined}>
            <Container>
                <div className='cart_container'>
                    <h4 className='mt-4'>Order Summary</h4>
                    <div className="">
                        <p>Item selected: {items}</p>
                        <p>Total Price:$ {price.toFixed(2)}</p>
                        <p>Duration: {duration} Days</p>
                        <Button variant='outline-success'>Checkout</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Chackout;