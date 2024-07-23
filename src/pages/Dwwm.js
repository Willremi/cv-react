import React, { useState } from "react";
import Projets from "../components/datas/projetsData";
import DwwmInfo from "../components/datas/dwwmData";
import Outils from "../components/datas/outilsData";
// import Interets from '../components/datas/interetsData';
import windows from '../assets/images/logos/windows.png';
import mac from '../assets/images/logos/macos.png';
import debian from '../assets/images/logos/debian.png';
import StyledTooltip from "../components/constants/StyledTooltip";
// import { Carousel } from "react-responsive-carousel";

const Dwwm = () => {
    Projets.sort(function (a, b) {
        return b.id - a.id;
    });

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    return (

        <div className='flex mt-20 mb-20 mx-36'>
            <div>
                <div className='flex flex-wrap'>
                    <div className='bg-div-white rounded-lg border shadow-lg p-3 w-full'>
                        <h1 className='text-center text-div-red font-roboto font-semibold'>Développeur Web</h1>
                    </div>

                    {/* À propos de moi */}
                    <div className='bg-div-white rounded-lg border shadow-lg p-3 mt-4 w-full'>
                        <h2 className='text-center text-div-blue font-roboto font-semibold'>À propos de moi</h2>
                        <div className="border-t-2 my-4 border-div-green"></div>
                        <div className="m-1">
                            <p className='font-roboto text-red-600 indent-5 lg:indent-0 text-lg'>Je suis un développeur web qui aime la simplicité et l'élégance, j'aime créer selon les besoins des clients afin de leur proposer quelque chose au plus proche de leurs attentes. Lors du développement d'un site, je réfléchis d'un point de vue utilisateur afin de créer une interface agréable d'utilisation.</p>
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
                </div>

                <div className="flex flex-wrap -mx-2 px-2">
                    {/* Systèmes exploitation */}
                    <div className="w-full md:w-1/4 border bg-div-white rounded-lg mt-4 p-2">
                        <h2 className='text-center text-div-blue font-roboto font-semibold'>Systèmes d'exploitation</h2>
                        <div className="border-t-2 my-4 border-div-green"></div>
                        <div className="flex justify-around">
                            <div className="w-20 text-center mx-3 xl:mx-0">
                                <img src={windows} alt="Logo de Windows" />
                                <span className='font-roboto text-div-red'>Windows</span>
                            </div>
                            <div className="w-20 text-center mx-3 xl:mx-0">
                                <img src={mac} alt="Logo de Mac OS" />
                                <span className='font-roboto text-div-red'>Mac OS</span>
                            </div>
                            <div className="w-20 text-center mx-3 xl:mx-0">
                                <img src={debian} alt="Logo de Debian" />
                                <span className='font-roboto text-div-red'>Debian</span>
                            </div>
                        </div>
                    </div>

                    {/* Outils utilisés */}
                    <div className="w-full md:w-3/4 px-2">
                        <div className="border bg-div-white rounded-lg mt-4 p-2">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Outils utilisés</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className="flex flex-wrap justify-center xl:justify-around">
                                {Outils.map(elt => (
                                    <div key={elt.id} className='mx-3 mb-4 md:mb-3 xl:mb-0 w-20 md:w-12 xl:w-16 py-4'>
                                        <StyledTooltip title={elt.name} arrow={true}>
                                            <img src={elt.logo} alt={elt.name} />
                                        </StyledTooltip>
                                        <span className={`lg:hidden mx-3 ${(elt.name === "Git") && "ml-6 md:ml-8"} font-roboto text-div-red`}>{elt.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Langage web & projets */}
                <div className="md:flex mx-36 max-w-screen-3xl">
                    <div className="flex-1 min-w-0 mx-2">
                        <div className="bg-div-white rounded-lg border shadow-lg p-2 mt-4 w-full">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Langages</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className='flex flex-wrap justify-center'>
                                {DwwmInfo.map(item =>
                                    <div className={`w-16 md:w-20 text-center mb-4`} key={item.id}>
                                        <a href={item.href} target='_blank' rel="noreferrer">
                                            <StyledTooltip title={item.name} arrow={true}>
                                                <img src={item.image} alt={item.name} className="w-16" />
                                            </StyledTooltip>
                                            <span className='lg:hidden font-roboto text-div-red text-xs text-center'>{item.name}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0 mx-2">
                        <div className="bg-div-white rounded-lg border shadow-lg p-4 mt-4 w-full">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Projets</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className='flex flex-wrap justify-around'>
                                {Projets.map(
                                    item =>
                                        <div className='text-center' key={item.id}>
                                            <h3 className='text-div-blue underline py-1 font-semibold text-lg'>{item.title}</h3>
                                            <img src={item.images[0].src} alt={item.title} className="w-40 sm:w-56 md:w-40 mx-auto cursor-pointer" id={item.title} onClick={() => {
                                                setShowModal(true);
                                                setModalData(item);
                                            }} />
                                            <span className='text-div-red text-sm'>{item.dates}</span>

                                            {showModal && (
                                                <>
                                                    <div
                                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                    // onClick={() => setShowModal(false)}
                                                    >
                                                        <div className="relative w-auto my-6 mx-2 max-w-3xl">
                                                            {/*content*/}
                                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                {/* header */}
                                                                <div className="flex items-start justify-between p-4 border-b border-solid border-div-green mx-4 rounded-t">
                                                                    <h2 className="font-semibold text-div-blue font-roboto">
                                                                        {modalData.title}
                                                                    </h2>
                                                                </div>
                                                                {/*body*/}
                                                                <div className="relative px-6 p-4 flex-auto">
                                                                    <p className="my-2 text-red-800 text-xl leading-relaxed font-roboto">
                                                                        {modalData.description}
                                                                    </p>
                                                                    <div className="flex justify-center">
                                                                        {modalData.technos.map(elt =>

                                                                            <div key={elt.id}
                                                                                className="mx-2 px-2"
                                                                            >
                                                                                <StyledTooltip title={elt.title} arrow={true}>
                                                                                    <img src={elt.logo} alt={elt.title}
                                                                                        className="w-10 xl:w-12 h-auto"
                                                                                    />
                                                                                </StyledTooltip>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div className="overflow-auto max-h-44 mx-10 mt-2">
                                                                        {/* <Carousel useKeyboardArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false}>
                                                                                {modalData.images.slice(1).map(elt =>
                                                                                    <div key={elt.id} className='slide'>
                                                                                        {elt.legend && <h6 className='mb-2 text-div-blue font-semibold'>"{elt.legend}"</h6>}
                                                                                        <img src={elt.src} alt={elt.id} />
                                                                                    </div>
                                                                                )}
                                                                            </Carousel> */}
                                                                        <img src={modalData.images[1].src} alt={modalData.title} />
                                                                    </div>
                                                                </div>
                                                                {/*footer*/}
                                                                <div className={`flex items-center p-4 mx-4 border-t border-solid border-div-green rounded-b ${(!modalData.lien) ? 'justify-end' : 'justify-between'}`}>
                                                                    {modalData.lien && <a href={modalData.lien} rel="noreferrer"><button className='uppercase text-div-blue font-bold text-sm'>Visiter le site</button></a>}
                                                                    <button
                                                                        className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                                                        type="button"
                                                                        onClick={() => setShowModal(false)}
                                                                    >
                                                                        Fermer la fenêtre
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
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