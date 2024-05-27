import React from 'react'
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const { isLoggedIn } = useAuth();
    return (
      <>
        {isLoggedIn.isAuth  ? (
          children
        ) : isLoggedIn.isAuth ? (
          <Navigate to="/" />
        ) : (
          <Navigate to="/login" />
        )}
      </>
    );
  };
  
  export const PrivateRouterUser = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return (
      <>
        {isLoggedIn.isAuth ? (
          children
        ) : (
          <Navigate to="/login" />
        )}
      </>
    );
  };
