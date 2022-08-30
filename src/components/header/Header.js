import { motion } from 'framer-motion';

import './header.css'
import HeaderSocial from './HeaderSocial';
import CallToAction from './CallToAction';
import ME from '../../assets/me.png';
import AnimatedTextChar from '../shared/AnimatedTextChar';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header id='header'>
        <div className='container header__container' >
          <h1>
            <AnimatedTextChar text='Luciano Carpignano' />
          </h1>
          <h2 className='text-light'>
            <AnimatedTextChar text='Fullstack Web Developer' />
          </h2>
          <CallToAction />
          <HeaderSocial />
          <div className='me'>
            <motion.img
              whileInView={{
                scale: [0.2, 0.5, 0.8, 1.2, 1],
                rotate: [-360, 360, -360, 360, -360],
                opacity: [0.2, 0.4, 0.6, 0.8, 1],
              }}
              transition={{
                ease: "easeInOut",
                duration: 1
              }}
              src={ME}
              alt='me'
            />
          </div>
          {/* TODO: rethink this one */}
          {/* <a
            href='#about'
            className='scroll__down'>
            About Me
          </a> */}
        </div>
      </header>
    </motion.div>
  )
}

export default Header;