import { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

import './portfolio.css'

const PortfolioItem = ({ id, image, title, github, demo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className='portfolio__items' key={id}>
        <div className='portfolio__item-image'>
          {/* TODO: replace img for adependency component */}
          <img src={image} alt='portfolio1'></img>
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
          <a
            href={github}
            className='btn'
            target='_blank'
            rel='noreferrer'>
            Github
          </a>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='btn btn-primary'
          >
            Live Demo
          </div>
        </div>
      </article>

      {isOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(!isOpen)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)' }}
        >
          
          <ReactPlayer
            style={{ position: 'fixed', top: '15vh', left: '25vw', zIndex: '1' }}
            url='https://www.youtube.com/watch?v=QohH89Eu5iM'
            width='50%'
            height='50%'
            playing={true}
            onEnded={() => setIsOpen(!isOpen)}
          />
        </motion.div>
      )}
    </>
  )
}

export default PortfolioItem;