import React from 'react';
import SkillsInfo from '../components/datas/competencesData';
import windows from '../assets/images/logos/windows.png';
import mac from '../assets/images/logos/macos.png';
import debian from '../assets/images/logos/debian.png';

const Knowledges = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            {/* page Compétences */}
            <div>
                <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-3'>
                    <h1 className='text-center mb-4 text-div-blue font-roboto font-semibold'>Technologies en développement</h1>
                    <div className='flex flex-wrap justify-center'>
                        {SkillsInfo.map(item =>
                            <div className='w-16 md:w-24 text-center' key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <span className='hidden lg:block font-roboto text-div-red'>{item.name}</span>
                            </div>
                        )}

                    </div>
                </div>
                <div className="md:flex">
                    <div className="border bg-div-white rounded-lg mt-4 mx-5 md:ml-36 p-4">
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
                    {/* 
                    Faire un TypeWriter
                    
                    <div className="border bg-div-white rounded-lg mt-4 mx-5 p-4  max-h-48">
                        <h2 className='text-center mb-2 pb-2 text-div-blue font-roboto font-semibold'>À propos de moi</h2>
                        <p>
                        Je suis un développeur web qui aime la simplicité et l'élégance. Je travaille en HTML5 et en CSS3 afin de créer des sites web modernes. J'aime créer selon les besoins des clients afin de leur proposer quelque chose au plus proche de leurs attentes. Lors du développement d'un site, je réffléchis d'un point de vue utilisateur afin de créer une interface agréable d'utilisation.
                        </p>
                        
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Knowledges;