import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChartComponent from '../pages/Chart';
import TableComponent from '../pages/TableComponent';
import UpdateComponent from '../pages/UpdateComponent';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import { PrivateRoute } from './PrivateRoute';

const AllRoutes = () => {
  return (
   
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/chart" element={<PrivateRoute><ChartComponent /></PrivateRoute>} />
        <Route path="/table" element={<PrivateRoute><TableComponent /></PrivateRoute>} />
        <Route path='/update' element={<PrivateRoute><UpdateComponent/></PrivateRoute>}/>
      </Routes>
    
  );
};

export default AllRoutes;
