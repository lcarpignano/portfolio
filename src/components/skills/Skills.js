import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { frontEndData, backendData } from '../../data/skillsData'
import './skills.css'
import SkillsItem from './SkillItem'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >

      <section id='skills'>
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>
        <div className='container skills__container'>
          <div className='skills__frontend'>
            <h3>Frontend Development</h3>
            <div className='skills__content'>
              {frontEndData?.map(({ id, title, description }) => (
                <SkillsItem key={id} title={title} description={description} />
              ))}
            </div>
          </div>
          <div className='skills__backend'>
            <h3>Backend Development</h3>
            <div className='skills__content'>
              {backendData?.map(({ id, title, description }) => (
                <SkillsItem key={id} title={title} description={description} />
              ))}
            </div>
          </div>
        </div>

      </section>
    </motion.div>
  )
}

export default Skills;