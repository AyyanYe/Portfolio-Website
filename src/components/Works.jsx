import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
       Explore a collection of real-world projects that reflect my passion for front-end development. Each project is a testament to my ability to blend creativity with functionality, resulting in engaging and user-friendly applications.
       <br /><br />
       {/* From revamping real estate platforms with cross-browser compatible interfaces to implementing blockchain-powered solutions, my work showcases the practical impact of web development in various domains. These projects not only demonstrate my technical prowess but also highlight my commitment to delivering solutions that bridge the gap between imagination and real-world utility.
       <br /><br /> */}
       Discover how I leverage cutting-edge technologies and design principles to craft responsive and visually appealing web and mobile applications. Dive into a world where innovation meets usability, and let these projects speak to my dedication as a front-end developer. 
      </motion.p>
    </div>
    </>
  )
}

export default SectionWrapper(Works, "");