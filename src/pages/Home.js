import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return <div class="flex items-center justify-center h-screen">
        <div class="bg-div-white rounded-lg border shadow-lg p-10">
            <h1 className='text-black font-bold font-roboto'>Rémi Willebrouck</h1>
            <p className="text-red-400 w-44">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            // .pauseFor(2500)
                            .changeDelay(75)
                            .typeString('A simple yet powerful native javascript')
                            // .pauseFor(300)
                            // .deleteChars(10)
                            // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
                            // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
                            // .pauseFor(1000)
                            .start();
                    }}
                />
            </p>
        </div>
    </div>
};

export default Home;