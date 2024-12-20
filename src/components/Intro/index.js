import TypingEffect from "../TypingEffect";
import { ReactTyped } from "react-typed";
import { WiDirectionUpRight } from "react-icons/wi";
import { CgMail } from "react-icons/cg";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <div>
      <div id="#intro" className="flex items-center text-center justify-center">
        <p className="text-[#dfddd8] font-itim text-xl lg:text-8xl">
          hi,<span>"</span>
        </p>
        <div className="text-white font-itim text-xl lg:text-8xl ">
          <TypingEffect text="sai chandu" speed={100} />
        </div>
        <p className="text-[#dfddd8] font-itim text-xl lg:text-8xl">
          <span>"</span> here.
        </p>
      </div>
      <div className="animated-typing mt-4 text-center">
        <ReactTyped
          className="text-white text-lg lg:text-3xl  font-itim"
          strings={[
            "I'm a Full Stack Developer",
            "Part time cricketer!!!",
            "I Love Software Development",
            "Unpaid Therapist(for friends)",
          ]}
          typeSpeed={50}
          backSpeed={25}
          loop
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[#dfddd8] text-[12px] text-center lg:text-xl text-indent-10 leading-9 font-Montserrat max-w-[690px]"
        >
          Aspiring software engineer fresher with hands-on experience in
          full-stack development. Passionate about solving real- world problems
          through innovative technology solutions.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col lg:flex lg:flex-row justify-center gap-[36px] w-full items-center mt-8"
      >
        <a href="mailto:chandu.dsc77@gmail.com" className="text-xl">
          <div className="p-2 lg:p-6  border-[#6cf301] text-[#6cf301] border-2 rounded-md">
            <div className="flex justify-center gap-2 items-center">
              <CgMail size={"22px"} />
              say hi
            </div>
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/1tqZEQepcI5SjcKH9Qxef61blkxZTb0HZ/view?usp=sharing"
          target="_blank"
          className="text-xl"
        >
          <div className="p-2 lg:p-6 border-[#6cf301]  text-[#6cf301] border-2 rounded-md">
            <div className="flex justify-center gap-2 items-center">
              <WiDirectionUpRight size={"25px"} />
              Resume
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};
export default Intro;
