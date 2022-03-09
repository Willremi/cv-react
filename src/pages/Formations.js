import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'
import React from 'react';
import FormationsInfo from '../components/datas/formationsData';

const Formations = () => {
    // Tri d'apparition des projets;
    FormationsInfo.sort(function (a, b) {
        return b.id - a.id;
    });

    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-5 w-full'>
                <h1 className='text-center text-div-blue font-roboto font-semibold'>Formations</h1>
                {FormationsInfo.map(item =>
                    // <div key={item.id} className="flex">

                    //     <div className="xl:flex xl:justify-between p-2">
                    //         <div>
                    //             <h3 className='text-div-red font-roboto'>{item.title}</h3>
                    //             <p className='text-div-blue'>{item.dates}</p>
                    //         </div>
                    //         <div>
                    //             <p className='text-div-green xl:text-lg'>{item.location}</p>
                    //         </div>
                    //     </div>
                    //     <div className={`${item.id !== 1 && 'border-t-2 mx-2 my-2 border-white'}`}></div>
                    // </div>
                    <Disclosure as="div" className="mt-2" key={item.id}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 bg-green-100 rounded-lg hover:bg-div-green focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <h2 className='font-medium text-left text-div-red '>{item.title}</h2>
                                    <ChevronUpIcon
                                        className={`${open && 'transform rotate-180'} w-8 h-8 text-div-red`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col xl:flex-row xl:justify-between">
                                    <h3 className='text-div-blue font-semibold text-center'>{item.location}</h3>
                                    <p className='text-div-blue font-semibold text-sm text-center'>{item.dates}</p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                )}

            </div>
        </div>
    );
};

export default Formations;