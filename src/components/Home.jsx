import React, { useState, useEffect } from 'react';
import "../styles/animations.css"; 

import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import coderImage from "../assets/coder-image.png"; 

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Web Developer.", "Aspiring Software Engineer."];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, ); 

  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-gray-700 via-gray to-gray-900 text-white flex flex-col justify-center items-center">
     
      <img src={coderImage} alt="Coder" className="w-32 h-32 rounded-full object-cover mb-6" />
      
      <h1 className="text-4xl font-bold">
        Hi, I am <span className="text-blue-500">Aman Gupta</span>
      </h1>

     
      <div className="mt-4">
        <span className="typing-text">{texts[textIndex]}</span>
      </div>

      <div className="mt-8 flex space-x-4">
       
        <Link to="contact" smooth duration={500} className="px-6 py-3 bg-blue-500 text-white rounded-md hover:scale-105 duration-200 cursor-pointer">
          Contact Me
        </Link>

        
        <a href="https://github.com/amangupta9454/" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:scale-105 duration-200 cursor-pointer">
            <FaGithub className="mr-2" /> GitHub
          </button>
        </a>

      
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:scale-105 duration-200 cursor-pointer">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
