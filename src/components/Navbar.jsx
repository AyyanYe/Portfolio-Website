import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith('/blog')) setActive('Blog');
    else setActive('');
  }, [location.pathname]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Ayyan Ahmed &nbsp;
            <span className='sm:block hidden'>| Full Stack Developer</span>
          </p>
        </Link>
        <ul className='list-non hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.path ? (
                <Link to={link.path} onClick={() => window.scrollTo(0, 0)}>{link.title}</Link>
              ) : location.pathname === '/' ? (
                <a href={'#' + link.id}>{link.title}</a>
              ) : (
                <Link to={`/#${link.id}`} onClick={() => window.scrollTo(0, 0)}>{link.title}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-position'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[144p] z-10 rounded-xl`}>
            <ul className='list-non flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {link.path ? (
                    <Link to={link.path} onClick={() => window.scrollTo(0, 0)}>{link.title}</Link>
                  ) : location.pathname === '/' ? (
                    <a href={'#' + link.id}>{link.title}</a>
                  ) : (
                    <Link to={`/#${link.id}`} onClick={() => window.scrollTo(0, 0)}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar