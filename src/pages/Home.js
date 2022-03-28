import React from 'react';
import Typewriter from 'typewriter-effect';
import Remi from '../assets/images/remi.jpg';
import Twitter from '../assets/images/logos/twitter.png';
import Linkedin from '../assets/images/logos/linkedin.png';
import Github from '../assets/images/logos/github.png';
import { styled, Tooltip } from '@mui/material';

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))`
    & .MuiTooltip-tooltip {
        background: #33658A;
        font-size: 16px;
        color: white;
        font-weight: bold;
    }
    .MuiTooltip-arrow {
        color: #33658A;
    }
    `;
const Home = () => {

    return <>
        <div className="flex items-center justify-center h-screen md:mt-10 xl:mt-0">
            <div className='fixed z-20 mb-52 sm:mb-80 xl:mb-60'>
                <img src={Remi} alt="profil" className='w-36 sm:w-56 md:w-52 h-36 sm:h-56 md:h-52 xl:w-40 xl:h-40 rounded-full' />
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
                <StyledTooltip title="Mon Linkedin" arrow={true}>
                    <a href="https://www.linkedin.com/in/willremi" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Twitter" className='w-12 sm:w-20 sm:h-20 md:w-16 md:h-16 mx-10 sm:mx-20 md:mx-28 bg-white rounded' />
                    </a>
                </StyledTooltip>
                <StyledTooltip title="Mon Twitter" arrow={true}>
                    <a href="https://twitter.com/RmiWill" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="Twitter" className='w-12 sm:w-20 sm:h-20 md:w-16 md:h-16' />
                    </a>
                </StyledTooltip>
                <StyledTooltip title="Mon Github" arrow={true}>
                    <a href="https://github.com/Willremi" target="_blank" rel="noreferrer">
                        <img src={Github} alt="Twitter" className='w-12 h-12 sm:w-20 sm:h-20 md:w-16 md:h-16 mx-10 sm:mx-20 md:mx-28 bg-white rounded-full' />
                    </a>
                </StyledTooltip>
            </div>
        </div>
    </>
};

export default Home;