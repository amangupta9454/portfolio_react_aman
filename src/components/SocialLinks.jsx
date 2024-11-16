import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";

const SocialLinks = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedinIn size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/amangupta9454/",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/amangupta9454/",
        },
        {
            id: 3,
            child: (
              <>
                Instagram <FaSquareInstagram  size={30} />
              </>
            ),
            href: "https://www.instagram.com/gupta_aman_9161/",
          },
        {
            id: 4,
            child: (
              <>
                Whatsapp <FaWhatsapp  size={30} />
              </>
            ),
            href: "https://wa.me/9560472926",
          },
        {
          id: 5,
          child: (
            <>
              Mail <CgMail size={30}/>  
            </>
          ),
          href: "mailto:ag0567688@gmail.com",
        },
        {
          id: 6,
          child: (
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: "resume.pdf",
          style: "rounded-br-md",
          download: true,
        },
      ];
    
      return (
        <div className=" hidden lg:flex flex-col top-[25%] left-0  fixed">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default SocialLinks;
