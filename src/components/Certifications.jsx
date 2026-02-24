import { motion } from "framer-motion";
import { styles } from "../styles";
import { certifications } from "../data/certifications";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Industry-recognized certifications in development, GraphQL, and professional skills.
      </motion.p>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.url}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-tertiary rounded-2xl p-6 w-[200px] min-h-[180px] flex flex-col justify-center items-center text-center border border-white/5 hover:border-[#915eff]/30 hover:shadow-lg hover:shadow-[#915eff]/10 transition-all duration-300"
          >
            <span className="text-[#915eff] text-sm font-medium uppercase tracking-wider">
              {cert.issuer}
            </span>
            <span className="mt-2 text-white font-bold text-sm leading-tight">
              {cert.title}
            </span>
            <span className="mt-2 text-secondary text-xs">View certificate →</span>
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
