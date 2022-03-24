import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import validationSchema from '../components/constants/validationSchema';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}


const Contact = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-5 w-full'>
                <h1 className='text-center text-div-blue font-roboto font-semibold'>Me contacter</h1>
                <div className="border-t-2 my-4 border-div-green"></div>

                {/* <form name="contact" method="post" data-netlify="true" onSubmit="submit"
                    className='flex flex-col xl:w-1/2 xl:mx-auto'
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <label for="name">Votre nom</label>
                    <input type="text" name="name" />

                    <label for="email" className='mt-2'>Votre email</label>
                    <input type="email" name="email" />


                    <label for="message" className='mt-2'>Message</label>
                    <textarea name="message"></textarea>


                    <button type="submit" className='mt-3 border-2 border-div-green bg-div-green w-2/5 xl:w-1/3 p-1 mx-auto rounded-md text-white hover:bg-white hover:text-div-green font-semibold'>Envoyer</button>

                </form> */}
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
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
                            className='flex flex-col xl:w-1/2 xl:mx-auto'
                        >
                            <label htmlFor="name">Votre nom</label>
                            <Field
                                //   as="input"
                                type="text"
                                name="name"

                            />
                            {touched.name && errors.name && <span className='text-div-red'>{errors.name}</span>}
                            <label htmlFor="email" className='mt-2'>Votre email</label>
                            <Field
                                type="email"
                                name="email"
                            />
                            {touched.email && errors.email && <span className='text-div-red'>{errors.email}</span>}

                            <label htmlFor="message" className='mt-2'>Votre message</label>
                            <Field
                                as="textarea"
                                name="message"
                            />
                            {touched.message && errors.message && <span className='text-div-red'>{errors.message}</span>}

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
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 border-b border-solid border-div-green mx-4 rounded-t">
                                    <h2 className="font-semibold text-blue-500 font-roboto">
                                        {document.title}
                                    </h2>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 p-4 flex-auto text-center">
                                    <p className="my-2 text-div-blue text-xl font-roboto leading-relaxed">
                                        Votre message a bien été envoyé
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-4 border-t border-solid border-div-green mx-4 rounded-b">
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