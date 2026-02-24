import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "./Navbar";
import { styles } from "../styles";
import { blogPosts } from "../data/blog";

const LINKEDIN_SHARE = "https://www.linkedin.com/sharing/share-offsite/?url=";

const BlogPost = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const post = blogPosts.find((p) => p.slug === slug);
  const postUrl = typeof window !== "undefined" ? window.location.href : "";
  usePageMeta(post?.title, post?.excerpt ?? undefined, postUrl || undefined);

  useEffect(() => {
    if (post && typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [post]);

  const handleCopyLink = () => {
    if (!postUrl) return;
    navigator.clipboard.writeText(postUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleLinkedInShare = () => {
    if (!postUrl) return;
    window.open(LINKEDIN_SHARE + encodeURIComponent(postUrl), "_blank", "noopener,noreferrer,width=600,height=600");
  };

  if (!post) {
    return (
      <div className="relative z-0 bg-primary min-h-screen">
        <Navbar />
        <section className={`${styles.padding} max-w-7xl mx-auto pt-24`}>
          <p className="text-secondary">Post not found.</p>
          <Link to="/blog" className="mt-4 inline-block text-[#915eff] hover:underline">
            ← Back to Blog
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-24 pb-20`}>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-secondary hover:text-white text-sm mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <time className="text-[#915eff] text-sm font-medium uppercase tracking-wider">
            {post.date}
          </time>
          <h1 className="mt-2 text-white font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            {post.title}
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <span className="text-secondary text-sm">Share</span>
          <button
            type="button"
            onClick={handleLinkedInShare}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-tertiary border border-white/10 hover:border-[#915eff]/50 hover:bg-[#915eff]/10 text-white text-sm font-medium transition-all"
          >
            <LinkedInIcon />
            LinkedIn
          </button>
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-tertiary border border-white/10 hover:border-[#915eff]/50 hover:bg-[#915eff]/10 text-white text-sm font-medium transition-all"
          >
            {copied ? (
              "Copied!"
            ) : (
              <>
                <LinkIcon />
                Copy link
              </>
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="blog-content mt-12 max-w-3xl prose prose-invert prose-lg"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content.trim()}</ReactMarkdown>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#915eff] hover:underline font-medium"
          >
            ← All posts
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

export default BlogPost;
