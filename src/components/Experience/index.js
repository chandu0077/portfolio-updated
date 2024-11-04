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
      <div className="flex flex-col  lg:flex lg:flex-row justify-between lg:items-start mt-4 lg:mt-9">
        <p className="text-white text-xl lg:text-2xl font-itim">FreeLancing</p>
        <div>
          <p className="text-white text-xl lg:text-2xl font-itim">
            Frontend Developer @{" "}
            <span className="text-[#6cf301]">Freelancing Client</span>
          </p>
          <p className="text-white text-lg lg:text-xl font-Montserrat">
            AuG 2023 - JUL 2024
          </p>
          <ul className="list-disc list-inside space-y-2 text-white mt-6 font-Montserrat leading-4 lg:leading-6">
            <li className="leading-9">
              Worked on landing pages for many clients using Next JS, TypeScript
              & Tailwind CSS.
            </li>
            <li className="leading-9">
              Developed Python Scripts to scrape 3000+ Jobs a day from various
              job portals.
            </li>
            <li className="leading-9">
              Improved SEO for many websites by following industrial standard
              methods increasing site visits upto 75%.
            </li>
            <li className="leading-9">
              Create 5+ mock projects in estimating the efforts & viability of
              the features for various clients.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
