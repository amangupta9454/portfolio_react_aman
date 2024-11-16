import React, {  useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-10">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
         
          <div className="text-2xl font-bold whitespace-nowrap">
            <Link to="home" smooth duration={300} className="cursor-pointer">
              Aman Gupta Portfolio
            </Link>
          </div>
  
         
          <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
  
         
          <ul
            className={`md:flex md:items-center md:space-x-6 md:static absolute top-full left-0 w-full bg-gray-800 text-center md:text-right transition-all duration-300 ease-in ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="md:ml-auto">
              <Link
                to="home"
                smooth
                duration={300}
                className="block p-3 md:inline cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth
                duration={300}
                className="block p-3 md:inline cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth
                duration={300}
                className="block p-3 md:inline cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth
                duration={300}
                className="block p-3 md:inline cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth
                duration={300}
                className="block p-3 md:inline cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="qualification"
                smooth
                duration={300}
                className="block p-3 md:inline cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Qualification
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth
                duration={300}
                className="block p-3 md:inline cursor-pointer hover:text-blue-500"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default NavBar;
