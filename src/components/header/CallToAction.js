import { motion } from 'framer-motion';

import CV from '../../assets/CV Luciano.pdf'

//TODO sould I use drive links?

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
      <motion.a
        transition={{
          ease: "easeInOut",
          duration: 0.1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="#contact"
        className="btn btn-primary">
        Contact me
      </motion.a>
    </motion.div>
  )
}

export default CallToAction;