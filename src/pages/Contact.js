import { Field, Formik } from 'formik';
import React from 'react';
import validationSchema from '../components/constants/validationSchema';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const Contact = () => {
    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
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
                            alert('Votre message a bien été envoyé!')
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
                    })=> (
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

                            <div className="flex">
                                <button type="reset" className='mt-3 border-2 border-div-red bg-div-red w-2/5 xl:w-1/3 p-1 mx-auto rounded-md text-white hover:bg-white hover:text-div-red font-semibold'>Annuler</button>
                                <button type="submit" className='mt-3 border-2 border-div-green bg-div-green w-2/5 xl:w-1/3 p-1 mx-auto rounded-md text-white hover:bg-white hover:text-div-green font-semibold' disabled={isSubmitting}>Envoyer</button>
                            </div>
                        </form>
                    )}
                </Formik>

            </div>
        </div>
    );
};

export default Contact;