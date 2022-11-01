import { Disclosure } from '@headlessui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import rw from '../assets/images/logos/rw.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import PDF from '../assets/documents/cvVers2022.pdf';
import { saveAs } from "file-saver";

const Navbar = () => {
    const navigation = [
        { name: 'Accueil', href: '/', current: false },
        { name: 'Compétences', href: '/competences', current: false },
        { name: 'Formations', href: '/formations', current: false },
        { name: 'Expériences professionnelles', href: '/experiences', current: false },
        { name: 'Contact', href: '/contact', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    const activeLink = "xl:text-white";

    const location = useLocation();

    const saveFile = () => {
        saveAs(
            PDF,
            "Rémi W - CV.pdf"
        )
    }

    return (
        <>
            <Disclosure as="nav" className="bg-nav-greenOp w-full top-0 fixed z-50">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-div-red hover:text-white hover:bg-div-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        {/* <span className="sr-only">Open main menu</span> */}
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <Link to="/"><img src={rw} alt="RW" className="hidden items-center lg:flex h-18 w-32" /></Link>
                                <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-between">
                                    <div className="flex-shrink-0 flex items-center">

                                        <img src={rw} alt="RW" className="block lg:hidden w-32 h-18" />

                                    </div>
                                    <div className="hidden lg:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    // className="text-div-red px-3 py-2 rounded-md text-md font-extrabold font-police hover:bg-div-blue hover:text-white"
                                                    className={`text-div-red px-3 py-2 rounded-md text-md font-extrabold font-police hover:bg-div-blue hover:text-white ${classNames(
                                                        (location.pathname === item.href) && activeLink
                                                    )}`}

                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            <p onClick={saveFile} className="text-div-red px-3 py-2 rounded-md text-md font-bold font-police hover:bg-div-blue hover:text-white">PDF</p>
                                        </div>
                                    </div>
                                </div>

                                <p onClick={saveFile} className="md:hidden text-div-red px-3 py-2 rounded-md text-md font-bold font-police hover:bg-div-blue hover:text-white">PDF</p>

                            </div>
                        </div>

                        <Disclosure.Panel className="lg:hidden bg-nav-greenOp w-full fixed z-50">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as={Link}
                                        to={item.href}
                                        // className="text-div-red hover:bg-div-blue hover:text-white block px-3 py-2 rounded-md text-lg font-semibold"
                                        className={`text-div-red hover:bg-div-blue hover:text-white block px-3 py-2 rounded-md text-lg font-semibold ${classNames(
                                            (location.pathname === item.href) && activeLink
                                        )}`}
                                    // aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default Navbar;