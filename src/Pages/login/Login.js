import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {

    const { sign_in, set_loading, provider_login, theme } = React.useContext(AuthContext);
    const [error, set_error] = React.useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const google_provider = new GoogleAuthProvider();

    const handle_google_login = () => {

        provider_login(google_provider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    const handle_submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        sign_in(email, password)
            .then(result => {
                form.reset();
                const user = result.user;
                console.log(user);
                set_error('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                } else {
                    toast.error('Please varify your email');
                }
            })
            .catch(error => {
                console.error(error);
                set_error(error.message);
            })
            .finally(() => set_loading(false));
    }

    return (
        <div className={`pt-4 pb-4 ${!theme ? 'bg-dark' : undefined}`}>
            <div className={`form ${!theme ? 'bg-dark text-light' : undefined}`}>
                <Form onSubmit={handle_submit}>
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
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='text-danger text-center'>{error}</p>
                    <p className='text-center mt-4'>
                        New to Skill-Cept ? <Link to='/register'>SignUp</Link>
                    </p>
                    <div className='or_area'>
                        <span></span>
                        <span className='def'>or</span>
                        <span></span>
                    </div>
                    <Button onClick={handle_google_login} variant="outline-secondary" className='google_btn mb-3'> <img className='google_img' src="/Google.png" alt="" /> Continue with Google</Button>
                    <Button variant="outline-secondary" className='google_btn'> <img className='google_img' src="/github.png" alt="" /> Continue with Google</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;