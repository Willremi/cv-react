import React from 'react';
import windows from '../assets/images/logos/windows.png';
import ws from '../assets/images/logos/ws2.png';
import mac from '../assets/images/logos/macos.png';
import debian from '../assets/images/logos/debian.png';
import android from '../assets/images/logos/android.png';
import esxi from '../assets/images/logos/esxi.png';
import pfsense from '../assets/images/logos/pfsense.png';
import TechnoInfo from '../components/datas/technoData.js';
import mysql from '../assets/images/logos/mysql.png';
import ad from '../assets/images/logos/activeDirectory.png';

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
                            <img src={android} alt="Logo d'Android" />
                            <span className='font-roboto text-div-red'>Android</span>
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
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-2/3 px-2">
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
                            <div className="flex flex-wrap justify-around">
                                <div className='text-center w-20 my-1 mx-2'>
                                    <img src={mysql} alt="Logo de mysql" />  
                                </div>
                                <div className='text-center w-24 mx-2'>
                                    <img src={ad} alt="Logo d'activeDirectory" />  
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