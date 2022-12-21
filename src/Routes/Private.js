import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Private = ({ children }) => {

    const { user, loading } = React.useContext(AuthContext);
    
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="success" />;
    }
    
    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    return children;
};

export default Private;