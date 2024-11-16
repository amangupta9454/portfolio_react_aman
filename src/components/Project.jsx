import HealthImage from "../assets/health.jpeg";
import CalculatorImage from "../assets/calculator.jpeg";

const Project = () => {
  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-6">
          
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        
          <div className="card bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src={HealthImage}
              alt="Health Care Website"
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="text-xl font-semibold mt-4">The Hospital that Cares for You</p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:scale-105 duration-200">
              <a href="https://amangupta9454.github.io/landingpage/index.html" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </button>
            <p className="text-lg mt-4">
              A health care website created using HTML, CSS, and JavaScript. This website allows users to view information about doctors, their specialties, patient reviews, and an appointment form, making it easy to schedule appointments with doctors.
            </p>
          </div>

          
          <div className="card bg-gray-900 p-6 rounded-lg shadow-lg">
            <img
              src={CalculatorImage}
              alt="Calculator"
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="text-xl font-semibold mt-4">Fully Functional Calculator</p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:scale-105 duration-200">
              <a href="https://amangupta9454.github.io/CALCULATOR/CALCULATOR/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </button>
            <p className="text-lg mt-4">
              A fully functional calculator created using HTML, CSS, and JavaScript. This project allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Created by Aman Gupta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
