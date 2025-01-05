import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"; 
import Typed from "typed.js";
import HeroImage from "../assets/coder-image.png";
import starsImage from "../assets/star.jpg"; // Import your starry background image

const Home = () => {
  const typedRef = useRef(null); 

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "I am a Full Stack Web Developer",
        "Aspiring Software Engineer",
      ], 
      typeSpeed: 50, 
      backSpeed: 30, 
      loop: true, 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="w-full bg-cover bg-center bg-black flex flex-col justify-center items-center pt-20 pb-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${starsImage})`,
      }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-x-12">
        <div className="flex flex-col items-center justify-center md:items-start">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white whitespace-nowrap animate-fadeIn hover:scale-105 hover:tracking-wide transition-all duration-300"
          >
            I am <span className="text-yellow-500 hover:text-yellow-300 transition-colors duration-300">Aman Gupta</span>
          </h2>

          <p className="text-green-600 py-4 max-w-md text-center md:text-left">
            <span
              ref={typedRef}
              className="text-sm sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold"
            ></span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6 md:space-y-0">
            <a
              href="/resume.pdf" 
              download
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:scale-110 transition-all duration-300"
            >
              <FaDownload size={20} />
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/amangupta9454/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/amangupta9454/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-full sm:w-2/3 md:w-3/4 lg:w-[400px] xl:w-[500px] transition-transform duration-500 hover:scale-105 hover:animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
