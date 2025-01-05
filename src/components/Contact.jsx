import React from "react";
import starsImage from "../assets/star.jpg";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${starsImage})`,
      }}
    >
      <div className="max-w-screen-lg px-4 mx-auto">
        
        <div className="mb-6 text-center">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
        </div>

        
        <div className="mb-6 text-center sm:text-left">
          <p className="text-xl flex justify-center item-center">Feel free to get in touch with me:</p>
          <ul className="text-lg mt-4 space-y-3 text-center">
            <li>Email: <a href="mailto:ag0567688@gmail.com" className="text-cyan-500 hover:underline">ag0567688@gmail.com</a></li>
            <li>Mobile: <a href="tel:+919560472926" className="text-cyan-500 hover:underline">+91 9560472926</a></li>
            <li>WhatsApp: <a href="https://wa.me/919560472926" className="text-cyan-500 hover:underline">+91 9560472926</a></li>
          </ul>
        </div>

        
        <div className="flex justify-center"
        >
          <form
            action="https://getform.io/f/amddkgwb"
            method="POST"
            className="w-full max-w-xl p-6 bg-gray-800 rounded-lg shadow-md"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${starsImage})`,
            }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 mt-2 text-black rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 mt-2 text-black rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="block text-lg font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                required
                className="w-full px-4 py-2 mt-2 text-black rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="block text-lg font-medium">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                required
                className="w-full px-4 py-2 mt-2 text-black rounded-md bg-gray-100 focus:outline-none"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className="w-full px-4 py-2 mt-2 text-black rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md shadow-lg hover:scale-105 transition-all duration-200"
            >
              Connect Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
