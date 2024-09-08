import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_arhr9wp', 'template_yu0eede', form.current, {
        publicKey: 'grD_bJMOqDBWkf4FO',
      })
      .then(
        () => {
          alert('Berhasil Terkirim');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Why do you want to be my gf?🤔🤔🤔</h1>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Namamu</label>
          <input
            type="text"
            name="from_name"
            id="name"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Emailmu</label>
          <input
            type="email"
            name="from_email"
            id="email"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Alasanmu</label>
          <textarea
            name="message"
            id="message"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};
