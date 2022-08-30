import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'

import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0xo06ug', 'template_09dtta3', form.current, 'NoJaGvQ6q5hYHppph')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section id='contact'>
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact__container'>
          <div className='contact__options'>

            <motion.article
              transition={{
                ease: "easeInOut",
                duration: 0.1
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='contact__option'
            >
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>lcarpignano@gmail.com</h5>
              <a href='mailto:lcarpignano@gmail.com' target='_blank' rel='noreferrer' >Send an Email</a>
            </motion.article>

            <motion.article
              transition={{
                ease: "easeInOut",
                duration: 0.1
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='contact__option'
            >
              <RiMessengerLine className='contact__option-icon' />
              <h4>Linkedin Messenger</h4>
              <h5>lcarpignano</h5>
              <a href='https://www.linkedin.com/in/luciano-carpignano-74767970' target='_blank' rel='noreferrer'>Send a Message</a>
            </motion.article>

            <motion.article
              transition={{
                ease: "easeInOut",
                duration: 0.1
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='contact__option'
            >
              <BsWhatsapp className='contact__option-icon' />
              <h4>Whatsapp</h4>
              <h5>lcarpignano@gmail.com</h5>
              <a href='https://api.whatsapp.com/send?phone=5491133022514' target='_blank' rel='noreferrer'>Send a Message</a>
            </motion.article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message...' required />
            <motion.a
              transition={{
                ease: "easeInOut",
                duration: 0.1
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type='submit' className='btn btn-primary'
            >
              Send Message
            </motion.a>
          </form>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact;