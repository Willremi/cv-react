import React from 'react';
import windows from '../assets/images/logos/windows.png';
import mac from '../assets/images/logos/macos.png';
import debian from '../assets/images/logos/debian.png';

const Tssr = () => {
    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            <div className='mx-5 w-full'>
                <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-3'>
                    <h1 className='text-center text-div-red font-roboto font-semibold'>Technicien Systemes et Réseaux</h1>
                </div>

                {/* À propos de moi */}
                <div className="bg-div-white rounded-lg border-shadow-lg mx-5 md:mx-36 p-2 mt-4">
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>À propos de moi</h2>
                    <div className="border-t-2 my-4 border-div-green"></div>
                    <div className="m-1">
                        <p className="font-roboto text-red-600 indent-5 text-lg">
                            Titulaire d'un titre professionnelle de Technicien Supérieur Systèmes et Réseaux dont j'ai acquis des compétences dans le déploiement de Windows, la gestion de serveurs de fichiers et l'utilisation de logiciels de virtualisation. Fort d'un mois d'expérience en tant que technicien support informatique, je suis prêt à mettre en pratique mes connaissances et compétences au sein de l'entreprise.
                        </p>
                    </div>
                </div>

                {/* Systèmes exploitation & outils */}
                <div className="md:flex md:mx-24 lg:mx-0">
                    <div>
                        <div className="border bg-div-white rounded-lg mt-4 md:ml-36 p-2">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Systèmes d'exploitation principaux</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className="flex justify-around">
                                <div className="w-20 md:w-14 xl:w-16 text-center mx-3 xl:mx-0">
                                    <img src={windows} alt="Logo de Windows" />
                                    <span className='font-roboto text-div-red'>Windows</span>
                                </div>
                                <div className="w-20 md:w-14 xl:w-16 text-center mx-3 xl:mx-0">
                                    <img src={mac} alt="Logo de MacOS" />
                                    <span className='font-roboto text-div-red'>Mac OS</span>
                                </div>
                                <div className="w-20 md:w-14 xl:w-16 text-center mx-3 xl:mx-0">
                                    <img src={debian} alt="Logo de Debian" />
                                    <span className='font-roboto text-div-red'>Debian</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* outils info */}
                    <div>
                        <div className="border bg-div-white rounded-lg mt-4 p-2 sm:ml-5 md:ml-12 xl:ml-16">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Autres systèmes d'exploitation</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <ul>
                                <li>Windows Server 2016 / 2022</li>
                                <li>pfSense</li>
                                <li>Autres distributions Linux</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tssr;