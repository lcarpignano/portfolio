import { frontEndData, backendData } from '../../config/experienceData'
import './experience.css'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {frontEndData?.map(({ id, title, description }) => (
              <ExperienceItem key={id} title={title} description={description} />
            ))}
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {backendData?.map(({ id, title, description }) => (
              <ExperienceItem key={id} title={title} description={description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;