import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './profile.css';

const Profile = () => {
    
    const { theme } = React.useContext(AuthContext);
    const { user } = React.useContext(AuthContext);
    const [name, set_name] = React.useState(user.displayName);
    const photoURLRef = React.useRef(user.photoURL);

    const handle_submit = (event) => {
        event.preventDefault();
        console.log(photoURLRef.current);
    }

    const handle_name_change = (event) => {
        set_name(event.target.value);
    }

    return (
        <div className={!theme ? 'bg-dark text-light':undefined}>
            <Container>
                <Form className='profile pt-4' onSubmit={handle_submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onChange={handle_name_change} defaultValue={name} type="text" placeholder="User Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Profile;