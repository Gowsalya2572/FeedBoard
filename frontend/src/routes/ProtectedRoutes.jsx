import React from 'react'
import { getCurrentUser } from '../utils/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
const user = getCurrentUser();

  return user ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoutes
