import { motion } from "framer-motion";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';


import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Luciano Carpignano</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <motion.a
          transition={{
            ease: "easeInOut",
            duration: 0.1
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          href='https://facebook.com'><FaGithub />
        </motion.a>

        <motion.a
          transition={{
            ease: "easeInOut",
            duration: 0.1
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          href='https://twitter.com'><BsLinkedin />
        </motion.a>

        <motion.a
          transition={{
            ease: "easeInOut",
            duration: 0.1
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          href='https://instagram.com'><FiInstagram />
        </motion.a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Luciano Carpignano. all rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;