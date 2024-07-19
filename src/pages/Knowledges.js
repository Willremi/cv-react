import React from 'react';
import { Link } from 'react-router-dom';

const Knowledges = () => {
    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            <div>
                <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-3'>
                    <h1 className="text-2xl font-bold">Compétences</h1>
                    <p className="mt-4">Veuillez sélectionner une sous-catégorie pour voir les compétences spécifiques :</p>
                    <div className="mt-4 text-center">
                        <Link to="/competences/dwwm" className="text-blue-500 underline mx-2">DWWM</Link>
                        <Link to="/competences/tssr" className="text-blue-500 underline mx-2">TSSR</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Knowledges;