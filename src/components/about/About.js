import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import ME from '../../assets/me.png';
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Product Manager</h5>
              <small>5+ Years</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Developer</h5>
              <small>2+ Years</small>
            </article>
          </div>

          <p>
            I am a professional with a strong logical and analytical profile,
            with a huge passion for technology and development. I am currently
            looking for new challenges in which I can both contribute and keep
            learning. I am a cordial, respectful and responsible person,
            with a strong feeling for teamwork and commitment.
          </p>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='#contact'
            className='btn btn-primary'>
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>

  )

}

export default About;