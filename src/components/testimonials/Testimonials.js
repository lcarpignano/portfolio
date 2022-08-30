import { Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './testimonial.css';
import { testimonialsData } from '../../config/testimonialsData';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
      className='container testimonial__container'
      spaceBetween={40}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      >
        {
          testimonialsData?.map(({ id, image, name, review }) => {
            return (

              <SwiperSlide className='testimonial' key={id}>
                <div className='client__avatar'>
                  <img src={image} alt='avatar' />
                </div>
                <h5>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>

            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;