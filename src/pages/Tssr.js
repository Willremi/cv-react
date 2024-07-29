import React from 'react';
import TechnoInfo from '../components/datas/technoData.js';
import mysql from '../assets/images/logos/mysql.png';
import ad from '../assets/images/logos/activeDirectory.png';

import teams from '../assets/images/logos/teams.png';
import word from '../assets/images/logos/word.png';
import excel from '../assets/images/logos/excel.png';
import outlook from '../assets/images/logos/outlook.png';

import vmware from '../assets/images/logos/vmware.png';
import citrix from '../assets/images/logos/citrix.png';

import anydesk from '../assets/images/logos/anydesk.png';
import beyondtrust from '../assets/images/logos/beyondtrust.png';

import terminal from '../assets/images/logos/terminal.png';
import powershell from '../assets/images/logos/powershell.png';

import glpi from '../assets/images/logos/glpi.png';
import servicenow from '../assets/images/logos/servicenow.png';

import osData from '../components/datas/osData.js';

const Tssr = () => {
    return (
        <div className='flex mx-36 mt-20 mb-20'>
            <div className='flex flex-wrap'>
                <div className='bg-div-white rounded-lg border shadow-lg p-3 w-full'>
                    <h1 className='text-center text-div-red font-roboto font-semibold'>Technicien Systèmes et Réseaux</h1>
                </div>

                {/* À propos de moi */}
                <div className="bg-div-white rounded-lg border-shadow-lg p-3 mt-4 w-full">
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>À propos de moi</h2>
                    <div className="border-t-2 my-4 border-div-green"></div>
                    <div className="m-1">
                        <p className="font-roboto text-red-600 indent-5 lg:indent-0 text-lg">
                            Titulaire d'un titre professionnelle de Technicien Supérieur Systèmes et Réseaux dont j'ai acquis des compétences dans le déploiement de Windows, la gestion de serveurs de fichiers et l'utilisation de logiciels de virtualisation. Fort d'un mois d'expérience en tant que technicien support informatique, je suis prêt à mettre en pratique mes connaissances et compétences au sein de l'entreprise.
                        </p>
                    </div>
                </div>
                <div className="bg-div-white rounded-lg border-shadow-lg p-2 mt-4 w-full">
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>Systèmes d'exploitation</h2>
                    <div className="border-t-2 my-4 border-div-green"></div>
                    <div className="flex justify-around">
                        {osData.map(elt => (
                            <div key={elt.id} className={`w-20 text-center mx-3 xl:mx-0 ${elt.name === 'Windows Server' ? 'md:w-12' : 'md:w-16'}`}>
                                <img src={elt.logo} alt={elt.name} />
                                <span className='font-roboto text-div-red'>{elt.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Systèmes exploitation & outils */}
                <div className="flex mx-auto justify-center">
                    <div className="w-full md:w-9/12 px-2">
                        <div className="bg-div-white rounded-lg border shadow-lg p-2 mt-4">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Technologies informatiques</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className="flex flex-wrap justify-center">
                                {TechnoInfo.map(item => (
                                    <div className="border rounded-lg bg-div-blueClar p-2 text-white text-center w-20 m-1" key={item.id}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                        <div className="bg-div-white rounded-lg border shadow-lg p-2 mt-4">
                            <h2 className='text-center text-div-blue font-roboto font-semibold'>Bases de données</h2>
                            <div className="border-t-2 my-4 border-div-green"></div>
                            <div className="flex justify-around">
                                <div className='text-center w-20 my-1 mx-2'>
                                    <img src={mysql} alt="Logo de mysql" />
                                </div>
                                <div className='text-center w-24 mx-2'>
                                    <img src={ad} alt="Logo d'activeDirectory" className='bg-white' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Logiciels */}
                <div className="bg-div-white rounded-lg border-shadow-lg p-3 mt-4 w-full">
                    <h2 className='text-center text-div-blue font-roboto font-semibold'>Applications</h2>
                    <div className="border-t-2 my-4 border-div-green"></div>
                    <div className="flex justify-center mx-auto">
                        <div className="w-full md:w-1/2 px-2">
                            <div className="bg-yellow-600 rounded-lg border shadow-lg p-2 mt-4">
                                <h3 className='text-center text-white font-roboto font-semibold'>Microsoft</h3>
                                <div className="border-t-2 my-4 border-div-red"></div>
                                <div className="flex justify-around">
                                    <div className='text-center w-20 md:w-16 mx-2'>
                                        <img src={teams} alt="Logo de Teams" />
                                    </div>
                                    <div className='text-center w-20 md:w-16 mx-2'>
                                        <img src={word} alt="Logo de Word" />
                                    </div>
                                    <div className='text-center w-20 md:w-16 mx-2'>
                                        <img src={excel} alt="Logo de Excel" />
                                    </div>
                                    <div className='text-center w-20 md:w-16 mx-2'>
                                        <img src={outlook} alt="Logo de Outlook" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="bg-green-600 rounded-lg border shadow-lg p-2 mt-4">
                                <h3 className='text-center text-white font-roboto font-semibold'>Virtualisation</h3>
                                <div className="border-t-2 my-4 border-div-red"></div>
                                <div className="flex justify-around">
                                    <div className='text-center w-20 md:w-12 mx-2'>
                                        <img src={vmware} alt="Logo de VMWare" />
                                    </div>
                                    {/* <div>Citrix Workspace</div> */}
                                    <div className='text-center w-20 md:w-12 mx-2'>
                                        <img src={citrix} alt="Logo de Citrix" />
                                    </div>
                                    {/* <div>Hyper-V</div> */}
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-2">
                            <div className="bg-div-violet rounded-lg border shadow-lg p-2 mt-4">
                                <h3 className='text-center text-white font-roboto font-semibold'>Progammation</h3>
                                <div className="border-t-2 my-4 border-div-red"></div>
                                <div className="flex justify-around">
                                    {/* <div>Terminal</div> */}
                                    <div className='text-center w-20 md:w-12 mx-2'>
                                        <img src={terminal} alt="Logo de Terminal" className='bg-white' />
                                    </div>
                                    {/* <div>Powershell</div> */}
                                    <div className='text-center w-20 md:w-12 mx-2 bg-white'>
                                        <img src={powershell} alt="Logo de powershell" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mx-auto">
                        <div className="w-full md:w-1/4 px-2">
                            <div className="bg-div-blue rounded-lg border shadow-lg p-2 mt-4">
                                <h3 className='text-center text-white font-roboto font-semibold'>Support à distance</h3>
                                <div className="border-t-2 my-4 border-div-red"></div>
                                <div className="flex justify-around">
                                    {/* <div>AnyDesk</div> */}
                                    <div className='text-center w-20 md:w-16 mx-2'>
                                        <img src={anydesk} alt="Logo d'Anydesk" />
                                    </div>
                                    {/* <div>BeyondTrust</div> */}
                                    <div className='text-center w-20 md:w-16 mx-2'>
                                        <img src={beyondtrust} alt="Logo de BeyondTrust" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 px-2">
                            <div className="bg-div-blueClar rounded-lg border shadow-lg p-2 mt-4">
                                <h3 className='text-center text-white font-roboto font-semibold'>Ticketing</h3>
                                <div className="border-t-2 my-4 border-div-red"></div>
                                <div className="flex flex-wrap justify-around">
                                    {/* <div>GLPI</div> */}
                                    <div className='text-center w-20 md:w-16 mx-2 bg-white'>
                                        <img src={glpi} alt="Logo de GLPI" />
                                    </div>
                                    {/* <div>ServiceNow</div> */}
                                    <div className='text-center w-20 md:w-16 mx-2 bg-white'>
                                        <img src={servicenow} alt="Logo de ServiceNow" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tssr;