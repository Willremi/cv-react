import React from 'react';
import { Link } from 'react-router-dom';
import { Divider , Autocomplete} from '@mui/material';
import DwwmInfo from '../components/datas/dwwmData';

const Knowledges = () => {
    return (
        <div className='flex mt-20 mb-20 md:mx-36 justify-center'>
            <div className='flex flex-wrap w-9/12 mx-10 md:mx-0 md:w-full'>
                <div className='bg-div-white rounded-lg border shadow-lg p-3 w-full'>
                    <h1 className="text-center text-div-red font-roboto font-semibold">Compétences</h1>
                </div>
                <div className="flex justify-center mx-auto">
                <div className='bg-div-white rounded-lg border-shadow-lg p-3 mt-4 w-1/2 mx-2'>
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>Développeur Web et Web Mobile</h2>
                    <div className="border-t-2 my-4 border-div-red"></div>
                    <ul className='list-disc ml-6 text-lg text-div-green font-semibold'>
                        <li>Analyser les besoins du client</li>
                        <li>Concevoir une maquette de présentation</li>
                        <li>Réaliser un prototype de la solution technique pour validation par le donneur d’ordres</li>
                        <li>Analyser des problèmes techniques</li>
                        <li>Planifier les étapes d’un projet</li>
                        <li>Présenter un produit fini</li>
                    </ul>
                    <h3 className='text-div-blue font-roboto font-semibold mt-1'>Langages :</h3>
                    {/* mettre langage de dwwmData*/}
                    <div>
                        {DwwmInfo.slice(0, 10).map((elt, index) => (
                            <span>{elt.name}{index < 9 && ' / '}</span>
                        ))}
                    </div>
                </div>
                <div className='bg-div-white rounded-lg border-shadow-lg p-3 mt-4 w-1/2 mx-2'>
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>Technicien Supérieur Systèmes et Réseaux</h2>
                </div>
                </div>
            </div>
            {/* <div className="bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-3">
                    <p className="mt-4">Veuillez sélectionner une sous-catégorie pour voir les compétences spécifiques :</p>
                    <div className="mt-4 text-center">
                        <Link to="/competences/dwwm" className="text-blue-500 underline mx-2">DWWM</Link>
                        <Link to="/competences/tssr" className="text-blue-500 underline mx-2">TSSR</Link>
                    </div>
                </div> */}
        </div>
    );
};

export default Knowledges;