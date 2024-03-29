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
          <img src={image} alt='portfolio1'></img>
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
          <motion.a
            transition={{
              ease: "easeInOut",
              duration: 0.1
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={github}
            className='btn'
            target='_blank'
            rel='noreferrer'>
            Github
          </motion.a>
          <motion.div
            transition={{
              ease: "easeInOut",
              duration: 0.1
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className='btn btn-primary'
          >
            Demo
          </motion.div>
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
            style={{ position: 'fixed', zIndex: '1' }}
            url='https://www.youtube.com/watch?v=QohH89Eu5iM'
            width='100%'
            height='100%'
            playing={true}
            onEnded={() => setIsOpen(!isOpen)}
          />
        </motion.div>
      )}
    </>
  )
}

export default PortfolioItem;