import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import './about.css'
import { text } from "../../data/aboutData";
import ME from '../../assets/me.png';
import AnimatedTextWord from '../shared/AnimatedTextWord';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

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

            <div className='about__text'>
              <AnimatedTextWord text={text} />
            </div>

            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>10+ Years Working</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Developer</h5>
                <small>3+ Years</small>
              </article>
              {/* <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Product Manager</h5>
                <small>5+ Years</small>
              </article> */}

            </div>

          </div>
        </div>
      </section>
    </motion.div>


  )

}

export default About;