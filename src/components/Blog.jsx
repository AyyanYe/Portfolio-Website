import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { styles } from "../styles";
import { blogPosts } from "../data/blog";
import { fadeIn, textVariant } from "../utils/motion";
import { usePageMeta } from "../hooks/usePageMeta";

const Blog = () => {
  usePageMeta("Blog", "Weekly thoughts on tech, blockchain, and building on the web. Ayyan Ahmed – Full Stack Developer. Open to working student roles in Germany.");
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-24`}>
        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <p className={styles.sectionSubText}>Writing</p>
          <h1 className={styles.sectionHeadText}>Blog.</h1>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
        >
          Weekly thoughts on tech, blockchain, and building on the web.
        </motion.p>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              initial="hidden"
              animate="show"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block bg-tertiary rounded-2xl p-6 border border-white/5 hover:border-[#915eff]/30 hover:shadow-lg hover:shadow-[#915eff]/10 transition-all duration-300 group"
              >
                <time className="text-[#915eff] text-sm font-medium uppercase tracking-wider">
                  {post.date}
                </time>
                <h2 className="mt-2 text-white font-bold text-xl group-hover:text-[#915eff] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-secondary text-[15px] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-[#915eff] text-sm font-medium group-hover:underline">
                  Read more →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <p className="mt-12 text-secondary">No posts yet. Check back soon.</p>
        )}
      </section>
    </div>
  );
};

export default Blog;
