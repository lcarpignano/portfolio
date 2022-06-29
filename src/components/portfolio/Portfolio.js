import PortfolioItem from './PortfolioItem';
import { portfolioData } from '../../config/portfolioData';
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {portfolioData?.map(({ id, image, title, github, demo }) => (
            <PortfolioItem key={id} image={image} title={title} github={github} demo={demo} />
        ))}
      </div >
    </section >
  )
}

export default Portfolio;