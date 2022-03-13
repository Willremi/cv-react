import React, { useState } from 'react';
import ExperiencesInfo from '../components/datas/experiencesData';

const Experiences = () => {
    // Tri d'apparition des projets;
    ExperiencesInfo.sort(function (a, b) {
        return b.id - a.id;
    });

    const [selected, setSelected] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const options = [
        { id: "0", name: "Sélectionnez la profession", tag: "" },
        { id: "1", name: "Développeur Web", tag: "dw" },
        { id: "2", name: "Agent d'exploitation logistique", tag: "logistic" },
        { id: "3", name: "Agent contractuel occasionnel", tag: "admin" },
        { id: "4", name: "Technicien en maintenance informatique", tag: "pc" },
        { id: "5", name: "Contrôleur Non destructif", tag: "cnd" },
    ]

    const selectionExp = (e) => {
        let selectedItem = e.target.value;
        setSelected(selectedItem);
    }

    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-5 w-full'>
                <h1 className='text-center text-div-blue font-roboto font-semibold'>Expériences professionnelles</h1>
                <div className="border-t-2 my-4 border-div-green"></div>
                <div className="mt-3">
                    <div className="text-center xl:text-right">
                        <select value={selected} onChange={selectionExp
                        } className="text-center p-2 xl:px-1 rounded bg-nav-greenOp text-white xl:w-96">
                            {options.map(opt =>
                                <option value={opt.tag} key={opt.id} className="">{opt.name}</option>
                            )}
                        </select>
                    </div>

                    <div className="mt-2">
                        {ExperiencesInfo.map(item =>
                            <div key={item.id} className={`${selected === item.tag || selected === '' ? '' : 'hidden'}`}>
                                <div className="p-2" onClick={() => {
                                    setShowModal(true);
                                    setModalData(item);
                                }}>
                                    <div>
                                        <h3 className='text-div-red font-roboto'>{item.title}</h3>
                                        <p className='text-div-blue'>{item.dates}</p>
                                    </div>
                                    <div>
                                        <p className='text-div-green xl:text-lg'>{item.location}</p>
                                    </div>
                                </div>
                                {/* Modal */}
                                {showModal ? (
                                    <>
                                        <div
                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                        // onClick={() => setShowModal(false)}
                                        >
                                            <div className="relative w-auto my-6 mx-2 max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h2 className="font-semibold text-blue-500 font-roboto">
                                                            {modalData.title}
                                                        </h2>
                                                    </div>
                                                    {/*body*/}
                                                    <div className="relative px-6 p-4 flex-auto">
                                                        {modalData.missions.map(elt =>
                                                            <div key={elt.id}>
                                                                <p className="my-2 text-gray-800 text-lg leading-relaxed">
                                                                    {elt.title}
                                                                </p>
                                                            </div>

                                                        )}

                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            Fermer la fenêtre
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-white"></div>
                                    </>
                                ) : null}
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;