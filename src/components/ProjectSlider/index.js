import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { motion } from "framer-motion";

import { IoLogoGithub } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
const ProjectSlider = () => {
  const projects = [
    {
      title: "Book Store",
      description:
        "Developed a web app to store the books and search the books based on their name.",
      techStack: "Next js, Tailwind Css, TypScript",
      backgroundImg: "/img/book-locator.png",
      github: "https://github.com/chandu0077/BookStore",
      link: "https://book-store-indol-one.vercel.app/",
    },
    {
      title: "Food Order",
      backgroundImg: "/img/Food-Order.png",
      description:
        "Builded a Food Ordering web app to view the food items & calculate the prices of foods added to cart.",
      techStack: "Next js, Tailwind Css, JavaScript",
      github: "https://github.com/chandu0077/Food-Order",
      link: "https://food-order-ecru-seven.vercel.app/",
    },
    {
      title: "HotStar-Clone",
      backgroundImg: "./img/hotstar.png",
      description:
        "Developed a Stream web app to stream the videos based on the user interest.",
      techStack: "React js, Tailwind Css, JavaScript",
      github: "https://github.com/chandu0077/next-clonedhotstar",
      link: "https://chandu0077.github.io/Hotstar-Clone/",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    nextArrow: <br />,
    prevArrow: <br />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full max-w-6xl mx-auto p-6 bg-black  text-white rounded-lg shadow-lg mt-9"
    >
      <Slider {...settings}>
        {/* Slide 1 with Background Image and Text Overlay */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center  text-center h-96 "
          >
            {/* Overlay with semi-transparent background */}
            <div
              className="relative flex flex-col items-center rounded-t-2xl justify-center w-full h-full bg-cover bg-center bg-opacity-5 bg-slate-300 p-6"
              style={{
                backgroundImage: `url(${project.backgroundImg})`, // Path relative to public folder
              }}
            >
              <div className="absolute inset-0  bg-black bg-opacity-25 flex flex-col items-center justify-center p-6">
                <div className="bottom-8 absolute">
                  <h1 className="text-xl lg:text-3xl font-semibold text-white font-itim">
                    {project.title}
                  </h1>
                  <p className="text-sm lg:text-lg mt-2 break-all text-white font-itim">
                    {project.description}
                  </p>
                  <p className="text-sm lg:text-lg mt-2 text-[#6cf301] font-itim">
                    {project.techStack}
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <a href={project.github} target="_blank">
                      <IoLogoGithub size={28} cursor={"pointer"} />
                    </a>
                    <a href={project.link} target="_blank">
                      <LuUpload size={28} cursor={"pointer"} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white absolute top-1/2 right-[-21px] transform -translate-y-1/2`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {/* <FaArrowRight size={24} color="white" /> */}
      <MdKeyboardArrowRight size={34} color="white" />
    </div>
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white absolute top-1/2 left-[-21px] transform -translate-y-1/2`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {/* <FaArrowLeft size={24} color="white" /> */}
      <MdOutlineKeyboardArrowLeft size={34} color="white" />
    </div>
  );
}
export default ProjectSlider;
