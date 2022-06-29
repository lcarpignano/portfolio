import { motion } from 'framer-motion';
import { useState } from 'react';
import { RiServiceLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <motion.a
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        transition={{ ease: "easeInOut", duration: 0.1 }}
        href='#header'
        onClick={() => setActiveNav("#header")}
        className={activeNav === '#header' ? 'active' : ''}
      >
        <AiOutlineHome />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        transition={{ ease: "easeInOut", duration: 0.1 }} href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        transition={{ ease: "easeInOut", duration: 0.1 }} href='#experience'
        onClick={() => setActiveNav("#experience")}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        transition={{ ease: "easeInOut", duration: 0.1 }} href='#portfolio'
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiServiceLine />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        transition={{ ease: "easeInOut", duration: 0.1 }} href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </motion.a>
    </nav>
  )
}

export default Nav;