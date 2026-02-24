import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReadmeModal from "./ReadmeModal";

const TRUNCATE_LEN = 100;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_url,
  onViewReadme,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setExpanded(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const showTruncated = !expanded && description.length > TRUNCATE_LEN;
  const displayDesc = showTruncated
    ? `${description.substring(0, TRUNCATE_LEN).trim()}…`
    : description;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
        disabled={isMobile}
      >
        <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-black/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-end items-end gap-2 m-3">
            <button
              type="button"
              onClick={() => onViewReadme?.()}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shrink-0 text-white text-xs font-medium"
              title="View README"
            >
              Docs
            </button>
            {demo_url && (
              <a
                href={demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center shrink-0 text-white text-xs font-medium"
                title="Live demo"
                aria-label="Open live demo"
              >
                Live
              </a>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shrink-0"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && window.open(source_code_link, "_blank")}
              aria-label="Open source code"
            >
              <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[20px] leading-tight">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed break-words">
            {displayDesc}
          </p>
          {description.length > TRUNCATE_LEN && (
            <button
              type="button"
              className="mt-1 text-[14px] text-[#915eff] hover:underline md:hidden"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired, color: PropTypes.string })
  ).isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  source_code_link: PropTypes.string.isRequired,
  demo_url: PropTypes.string,
  onViewReadme: PropTypes.func,
};

const Works = () => {
  const [readmeProject, setReadmeProject] = useState(null);

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
          Discover how I leverage cutting-edge technologies and design
          principles to craft responsive and visually appealing web and mobile
          applications. Dive into a world where innovation meets usability, and
          let these projects speak to my dedication as a front-end developer.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onViewReadme={() => setReadmeProject(project)}
          />
        ))}
      </div>

      <ReadmeModal
        isOpen={!!readmeProject}
        onClose={() => setReadmeProject(null)}
        project={readmeProject}
      />
    </>
  );
};

export default SectionWrapper(Works, "Projects");
