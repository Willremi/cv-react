import React from 'react';
import ExperiencesInfo from '../components/datas/experiencesData';

const Experiences = () => {
    // Tri d'apparition des projets;
    ExperiencesInfo.sort(function (a, b) {
        return b.id - a.id;
    });

    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-5 w-full'>
                <h1 className='text-center text-div-blue font-roboto font-semibold'>Expériences professionnelles</h1>

                <div className="mt-2">
                {ExperiencesInfo.map(item => 
                    <div key={item.id} className="flex">

                        <div className="p-2">
                            <div>
                                <h3 className='text-div-red font-roboto'>{item.title}</h3>
                                <p className='text-div-blue'>{item.dates}</p>
                            </div>
                            <div>
                                <p className='text-div-green xl:text-lg'>{item.location}</p>
                            </div>
                        </div>
                        <div className={`${item.id !== 1 && 'border-t-2 mx-2 my-2 border-white'}`}></div>
                    </div> 
                )}    
                </div>
            </div>
        </div>
    );
};

export default Experiences;