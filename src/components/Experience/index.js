import { motion } from "framer-motion";
const Experience = () => {
  return (
    <motion.div
      id="experience"
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
        <p className="text-white text-2xl lg:text-5xl">/experience</p>
      </div>
      <div className="flex flex-col   lg:flex lg:flex-row justify-between lg:items-start mt-4 lg:mt-9">
        <p className="text-white text-xl lg:text-2xl font-itim">Shopvana</p>
        <div className="max-w-[600px]">
          <p className="text-white text-xl lg:text-2xl font-itim">
            Frontend Developer @{" "}
            <span className="text-[#6cf301]">Shopvana</span>
          </p>
          <p className="text-white text-lg lg:text-xl font-Montserrat">
            JUN 2024 - SEP 2024
          </p>
          <ul className="list-disc list-inside space-y-2 text-white mt-6 font-Montserrat leading-4 lg:leading-6">
            <li className="leading-9">
              Involved in creating mini web apps with next.js on frontend.
            </li>
            <li className="leading-9">
              Improved SEO performance of marketing website by 70%.
            </li>
            <li className="leading-9">
              Improved SEO for many websites by following industrial standard
              methods increasing site visits upto 75%.
            </li>
            <li className="leading-9">
              Implemented Responsive UI supporting cross-browser compatibility.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col   lg:flex lg:flex-row justify-between lg:items-start mt-4 lg:mt-9">
        <p className="text-white text-xl lg:text-2xl font-itim">Xinterview</p>
        <div>
          <p className="text-white text-xl lg:text-2xl font-itim">
            Frontend Intern @ <span className="text-[#6cf301]">Xinterview</span>
          </p>
          <p className="text-white text-lg lg:text-xl font-Montserrat">
            DEC 2023 - MAY 2024
          </p>
          <ul className="list-disc list-inside space-y-2 text-white mt-6 font-Montserrat leading-4 lg:leading-6">
            <li className="leading-9">
              Created pixel perfect UI from figma following best industry
              practises.
            </li>
            <li className="leading-9">
              Worked on landing pages, integrating REST APIs from backend.
            </li>
            <li className="leading-9">
              Created python scripts in scraping websites with selenium.
            </li>
            <li className="leading-9">
              Rebuilt the marketing website with react, overwriting 25+
              components.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
