import React from "react";
import HeroImage from "../assets/heroImage.png";
import starsImage from "../assets/star.jpg";
const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${starsImage})`,
      }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      
        <div className="flex justify-center pb-8">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-8 sm:space-y-0">
          
          <div className="flex flex-col justify-center w-full sm:w-1/2 space-y-6 text-center sm:text-left">
            <p className="text-xl sm:text-2xl">
              Hello everyone, I am Aman Gupta, a web developer who urges to create
              powerful and attractive websites. I love making new websites that are
              easy to use and can be accessed by anyone. I am happy to have my clients
              happy with the site’s performance, which they are able to see on their
              personal devices. I hope I get the opportunity to work in your esteemed
              organization. That’s all from my side.
            </p>
          </div>

         
          <div className="flex justify-center sm:justify-end items-center sm:w-1/2">
            <img
              src={HeroImage}
              alt="Profile"
              className="rounded-2xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
