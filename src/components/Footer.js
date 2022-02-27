import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <div className='mt-4 p-4 bg-nav-greenOp fixed bottom-0 left-0 w-full'>
            <div className="text-center text-div-red font-police font-semibold">© {year} - Rémi W.</div>
        </div>
    );
};

export default Footer;