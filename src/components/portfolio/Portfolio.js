import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import PortfolioItem from './PortfolioItem';
import { portfolioData } from '../../data/portfolioData';
import 'swiper/css/pagination';
import 'swiper/css';
import './portfolio.css'

const Portfolio = () => {
  const portfolioArr = portfolioData?.map(({ id, image, title, github, demo }) =>
    <PortfolioItem id={id} image={image} title={title} github={github} demo={demo} />
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        {/* TODO: add a CTA after demo is played, or a higlight in the round cta */}
        {/* TODO: take react player outside swiper container */}
        <div>
          <Swiper
            className='mySwiper portfolio__container'
            spaceBetween={60}
            slidesPerView={3}
            loop={true}
            modules={[Pagination, Mousewheel]}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
          >
            {portfolioArr?.map((portfolio) => (
              <SwiperSlide key={portfolio.id} className='swiper-wrapper'>
                {portfolio}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </motion.div>
  )
}

export default Portfolio;