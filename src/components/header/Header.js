import { motion } from 'framer-motion';

import './header.css'
import HeaderSocial from './HeaderSocial';
import CallToAction from './CallToAction';
import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container' >
        <h5>Hello I'm</h5>
        <h1>Luciano</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
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
        <a
          href='#contact'
          className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header;