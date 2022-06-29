import { useRef } from 'react';
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
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lcarpignano@gmail.com</h5>
            <a href='mailto:lcarpignano@gmail.com' target='_blank' rel='noreferrer' >Send an Email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Linkedin Messenger</h4>
            <h5>lcarpignano</h5>
            <a href='https://linkedin.com'  target='_blank' rel='noreferrer'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>lcarpignano@gmail.com</h5>
            <a href='https"//api.whatsapp.com/send?phone=+5491133022514'  target='_blank' rel='noreferrer'>Send a Message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>

          <input type='text' name='name' placeholder='Your full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message...' required />
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;