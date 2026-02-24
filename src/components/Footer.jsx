import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="border-t border-white/10 mt-16">
      <div className={`${styles.padding} max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4`}>
        <p className="text-secondary text-sm text-center sm:text-left">
          Open to working student positions in Germany.
        </p>
        <div className="flex items-center gap-6 text-sm">
          {isHome ? (
            <a href="#contact" className="text-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#915eff] focus:ring-offset-2 focus:ring-offset-primary rounded">
              Contact
            </a>
          ) : (
            <Link to="/#contact" className="text-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#915eff] focus:ring-offset-2 focus:ring-offset-primary rounded" onClick={() => window.scrollTo(0, 0)}>
              Contact
            </Link>
          )}
          <Link to="/blog" className="text-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#915eff] focus:ring-offset-2 focus:ring-offset-primary rounded" onClick={() => window.scrollTo(0, 0)}>
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
