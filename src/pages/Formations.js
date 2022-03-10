import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import React from 'react';
import FormationsInfo from '../components/datas/formationsData';

const Formations = () => {
    const lastProjet = FormationsInfo.length;

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
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 bg-green-100 rounded-lg hover:bg-div-green focus:outline-none focus-visible:ring focus-visible:ring-div-blue focus-visible:ring-opacity-75 items-center">
                                    <div>
                                        <h3 className='font-medium text-left text-div-red font-roboto'>{item.title}</h3>
                                    </div>
                                    <div className="flex items-center">
                                    <div>                                        
                                        {item.id === lastProjet ? <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''} w-10 h-10 text-div-red`}
                                        /> : <ChevronDownIcon
                                            className={`${open ? 'transform rotate-180' : ''} w-10 h-10 text-div-red`}
                                        />}
                                    </div>    
                                    </div>
                                </Disclosure.Button>
                                <Transition
                                    show={item.id === lastProjet ? !open : open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pt-4 pb-2">
                                        <div className="flex flex-col xl:flex-row xl:justify-between bg-div-white border-nav-greenOp border-2 p-2 rounded-lg">
                                            <h3 className='text-div-blue font-semibold text-center text-lg'>{item.location}</h3>
                                            <p className='text-div-red font-semibold text-base text-center'>{item.dates}</p>

                                        </div>
                                        {item.actions && 
                                            <div className="bg-nav-yellow mx-2 py-4 rounded-b-lg">
                                                {item.actions.map(elt =>
                                                    <div key={elt.id} className="mx-6 xl:mx-10">
                                                        <ul className='list-[circle]'>
                                                            <li className='xl:text-lg text-div-green my-2 font-semibold'>{elt.description}</li>
                                                        </ul>
                                                    </div>
                                                    
                                                )}
                                            </div>
                                        }
                                    </Disclosure.Panel>

                                </Transition>
                            </>
                        )}
                    </Disclosure>
                )}

            </div>
        </div>
    );
};

export default Formations;