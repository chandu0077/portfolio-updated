import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.5 },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="p-8 mt-10"
    >
      <div className="flex">
        <p className="text-white text-2xl lg:text-5xl">/about me</p>
      </div>
      <div className="flex flex-col items-center lg:flex lg:flex-row justify-between  lg:items-start w-full h-auto mt-8">
        <div className="w-[65%] h-auto">
          <p className="text-white text-center lg:text-start leading-9 text-sm lg:text-xl font-Montserrat">
            I am currently looking for Full Stack Developer / Front End Engineer
            role either as an{" "}
            <span className="text-[#6cf301]">
              Inter / Full-Time opportunites
            </span>
            . I have completed my Bachelor of Technology in Computer Sciences at{" "}
            <span className="text-[#6cf301]">ALIET</span>.
          </p>
          <p className="text-white text-center lg:text-start text-sm lg:text-xl mt-4 font-Montserrat">
            Here are some of the Technologies I have been working with:
          </p>
          <div className="flex justify-start items-center mt-6  bg-black">
            <div className="grid grid-cols-2 gap-8 text-white text-sm lg:text-lg">
              <div>
                <ul className="space-y-4 font-Montserrat">
                  <li className="list-item lg:list-disc list-inside">
                    Next.js
                  </li>
                  <li className="list-item lg:list-disc list-inside">
                    React.js
                  </li>
                  <li className="list-item lg:list-disc list-inside">
                    Javascript
                  </li>
                  <li className="list-item lg:list-disc list-inside">Python</li>
                  <li className="list-item lg:list-disc list-inside">
                    HTML/CSS
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 font-Montserrat">
                  <li className="list-item lg:list-disc list-inside">
                    Tailwind CSS
                  </li>
                  <li className="list-item lg:list-disc list-inside">
                    Node.js
                  </li>
                  <li className="list-item lg:list-disc list-inside">
                    Express.js
                  </li>
                  <li className="list-item lg:list-disc list-inside">SQL</li>
                  <li className="list-item lg:list-disc list-inside">
                    MongoDB/PostgreSQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          src="img/profile-image.JPG"
          alt="profile"
          className="h-[400px] hidden lg:block w-[25%]"
        />
      </div>
    </motion.div>
  );
};
export default About;
