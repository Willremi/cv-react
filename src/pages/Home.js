import React from 'react';
import Typewriter from 'typewriter-effect';
// import Remi from '../assets/images/remi.jpg';

const Home = () => {
    return <div className="flex items-center justify-center h-screen">

        <div className="bg-div-white rounded-lg border shadow-lg p-10">
            <h1 className='text-black font-bold font-roboto'>Rémi Willebrouck</h1>
            
            {/* typewriter */}
            <div className="text-red-400 w-56 font-semibold">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            // .pauseFor(2500)
                            .changeDelay(80)
                            .typeString('Développeur Web Junior')
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString('Fullstack')
                            .deleteChars(9)
                            .typeString('Back-End')
                            .deleteChars(8)
                            .typeString('Front-End')
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true
                    }}
                />
            </div>

        </div>
    </div>
};

export default Home;