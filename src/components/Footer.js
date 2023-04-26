import React from 'react';
// import { useLocation } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    // const location = useLocation();
    // console.log('location', location.pathname);

    return (
        <div className={`mt-6 p-4 bottom-0 left-0 navBar`}>
            <div className="text-center text-div-red font-police font-semibold">© {year} - Rémi W.</div>
        </div>
    );
};

export default Footer;