import ProjectSlider from "../ProjectSlider";
import { FaFolder } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [
    {
      title: "Book Store",
      description:
        "Developed a web app to store the books and search the books based on their name.",
      techStack: "Next js, Tailwind Css, TypScript",
      github: "https://github.com/chandu0077/BookStore",
      link: "https://book-store-indol-one.vercel.app/",
    },
    {
      title: "Food Order",
      description:
        "Builded a Food Ordering web app to view the food items & calculate the prices of foods added to cart.",
      techStack: "Next js, Tailwind Css, JavaScript",
      github: "https://github.com/chandu0077/Food-Order",
      link: "https://food-order-ecru-seven.vercel.app/",
    },
    {
      title: "HotStar-Clone",
      description:
        "Developed a Stream web app to stream the videos based on the user interest.",
      techStack: "React js, Tailwind Css, JavaScript",
      github: "https://github.com/chandu0077/next-clonedhotstar",
      link: "https://chandu0077.github.io/Hotstar-Clone/",
    },
    {
      title: "Online Shop Store",
      description:
        "An E-commerce shopping cart which will be helpful for the users to view shoppingi items with detailed price.",
      techStack: "React Js, Tailwind Css, JavaScript",
      github: "https://github.com/chandu0077/flow-launch",
      link: "https://flow-launch-blue.vercel.app/",
    },
    {
      title: "Joke-Teller",
      description:
        "A Joke Teller web app which will voice over the jokes with a button click.",
      techStack: "Html, Css, JavaScript",
      github: "https://github.com/chandu0077/Joke-Teller",
      link: "https://chandu0077.github.io/Joke-Teller/",
    },
    {
      title: "Quote Generator",
      description:
        "Developed a Web App to generate randomn quotes which can share with user twitter account.",
      techStack: "Html, Css, BootStrap, JavaScript",
      github: "https://github.com/chandu0077/quote-generator",
      link: "https://chandu0077.github.io/quote-generator/",
    },
    {
      title: "Whatsapp",
      description:
        "A Web UI which is look a like whatsapp web UI. It contains groups, personal chat and phone calls.",
      techStack: "Html, BootStrap",
      github: "https://github.com/chandu0077/whatsapp",
      link: "https://chandu0077.github.io/whatsapp/",
    },
  ];

  return (
    <div className="p-8 mt-10" id="projects">
      <div className="flex">
        <p className="text-white text-5xl">/projects</p>
      </div>
      <ProjectSlider />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap justify-between gap-6 mt-9"
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-[360px] flex flex-col h-auto bg-gray-900 rounded-xl p-8"
          >
            <div className="flex w-full justify-between items-center">
              <FaFolder size={25} color="#6cf301" />
              <div className="flex cursor-pointer gap-4">
                <a href={project.github} target="_blank">
                  <IoLogoGithub size={25} color="white" />
                </a>
                <a href={project.link} target="_blank">
                  <LuUpload size={25} color="white" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-5 mt-9">
              <p className="text-white text-2xl font-itim">{project.title}</p>
              <p className="text-white text-lg font-Raleway">
                {project.description}
              </p>
              <p className="text-white text-md font-Raleway">
                {project.techStack}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default Projects;
