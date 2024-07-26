import React from 'react';
import TechnoInfo from '../components/datas/technoData.js';
import mysql from '../assets/images/logos/mysql.png';
import ad from '../assets/images/logos/activeDirectory.png';
import osData from '../components/datas/osData.js';

const Tssr = () => {
    return (
        <div className='flex mx-36 mt-20 mb-20'>
            <div className='flex flex-wrap'>
                <div className='bg-div-white rounded-lg border shadow-lg p-3 w-full'>
                    <h1 className='text-center text-div-red font-roboto font-semibold'>Technicien Systèmes et Réseaux</h1>
                </div>

                {/* À propos de moi */}
                <div className="bg-div-white rounded-lg border-shadow-lg p-3 mt-4 w-full">
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>À propos de moi</h2>
                    <div className="border-t-2 my-4 border-div-green"></div>
                    <div className="m-1">
                        <p className="font-roboto text-red-600 indent-5 lg:indent-0 text-lg">
                            Titulaire d'un titre professionnelle de Technicien Supérieur Systèmes et Réseaux dont j'ai acquis des compétences dans le déploiement de Windows, la gestion de serveurs de fichiers et l'utilisation de logiciels de virtualisation. Fort d'un mois d'expérience en tant que technicien support informatique, je suis prêt à mettre en pratique mes connaissances et compétences au sein de l'entreprise.
                        </p>
                    </div>
                </div>
                <div className="bg-div-white rounded-lg border-shadow-lg p-2 mt-4 w-full">
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>Systèmes d'exploitation</h2>
                    <div className="border-t-2 my-4 border-div-green"></div>
                    <div className="flex justify-around">
                        {osData.map(elt => (
                            <div key={elt.id} className="w-20 md:w-16 text-center mx-3 xl:mx-0">
                            <img src={elt.logo} alt={elt.name} />
                            <span className='font-roboto text-div-red'>{elt.name}</span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Systèmes exploitation & outils */}
                <div className="flex mx-auto justify-center">
                    <div className="w-full md:w-9/12 px-2">
                        <div className="bg-div-white rounded-lg border shadow-lg p-2 mt-4">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Technologies informatiques</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className="flex flex-wrap justify-center">
                                {TechnoInfo.map(item => (
                                    <div className="border rounded-lg bg-yellow-600 p-2 text-white text-center w-20 m-1" key={item.id}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                        <div className="bg-div-white rounded-lg border shadow-lg p-2 mt-4">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Bases de données</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className="flex justify-around">
                                <div className='text-center w-20 my-1 mx-2'>
                                    <img src={mysql} alt="Logo de mysql" />  
                                </div>
                                <div className='text-center w-24 mx-2'>
                                    <img src={ad} alt="Logo d'activeDirectory" className='bg-white' />  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tssr;