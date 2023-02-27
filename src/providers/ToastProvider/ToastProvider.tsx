import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
    return (

        <ToastContainer 
        autoClose={3000} 
        position="top-right"
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="light"
        limit={3}
        />

    );
};

export default ToastProvider;