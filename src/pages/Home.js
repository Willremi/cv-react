import React from 'react';
import Typewriter from 'typewriter-effect';
import Remi from '../assets/images/remi.jpg';
import Twitter from '../assets/images/logos/twitter.png';
import Linkedin from '../assets/images/logos/linkedin.png';
import Github from '../assets/images/logos/github.png';

const Home = () => {
    return <>
        <div className="flex items-center justify-center h-screen md:mt-10 xl:mt-0">
            <div className='fixed z-20 mb-52 sm:mb-80 xl:mb-52'>
                <img src={Remi} alt="" className='w-36 sm:w-56 md:w-52 xl:w-36 h-36 sm:h-56 md:h-52 xl:h-36 rounded-full' />
            </div>

            <div className="bg-div-white rounded-lg border shadow-lg p-10 sm:p-16 xl:p-12 sm:px-44 md:px-48 xl:px-48 fixed z-10">
                <h1 className='text-black font-bold font-roboto'>Rémi Willebrouck</h1>

                {/* typewriter */}
                <div className="text-red-400 w-56 sm:w-60 xl:w-72 font-semibold sm:text-lg xl:text-xl">
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
            
            <div className="z-20 mt-36 sm:mt-48 xl:mt-40 flex fixed">
                <a href="https://www.linkedin.com/in/willremi" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="Twitter" className='w-12 sm:w-20 sm:h-20 md:w-16 md:h-16 mx-10 sm:mx-20 md:mx-28 bg-white rounded' />
                </a>
                <a href="https://twitter.com/RmiWill" target="_blank" rel="noreferrer">
                <img src={Twitter} alt="Twitter" className='w-12 sm:w-20 sm:h-20 md:w-16 md:h-16' />
                </a>
                <a href="https://github.com/Willremi" target="_blank" rel="noreferrer">
                <img src={Github} alt="Twitter" className='w-12 h-12 sm:w-20 sm:h-20 md:w-16 md:h-16 mx-10 sm:mx-20 md:mx-28 bg-white rounded-full' />
                </a>
            </div>
        </div>
    </>
};

export default Home;