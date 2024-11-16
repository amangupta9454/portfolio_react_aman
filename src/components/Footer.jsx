import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 hover:text-green-400 cursor-pointer">Aman's Portfolio</h2>

        <div className="flex space-x-4 mb-6">
          <a href="https://www.instagram.com/gupta_aman_9161/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://wa.me/9560472926" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600 text-2xl">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/amangupta9454/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/amangupta9454/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600 text-2xl">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/amangupta9454/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600 text-2xl">
            <SiLeetcode />
          </a>
          <a href="https://telegram.me/amangupta20053" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600 text-2xl">
            <FaTelegramPlane />
          </a>
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-xl cursor-pointer">
            <button className="bg-cyan-500 px-4 py-2 rounded-md cursor-pointer">Resume</button>
          </a>
        </div>

        <p className="text-center text-white text-lg mb-4 cursor-pointer hover:text-blue-500">
          Address: Village Jashara, Post Sachui, District Mau
        </p>
        
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} Aman Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
