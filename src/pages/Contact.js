import React from 'react';

const Contact = () => {
    return (
        <div className='flex items-center justify-center mt-20 mb-20'>
            <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 p-5 w-full'>
                <h1 className='text-center text-div-blue font-roboto font-semibold'>Me contacter</h1>
                <div className="border-t-2 my-4 border-div-green"></div>

                <form name="contact" method="post" data-netlify="true" onSubmit="submit"
                    className=' flex flex-col w-1/2 mx-auto'
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <label for="name">Votre nom</label>
                    <input type="text" name="name" />

                    <label for="email" className='mt-2'>Votre email</label>
                    <input type="email" name="email" />


                    <label for="message" className='mt-2'>Message</label>
                    <textarea name="message"></textarea>


                    <button type="submit">Send</button>

                </form>

            </div>
        </div>
    );
};

export default Contact;