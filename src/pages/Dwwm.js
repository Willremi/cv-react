import React, { useState } from "react";
import Projets from "../components/datas/projetsData";
import DwwmInfo from "../components/datas/dwwmData";
import Outils from "../components/datas/outilsData";
import Interets from '../components/datas/interetsData';
import windows from '../assets/images/logos/windows.png';
import mac from '../assets/images/logos/macos.png';
import debian from '../assets/images/logos/debian.png';
import StyledTooltip from "../components/constants/StyledTooltip";
import { Carousel } from "react-responsive-carousel";

const Dwwm = () => {
    Projets.sort(function (a, b) {
        return b.id - a.id;
    });

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            <div>
                <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-3'>
                    <h1 className='text-center text-div-red font-roboto font-semibold'>Développeur Web</h1>
                </div>

                {/* À propos de moi */}
                <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-3 mt-4'>
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>À propos de moi</h2>
                    <div className="border-t-2 my-4 border-div-green"></div>
                    <div className="m-1">
                        <p className='font-roboto text-red-600 indent-5 text-xl'>Je suis un développeur web qui aime la simplicité et l'élégance, j'aime créer selon les besoins des clients afin de leur proposer quelque chose au plus proche de leurs attentes. Lors du développement d'un site, je réfléchis d'un point de vue utilisateur afin de créer une interface agréable d'utilisation.</p>
                        {/* <div className="border-t-2 border-div-green my-3 w-1/2 text-center mx-auto"></div>
                        <h2 className='text-center mt-1 text-div-blue font-semibold'>Intérêts</h2>
                        <div className="flex justify-center mt-4">
                            {Interets.map(elt => 
                                <div key={elt.id} className="px-4">
                                    <StyledTooltip title={elt.name} arrow={true}>
                                        <img src={elt.icon} alt={elt.name} />
                                    </StyledTooltip>
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>

                {/* Systèmes exploitation & outils */}
                <div className="md:flex">
                    <div>
                        <div className="border bg-div-white rounded-lg mt-4 mx-5 md:ml-36 p-4 xl:w-full">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Systèmes d'exploitation</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className="flex justify-around">
                                <div className="w-20 xl:w-18 text-center mx-3 xl:mx-0">
                                    <img src={windows} alt="Logo de Windows" />
                                    <span className='font-roboto text-div-red'>Windows</span>
                                </div>
                                <div className="w-20 xl:w-18 text-center">
                                    <img src={mac} alt="Logo de Mac OS" />
                                    <span className='font-roboto text-div-red'>Mac OS</span>
                                </div>
                                <div className="w-20 xl:w-18 text-center mx-3 xl:mx-0">
                                    <img src={debian} alt="Logo de Debian" />
                                    <span className='font-roboto text-div-red'>Debian</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border bg-div-white rounded-lg mt-4 p-4 sm:ml-5 md:ml-4 xl:ml-44 mx-5 md:mx-36">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Outils utilisés</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className="flex flex-wrap xl:flex-nowrap justify-center lg:justify-around">
                                {Outils.map(elt =>
                                    <div key={elt.id} className='mx-1 mb-4 md:mb-3 xl:mb-0 w-32'>
                                        <StyledTooltip title={elt.name} arrow={true}>
                                            <img src={elt.logo} alt={elt.name} />
                                        </StyledTooltip>
                                        <span className={`xl:hidden mx-3 ${(elt.name === "Git") && "ml-6 md:ml-8"} font-roboto text-div-red`}>{elt.name}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Langage web & projets */}
                <div className="md:flex md:justify-center max-w-screen-2xl ml-36">
                    <div className="flex-1 min-w-0 mx-2">
                        <div className="bg-div-white rounded-lg border shadow-lg p-3 mt-4 w-full">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Outils utilisés</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className='flex flex-wrap justify-between'>
                                {DwwmInfo.map(item =>
                                    <div className={`w-16 md:w-24 text-center mb-4`} key={item.id}>
                                        <a href={item.href} target='_blank' rel="noreferrer">
                                            <img src={item.image} alt={item.name} />
                                            <span className='hidden lg:block font-roboto text-div-red'>{item.name}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0 mx-2">
                        <div className="bg-div-white rounded-lg border shadow-lg p-3 mt-4 w-full">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Projets</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className='flex flex-wrap justify-around'>
                                {Projets.map(
                                    item =>
                                        <div className='text-center' key={item.id}>
                                            <h3 className='text-div-blue underline py-1 font-semibold'>{item.title}</h3>
                                            <img src={item.images[0].src} alt={item.title} className="w-40 sm:w-56 md:w-48 xl:w-40 mx-auto" id={item.title} />
                                        </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dwwm;