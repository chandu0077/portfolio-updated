import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex gap-6 bg-black h-auto w-full px-[52px] py-4">
      <p className="text-white font-itim text-xl font-semibold cursor-pointer">
        SC:)
      </p>
      <div className="w-full flex justify-between items-center">
        <div className="hidden lg:flex gap-6 cursor-pointer">
          <a
            href="#intro"
            className="text-white hover:text-[#6cf301] font-itim text-xl font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white font-itim text-xl hover:text-[#6cf301] font-semibold"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-white font-itim text-xl hover:text-[#6cf301] font-semibold"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-white font-itim text-xl hover:text-[#6cf301] font-semibold"
          >
            Projects
          </a>
        </div>
        <div className="flex gap-6">
          <a
            href="mailto:chandu.dsc77@gmail.com"
            className="text-white text-xl  hover:text-[#6cf301] font-semibold"
          >
            <CgMail size={"25px"} />
          </a>
          <a
            href="https://github.com/chandu0077"
            target="_blank"
            className="text-white text-xl hover:text-[#6cf301] font-semibold"
          >
            <FaGithub size={"25px"} />
          </a>
          <a
            href="https://www.linkedin.com/in/chandu-d-385086236/"
            target="_blank"
            className="text-white text-xl hover:text-[#6cf301] font-semibold"
          >
            <SiLinkedin size={"25px"} />
          </a>
          <a
            href="https://x.com/Chandudsc0077"
            target="_blank"
            className="text-white text-xl hover:text-[#6cf301] font-semibold"
          >
            <FaXTwitter size={"25px"} />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
