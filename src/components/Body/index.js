import Intro from "../Intro";
import About from "../About";
import Experience from "../Experience";
import Projects from "../Projects";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div className="w-full lg:max-w-[1240px] mx-auto h-auto bg-black">
      <div className="w-full h-auto  flex justify-center items-center mb-4">
        <img src="img/tree.gif" className="w-[200px] h-[200px]" alt="tree" />
      </div>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <motion.div
        className="flex flex-col justify-center items-center w-full h-auto "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-white text-lg text-center">
          Buit by - <span className="text-[#6cf301]"> chandu</span>
        </p>
        <p className="text-white text-lg text-center">All rights reserved @</p>
      </motion.div>
    </div>
  );
};
export default Body;
