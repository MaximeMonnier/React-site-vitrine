import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID, process.env.TEMPLATE, process.env.PKEY);

const ContactForm = () => {
  const form = useRef();
  const formMess = useRef();

  console.log(formMess);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_ID,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.current.innerHTML =
            "<p className='success'>Message envoyé !<p/>";
          setTimeout(() => {
            formMess.current.textContent = "";
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          formMess.current.innerHTML =
            "<p className='error'>Nous-avons rencontrer un problème votre message n'a pas pu être envoyer !<p/>";

          setTimeout(() => {
            formMess.current.textContent = "";
          }, 3000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input
          type="text"
          name="user_name"
          required
          autoComplete="off"
          id="name"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div ref={formMess} className="form-message"></div>
    </div>
  );
};

export default ContactForm;
