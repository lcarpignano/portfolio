import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { MdLaptopMac } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri'

import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")

  return (
    <>
      <nav>
        <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
          href='#header'
          onClick={() => {
            setActiveNav("#header")
          }}
          className={activeNav === '#header' ? 'active' : ''}
        >
          <Link to='/'>
            <AiOutlineHome />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut", duration: 0.1 }} href='#about'
          onClick={() => {
            setActiveNav("#about")
          }}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <Link to='about'>
            <AiOutlineUser />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut", duration: 0.1 }} href='#skills'
          onClick={() => {
            setActiveNav("#skills")
          }}
          className={activeNav === '#skills' ? 'active' : ''}
        >
          <Link to='/skills'>
            <MdLaptopMac />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut", duration: 0.1 }} href='#portfolio'
          onClick={() => {
            setActiveNav("#portfolio")
          }}
          className={activeNav === '#portfolio' ? 'active' : ''}
        >
          <Link to='/portfolio'>
            <RiSuitcaseLine />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut", duration: 0.1 }} 
          onClick={() => {
            setActiveNav("#contact")
          }}
          href='#contact'
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <Link to='/contact'>
            <BiMessageSquareDetail />
          </Link>
        </motion.div>
      </nav >
      <div>
        <Link to='/contact'>
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeInOut", duration: 0.4 }} 
            href='#contact'
            className='btn-primary nav__cta'>
            <BiMessageSquareDetail />
          </motion.div>
        </Link>
      </div>
    </>
  )
}

export default Nav;