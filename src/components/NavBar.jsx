import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "experience" },
    { id: 5, link: "projects" },
    { id: 6, link: "qualification" },
    { id: 7, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 bg-gradient-to-r from-violet-900 via-cyan-800 to-gray-900 text-white fixed z-10">
      <div>
        <h1 className="text-4xl font-bold ml-2 hover:text-pink-800 hover:animate-bounce hover:underline">Aman's Portfolio</h1>
      </div>

      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-bold text-lg text-white  duration-200 hover:underline hover-animate-spin hover:text-green-600"
          >
            <Link to={link} smooth={true} duration={500} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                onClick={() => setNav(false)} // Close menu on link click
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
