
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../component/shared/Loader';
import { AuthContext } from '../provider/AuthProvider';

const PrivetRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return <Loader/>
   }
   if (user?.email) {
      return children;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;