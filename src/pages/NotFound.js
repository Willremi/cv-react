import React from 'react';
import {saveAs} from "file-saver";
import PDF from '../assets/documents/cvVers2022.pdf';

const NotFound = () => {
    const saveFile = () => {
        saveAs(
            PDF,
            "cv.pdf"
        )
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className='rounded-lg border shadow-lg py-4 px-4 md:px-56 errorCard'>
                <div className="text-center">
                <h1 className='text-6xl text-red-700'>Erreur 404</h1>
                <br />
                <hr className='w-48 mx-auto' />
                <br />
                <p className='text-white w-58 mx-auto'>
                    La page que vous avez demandée semble ne pas exister.
                </p>
                <button className='border-2 border-div-blue hover:border-div-green bg-div-blue mt-10 p-1 rounded text-white hover:text-div-red text-center'><a href="/">Retour à l'accueil</a></button>
                <button className='border-2 border-div-blue hover:border-div-green bg-div-blue mt-10 p-1 rounded text-white hover:text-div-red text-center ml-1' onClick={saveFile}>Télécharger le CV</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;