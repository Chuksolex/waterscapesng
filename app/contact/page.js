"use client"

import React, { useState } from "react";
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './contact.module.css'; // Use CSS module for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const submit = async () => {
    try {
      const result = await emailjs.send(serviceId, templateId, {
        name,
        email,
        phone,
        message
      }, publicKey);
      console.log(result.text);
      setEmailSent(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.log(error.text);
      setEmailError('An error occurred while sending the email. Please try again.');
    }
  };

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.address}>
        <h1>Contact Us</h1>
        <div>
          <h2>Office Address and Contact Details:</h2>
          <p><strong>Uyo Office: </strong> 355 Oron road. Uyo. Akwa Ibom State. Nigeria</p>
          <p>
            <strong><i className="bi bi-telephone mx-2 fs-6" style={{ color: "green" }}></i></strong> <a href="tel:08023034062">08023034062</a>
            <strong><i className="bi bi-telephone mx-2 fs-6" style={{ color: "green" }}></i></strong> <a href="tel:08098334062">08098334062</a>
            <strong><i className="bi bi-telephone mx-2 fs-6" style={{ color: "green" }}></i></strong> <a href="tel:08066062611">08066062611</a>
          </p>
          <p>
            <strong><i className="bi bi-envelope-check mx-2 fs-6" style={{ color: "green" }}></i></strong><a href="mailto:waterscapes_ng@yahoo.com">waterscapes_ng@yahoo.com</a>
          </p>
        </div>
        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.6227388565035!2d7.9473552!3d5.002161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067f80fe95467c1%3A0xb65e41c6383fd510!2s355%20Oron%20Rd%2C%20Iron%20Road%2C%20Uyo%20520102%2C%20Akwa%20Ibom!5e0!3m2!1sen!2sng!4v1720731293337!5m2!1sen!2sng"
          width="100%" height="450" style={{border: "0px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div className={styles.contactInputs}>
        <h4>To get a free quotation, make inquiries, or hire us, fill the fields below, and we&apos;ll reach you soonest.</h4>
        <input
          type="text"
          placeholder="Your Name:"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address:"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your active phone number:"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Your message:"
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button onClick={submit}>
          <i className="bi bi-envelope-check mx-2 fs-6" style={{ color: "white" }}></i>Send Message
        </button>
        {emailError && <span className={styles.error}>{emailError}</span>}
        {emailSent && <span className={styles.success}>Thank you for your message, we will be in touch in no time!</span>}
      </div>
      <div className={styles.container}>
        <hr />
        <h3 className="fs-6 fw-300 text-center">Privacy Policy:</h3>
        <p className="text-center">We only receive and process your contact details for the purpose of serving your request for quotation or consultation in our services.</p>
      </div>
    </div>
  );
}

export default Contact;
