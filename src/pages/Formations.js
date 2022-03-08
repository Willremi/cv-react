import React from 'react';
import FormationsInfo from '../components/datas/formationsData';

const Formations = () => {
    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-5 w-full'>
                <h1 className='text-center text-div-blue font-roboto font-semibold'>Formations</h1>
                {FormationsInfo.map(item =>
                    <div key={item.id} className="xl:flex xl:justify-between p-2">
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.dates}</p>
                        </div>
                        <div>
                            <p>{item.location}</p>
                        </div>
                    </div>

                )}
                <div className="flex">
                </div>
            </div>
        </div>
    );
};

export default Formations;