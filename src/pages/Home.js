import React from 'react';
import Typewriter from 'typewriter-effect';
import Remi from '../assets/images/remi.jpg';
import Twitter from '../assets/images/logos/twitter.png';
import Linkedin from '../assets/images/logos/linkedin.png';
import Github from '../assets/images/logos/github.png';
import Mail from '../assets/images/logos/mail.png'
import StyledTooltip from '../components/constants/StyledTooltip';

const Home = () => {
        
    return <>
        <div className="flex items-center justify-center h-screen md:mt-10 xl:mt-0">
            <div className='fixed z-20 mb-52 sm:mb-80 xl:mb-72'>
                <img src={Remi} alt="profil" className='w-36 sm:w-56 md:w-52 h-36 sm:h-56 md:h-52 xl:w-48 xl:h-48 rounded-full' />
            </div>

            <div className="bg-div-white rounded-lg border shadow-lg p-10 sm:p-16 xl:p-16 sm:px-44 md:px-48 xl:px-48 fixed z-10">
                <h1 className='text-blue-800 font-bold font-roboto'>Rémi Willebrouck</h1>

                {/* typewriter */}
                <div className="text-red-500 w-56 sm:w-60 xl:w-72 font-semibold sm:text-lg xl:text-xl">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                // .pauseFor(2500)
                                .changeDelay(80)
                                .typeString('Développeur Web Junior')
                                .pauseFor(500)
                                .deleteChars(6)
                                .typeString('Fullstack')
                                .pauseFor(500)
                                .deleteChars(9)
                                .typeString('Back-End')
                                .pauseFor(500)
                                .deleteChars(8)
                                .typeString('Front-End')
                                .pauseFor(500)
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>

            <div className="z-20 mt-36 sm:mt-48 xl:mt-52 flex fixed items-center">
                <StyledTooltip title="Mon Linkedin" arrow={true}>
                    <a href="https://www.linkedin.com/in/willremi" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Linkedin" className='w-12 sm:w-20 md:w-18 h-auto bg-white rounded mx-2 sm:mx-4 ml-4 md:ml-12 md:mx-10' />
                    </a>
                </StyledTooltip>
                <StyledTooltip title="Mon Twitter" arrow={true}>
                    <a href="https://twitter.com/RmiWill" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="Twitter" className='w-12 sm:w-20  md:w-18 h-auto bg-white rounded mx-2 sm:mx-10 md:mx-10' />
                    </a>
                </StyledTooltip>
                <StyledTooltip title="Mon Github" arrow={true}>
                    <a href="https://github.com/Willremi" target="_blank" rel="noreferrer">
                        <img src={Github} alt="Github" className='w-14 sm:w-20 sm:h-20 xl:w-24 xl:h-24 mx-2 bg-white rounded-full sm:mx-8 md:mx-10' />
                    </a>
                </StyledTooltip>
                <StyledTooltip title="Mon Email" arrow={true}>
                    <a href={`mailto:wi11remi@wiremi.fr?subject=Message provenant du site ${document.title}`} target="_blank" rel="noreferrer">
                        <img src={Mail} alt="E-mail" className='w-16 sm:w-24 md:w-24 xl:w-28 sm:mx-1 md:mx-6 mr-3' />
                    </a>
                </StyledTooltip>
            </div>
        </div>
    </>
};

export default Home;