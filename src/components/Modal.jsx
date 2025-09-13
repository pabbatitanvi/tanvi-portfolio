import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function Modal({onClose}){
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitted(true);

    console.log("Form reference:", form.current);

    emailjs
    .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })
      .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }
    
  return(
    <div className="modalBackground" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <Button className="closeButton" onClick={onClose}>
            <IoClose className="closeIcon" />
          </Button>
        </div>
        <div className="contactContent">
          <div className="contactDesc">
            <h1>Get in Contact!</h1>
            <p>Feel free to reach out if you have any questions, or just want to connect. I'm always interested in hearing about new opportunities!</p>
            <div className="contactIcons">
              <span className="icons">
                <a
                    href="https://github.com/pabbatitanvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='links'
                >
                  <IoLogoGithub className="githubIcon"/>
                </a>
                <a
                    href="https://linkedin.com/in/tanvi-pabbati-1303b0223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='links'
                >
                  <IoLogoLinkedin className="linkedinIcon"/>
                </a>
              </span>
            </div>
          </div>
          <div className="contactInfo">
            {!submitted ? (
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter a name" name="user_name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" name="user_email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter a message" name="user_message"/>
                </Form.Group>
                <button type="submit" className="submitButton">
                    Send Message
                </button>
              </Form>
            ):(
              <h1 className="thankyou">Thank you for Submitting!</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal