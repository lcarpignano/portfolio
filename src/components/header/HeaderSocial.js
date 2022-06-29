import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

//TODO update links to correct ones

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <motion.a
        transition={{
          ease: "easeInOut",
          duration: 0.1
        }}
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 1.2 }}
        href="https://linkedin.com"
        target="_blank">
        <BsLinkedin />
      </motion.a>
      <motion.a
        transition={{
          ease: "easeInOut",
          duration: 0.1
        }}
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 1.2 }}
        href="https://github.com"
        target="_blank">
        <FaGithub />
      </motion.a>
      <motion.a
        transition={{
          ease: "easeInOut",
          duration: 0.1
        }}
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 1.2 }}
        href="https://dribble.com"
        target="_blank">
        <FiDribbble />
      </motion.a>
    </div>
  )
}

export default HeaderSocial;