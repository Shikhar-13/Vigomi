import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/send_email', formData)
      .then(response => {
        alert('Email sent successfully!');
      })
      .catch(error => {
        alert('Failed to send email: ' + error.toString());
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        <p className="mt-2 text-gray-500 text-sm">
        Transform your business with our top-tier digital solutions: web and app development, social media management, and video editing. Elevate your online presence and achieve your goals—contact us now!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4 text-black">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="email"
            id="name"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Enter email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className=" w-full rounded-lg border-gray-200 p-4 pe-12 align-top shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white  "
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-end justify-end">
          <button
            type="submit"
            className=" group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-10 w-32 border text-center  text-gray-50 text-2xl font-raleway rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg "
          >
            Connect
          </button>
        </div>
      </form>
    </div>
  );
}













