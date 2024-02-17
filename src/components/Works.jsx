import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useEffect } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [expanded, setExpanded] = useState(false); // Set initial state to false

  // Use useEffect to set expanded state based on screen width
  useEffect(() => {
    const handleResize = () => {
      setExpanded(window.innerWidth <= 768);
    };
    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize); // Listen for screen size changes
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] max-sm:hidden">{!expanded ? description : description.substring(0, 80).trim()}</p>
          <button className="md:hidden max-sm:hidden" onClick={() => setExpanded(!expanded)}>{!expanded ? 'Read Less' : 'Read More'}</button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore a collection of real-world projects that reflect my passion
          for front-end development. Each project is a testament to my ability
          to blend creativity with functionality, resulting in engaging and
          user-friendly applications.
          <br />
          <br />
          {/* From revamping real estate platforms with cross-browser compatible interfaces to implementing blockchain-powered solutions, my work showcases the practical impact of web development in various domains. These projects not only demonstrate my technical prowess but also highlight my commitment to delivering solutions that bridge the gap between imagination and real-world utility.
       <br /><br /> */}
          Discover how I leverage cutting-edge technologies and design
          principles to craft responsive and visually appealing web and mobile
          applications. Dive into a world where innovation meets usability, and
          let these projects speak to my dedication as a front-end developer.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "Projects");
