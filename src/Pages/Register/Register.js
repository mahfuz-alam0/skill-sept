import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, set_error] = React.useState('');
    const [chacked, set_chacked] = React.useState(false);
    const { create_user, update_user_profile, varify_email, provider_login, theme } = React.useContext(AuthContext);

    const navigate = useNavigate();

    const handle_submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        create_user(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                set_error('');
                handle_update_profile(name, photoURL);
                handle_varify_email();
                toast.success('Please check your email for varification');
            })
            .catch(error => {
                console.error(error);
                set_error(error.message);
            });
    }
    const google_provider = new GoogleAuthProvider();
    const Facebook_provider = new FacebookAuthProvider();


    const handle_google_login = () => {
        provider_login(google_provider)
            .then(result => {
                const user = result.user;
                navigate('/home');
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    const handle_fb_login = () => {
        provider_login(Facebook_provider)
            .then(result => {
                const user = result.user;
                navigate('/home');
                console.log(user)
            })
            .catch(error => console.error(error));
    }


    const handle_update_profile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        update_user_profile(profile)
    }

    const handle_varify_email = () => {
        varify_email()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handle_check = (event) => {
        set_chacked(event.target.checked)
    }

    return (
        <div className={`pt-4 pb-4 ${!theme ? 'bg-dark' : undefined}`}>
            <div className={`form ${!theme ? 'bg-dark text-light' : undefined}`}>
                <Form onSubmit={handle_submit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicURL">
                        <Form.Label>PhotoURL</Form.Label>
                        <Form.Control name='photoURL' type="text" placeholder="Enter PhotoURL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handle_check} type="checkbox" label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='w-100' disabled={!chacked}>
                        SignUp
                    </Button>
                    <p className='text-center mt-4'>
                        Already Have Account ! <Link to='/login'>LogIn</Link>
                    </p>
                    <div className='or_area'>
                        <span></span>
                        <span className='def'>or</span>
                        <span></span>
                    </div>
                    <Button onClick={handle_google_login} variant="outline-secondary" className='google_btn mb-3'> <img className='google_img' src="/Google.png" alt="" /> Continue with Google</Button>
                    <Button onClick={handle_fb_login} variant="outline-secondary" className='google_btn'> <img className='google_img' src="/Facebook.png" alt="" /> Continue with Facebook</Button>
                </Form>
            </div>
        </div >

    );
};

export default Register;