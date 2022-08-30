import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs'


//TODO: replace links for real ones

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
        href="https://github.com/lcarpignano"
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
        href="https://www.linkedin.com/in/luciano-carpignano-74767970"
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
        href='https://api.whatsapp.com/send?phone=5491133022514'
        rel='noreferrer'
        target="_blank">
        <BsWhatsapp />
      </motion.a>
    </div>
  )
}

export default HeaderSocial;