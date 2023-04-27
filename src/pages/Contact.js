import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import validationSchema from '../components/constants/validationSchema';
import Logo from '../assets/images/logos/rw.png'
import EmailJS from '@emailjs/browser';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

(function(){
    EmailJS.init("{process.env.REACT_APP_PUBLIC_KEY}");
 })();

const sendFeedBack = (serviceId, templateId, variables) => {
    EmailJS
    .send(serviceId, templateId, variables, "{process.env.REACT_APP_PUBLIC_KEY}")
    .then((res) => {
        console.log("success");
    })
    .catch((err) => {
        console.error("Il y a une erreur");
    })
}

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='flex items-center justify-center mt-48 sm:mt-72 md:mt-28 xl:mt-0 xl:h-screen fixed w-screen'>
            <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-5 w-full'>
                <h1 className='text-center text-div-blue font-roboto font-semibold'>Me contacter</h1>
                <div className="border-t-2 my-4 border-div-green"></div>
                <Formik
                    initialValues={{ name: '', email: '',subject: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        fetch("/?no-cache=1", {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: encode({
                                'form-name': 'contact',
                                ...values,
                            })
                        })
                            .then(() => {
                                // alert('Votre message a bien été envoyé!')
                                setShowModal(true)
                                setSubmitting(false)
                                resetForm();
                            })
                            .catch(err => {
                                alert('Erreur : Essayez encore s\'il vous plaît!')
                                setSubmitting(false)
                            });
                            const templateId = "template_1zi649q";
                            const serviceId = "portfolio_wiremi";
                            sendFeedBack(serviceId, templateId, {
                                name: values.name,
                                email: values.email,
                                subject: values.subject,
                                message: values.message
                            })
                    }}
                >
                    {({
                        touched,
                        errors,
                        isSubmitting,
                        handleSubmit,
                        handleReset,
                    }) => (
                        <form name='contact'
                            onSubmit={handleSubmit}
                            onReset={handleReset}
                            data-netlify='true'
                            data-netlify-honeypot='bot-field'
                            className='flex flex-col xl:w-1/2 sm:mx-20 xl:mx-auto'
                        >
                            {/* Réel formulaire */}
                            <label htmlFor="name">Votre nom</label>
                            <Field
                                as="input"
                                type="text"
                                name="name"
                                className=""
                            />
                            {touched.name && errors.name && <span className='text-div-red'>{errors.name}</span>}
                            <label htmlFor="email" className='mt-2'>Votre email</label>
                            <Field
                                type="email"
                                name="email"
                            />
                            {touched.email && errors.email && <span className='text-div-red'>{errors.email}</span>}

                            <label htmlFor="subject">Sujet</label>
                            <Field
                                as="input"
                                type="text"
                                name="subject"
                                className=""
                            />
                            {touched.subject && errors.subject && <span className='text-div-red'>{errors.subject}</span>}

                            <label htmlFor="message" className='mt-2'>Votre message</label>
                            <Field
                                as="textarea"
                                name="message"
                                rows={2}
                            />
                            {touched.message && errors.message && <span className='text-div-red'>{errors.message}</span>}

                            {/* Pot de miel */}
                            <label htmlFor="name" className='honey'>Votre nom</label>
                            <Field
                                as="input"
                                type="text"
                                name="name"
                                className="honey"
                                autoComplete="off"
                            />
                            {/* {touched.name && errors.name && <span className='text-div-red'>{errors.name}</span>} */}
                            <label htmlFor="email" className='mt-2 honey'>Votre email</label>
                            <Field
                                type="email"
                                name="email"
                                className="honey"
                                autoComplete="off"
                            />
                            {/* {touched.email && errors.email && <span className='text-div-red'>{errors.email}</span>} */}

                            <label htmlFor="subject" className='honey'>Sujet</label>
                            <Field
                                as="input"
                                type="text"
                                name="subject"
                                className="honey"
                                autoComplete="off"
                            />
                            {/* {touched.subject && errors.subject && <span className='text-div-red'>{errors.subject}</span>} */}

                            <label htmlFor="message" className='mt-2 honey'>Votre message</label>
                            <Field
                                as="textarea"
                                name="message"
                                className="honey"
                                autoComplete="off"
                                rows={2}
                            />
                            {/* {touched.message && errors.message && <span className='text-div-red'>{errors.message}</span>} */}

                            <div className="flex mt-6">
                                <button type="reset" className='border-2 border-div-red bg-div-red w-2/5 xl:w-1/3 p-1 mx-auto rounded-md text-white hover:bg-white hover:text-div-red font-semibold'>Annuler</button>

                                <button type="submit" className='border-2 border-div-green bg-div-green w-2/5 xl:w-1/3 p-1 mx-auto rounded-md text-white hover:bg-white hover:text-div-green font-semibold' disabled={isSubmitting}>Envoyer</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>

            {/* à faire : modale de confirmation et visualiser sur tablette */}
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    // onClick={() => setShowModal(false)}
                    >
                        <div className="relative w-full my-6 mx-2 max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-nav-yellow outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-start border-b border-solid border-div-green mx-4 rounded-t">
                                    <img src={Logo} alt="RW" className='w-20 h-20' />
                                    <h2 className="font-semibold text-div-blue font-roboto">
                                        {document.title}
                                    </h2>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 p-4 flex-auto text-center">
                                    <p className="my-2 text-green-500 text-xl font-roboto font-semibold">
                                        Votre message a bien été envoyé !
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end border-t border-solid border-div-green mx-4 rounded-b h-20">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
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
    );
};

export default Contact;