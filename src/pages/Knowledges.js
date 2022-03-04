import React from 'react';
import SkillsInfo from '../components/datas/competencesData';
import windows from '../assets/images/logos/windows.png';
import mac from '../assets/images/logos/macos.png';
import debian from '../assets/images/logos/debian.png';
import Projets from '../components/datas/projetsData';

const Knowledges = () => {
    // Tri d'apparition des projets;
    Projets.sort(function(a, b){
        return b.id - a.id;
    });

    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            {/* page Compétences */}
            <div>
                <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-3'>
                    <h1 className='text-center mb-4 text-div-blue font-roboto font-semibold'>Technologies en développement</h1>
                    <div className='flex flex-wrap justify-center'>
                        {SkillsInfo.map(item =>
                            <div className='w-16 md:w-24 text-center' key={item.id}>
                                <a href={item.href} target='_blank' rel="noreferrer">
                                    <img src={item.image} alt={item.name} />
                                    <span className='hidden lg:block font-roboto text-div-red'>{item.name}</span>
                                </a>
                            </div>
                        )}

                    </div>
                </div>
                <div className="md:flex">
                    <div>
                        <div className="border bg-div-white rounded-lg mt-4 mx-5 md:ml-36 p-4 xl:w-full">
                            <h2 className='text-center mb-2 pb-2 text-div-blue font-roboto font-semibold'>Systèmes d'exploitation</h2>
                            <div className="flex flex-wrap justify-around md:justify-between">
                                <div className="w-16 md:w-18 text-center">
                                    <img src={windows} alt="Logo de Windows" />
                                    <span className='font-roboto text-div-red'>Windows</span>
                                </div>
                                <div className="w-16 md:w-18 text-center">
                                    <img src={mac} alt="Logo de Mac OS" />
                                    <span className='font-roboto text-div-red'>Mac OS</span>
                                </div>
                                <div className="w-16 md:w-18 text-center">
                                    <img src={debian} alt="Logo de Debian" />
                                    <span className='font-roboto text-div-red'>Debian</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border bg-div-white rounded-lg mt-4 p-4 xl:ml-44 mx-5 xl:mx-36">
                            <h2 className='text-center mb-2 text-div-blue font-roboto font-semibold'>À propos de moi</h2>
                            <div className="m-1">
                                <p className='font-roboto'>
                                    Je suis un développeur web qui aime la simplicité et l'élégance, j'aime créer selon les besoins des clients afin de leur proposer quelque chose au plus proche de leurs attentes. Lors du développement d'un site, je réffléchis d'un point de vue utilisateur afin de créer une interface agréable d'utilisation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border bg-div-white rounded-lg mx-5 xl:mx-36 mt-4 p-4">
                    <h2 className="text-center mb-2 text-div-blue font-roboto font-semibold">Projets</h2>
                    <div className="flex flex-wrap justify-around">
                        {Projets.map(item =>
                            <div className='text-center' key={item.id}>
                                <h3 className='text-div-green py-1'>{item.title}</h3>
                                <img src={item.image} alt={item.title} className="w-40" />
                                <span className='text-div-red'>{item.dates}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;