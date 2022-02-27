import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='bg-div-white rounded-lg border shadow-lg py-2 mx-10 md:px-56 errorCard'>
                <div className="text-center">
                <h1 className=' text-8xl'>404</h1>
                <p>
                    Houston, on a un problème.
                    <br />
                    La page que vous avez demandée semble ne pas exister.
                </p>
                </div>
                <button>Retour à l'accueil</button>
            </div>
        </div>
    );
};

export default NotFound;