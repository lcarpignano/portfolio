import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import CV from '../../assets/CV Luciano.pdf'

//TODO: sould I use drive links?

const CallToAction = () => {
  return (
    <motion.div
      className="cta"
    >
      <motion.a
        transition={{
          ease: "easeInOut",
          duration: 0.1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={CV}
        download
        className="btn">
        Download CV
      </motion.a>
      <Link to='/contact'>
        <motion.div
          transition={{
            ease: "easeInOut",
            duration: 0.1
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#contact"
          className="btn btn-primary">
          Contact me
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default CallToAction;