import React from "react";
import healthImage from "../assets/health.jpeg"; 
import calculatorImage from "../assets/calculator.jpeg"; 
import starsImage from "../assets/star.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Aman Healthcare Website",
      description: "Created using HTML, CSS, and JavaScript.",
      image: healthImage, 
      sourceCode: "https://github.com/amangupta9454/",
      livePreview: "https://amanhealthcare.netlify.app/",
    },
    {
      id: 2,
      name: "Calculator",
      description: "Created using HTML, CSS, and JavaScript.",
      image: calculatorImage, 
      sourceCode: "https://github.com/amangupta9454/",
      livePreview: "https://amangupta9454.github.io/Calculator/calculator.html",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-10 px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${starsImage})`,
      }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
      <div className="flex justify-center items-center">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold border-b-4 border-gray-500 inline-block pb-2">
    Projects
  </h2>
</div>
        <p className="py-4 text-center">Here are some of my projects I've worked on:</p>

        <div className="grid sm:grid-cols-2 gap-8 px-6">
          {projects.map(({ id, name, description, image, sourceCode, livePreview }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-700 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover hover:scale-105 duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-2 text-gray-400">{description}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300"
                  >
                    View Source Code
                  </a>
                  <a
                    href={livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300"
                  >
                    View Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
