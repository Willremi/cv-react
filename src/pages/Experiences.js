import React, { useState } from 'react';
import ExperiencesInfo from '../components/datas/experiencesData';

const Experiences = () => {
    // Tri d'apparition des projets;
    ExperiencesInfo.sort(function (a, b) {
        return b.id - a.id;
    });

    const [selected, setSelected] = useState('')

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
                        <div key={item.id} className={`${selected === item.tag || selected === '' ? 'flex' : 'hidden'}`}>
                            <div className="p-2">
                                <div>
                                    <h3 className='text-div-red font-roboto'>{item.title}</h3>
                                    <p className='text-div-blue'>{item.dates}</p>
                                </div>
                                <div>
                                    <p className='text-div-green xl:text-lg'>{item.location}</p>
                                </div>
                            </div>
                        </div>

                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;