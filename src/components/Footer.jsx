import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold border-b-4 border-gray-500 pb-2">Aman's Portfolio</h2>
        </div>

        
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold">Connect with Me</h3>
          <div className="flex space-x-4">
            <a href="https://wa.me/9560472926" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaWhatsapp size={25} />
            </a>
            <a href="https://github.com/amangupta9454" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={25} />
            </a>
            <a href="https://www.linkedin.com/in/amangupta9454/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={25} />
            </a>
            <a href="https://leetcode.com/amangupta9454" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <SiLeetcode size={25} />
            </a>
            <a href="https://www.instagram.com/gupta_aman_9161/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram size={25} />
            </a>
            <a href="https://telegram.me/amangupta20053" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTelegram size={25} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <button className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md">
                Resume
              </button>
            </a>
          </div>
        </div>

        
        <div className="flex flex-col items-end">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-sm">
            Vill: Jashara <br />
            Post: Sachui <br />
            District: Mau
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
