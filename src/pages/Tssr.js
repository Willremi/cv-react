import React from 'react';
import windows from '../assets/images/logos/windows.png';
import ws from '../assets/images/logos/ws2.png';
import mac from '../assets/images/logos/macos.png';
import debian from '../assets/images/logos/debian.png';
import esxi from '../assets/images/logos/esxi.png';
import pfsense from '../assets/images/logos/pfsense.png';

const Tssr = () => {
    return (
        <div className='flex mx-36 mt-20 mb-20'>
            <div className='flex flex-wrap'>
                <div className='bg-div-white rounded-lg border shadow-lg p-3 w-full'>
                    <h1 className='text-center text-div-red font-roboto font-semibold'>Technicien Systemes et Réseaux</h1>
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
                                <div className="w-20 md:w-14 xl:w-16 text-center mx-3 xl:mx-0">
                                    <img src={windows} alt="Logo de Windows" />
                                    <span className='font-roboto text-div-red'>Windows</span>
                                </div>
                                <div className="w-20 md:w-14 text-center mx-3 xl:mx-0">
                                    <img src={ws} alt="Logo de Windows Server" />
                                    <span className='font-roboto text-div-red'>Windows Server</span>
                                </div>
                                <div className="w-20 md:w-14 xl:w-16 text-center mx-3 xl:mx-0">
                                    <img src={mac} alt="Logo de MacOS" />
                                    <span className='font-roboto text-div-red'>Mac OS</span>
                                </div>
                                <div className="w-20 md:w-14 xl:w-16 text-center mx-3 xl:mx-0">
                                    <img src={debian} alt="Logo de Debian" />
                                    <span className='font-roboto text-div-red'>Debian</span>
                                </div>
                                <div className="w-20 md:w-14 xl:w-16 text-center mx-3 xl:mx-0">
                                    <img src={esxi} alt="Logo d'ESXi" />
                                    <span className='font-roboto text-div-red'>ESXi</span>
                                </div>
                                <div className="w-20 md:w-14 xl:w-16 text-center mx-3 xl:mx-0">
                                    <img src={pfsense} alt="Logo de pfSense" />
                                    <span className='font-roboto text-div-red'>pfSense</span>
                                </div>
                            </div>
                </div>

                {/* Systèmes exploitation & outils */}
                <div className="flex space-x-4 mt-4">
                    <div className="w-1/2 bg-gray-200 p-4"></div>
                    <div className="w-1/2 bg-gray-300 p-4"></div>
                </div>
                
            </div>
        </div>
    );
};

export default Tssr;