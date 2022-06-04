import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";

// import contact data
import { contact } from "../data";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successful, setSuccessful] = useState(false);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setValues({ name: "", email: "", subject: "", message: "" });
    emailjs
      .sendForm(
        "service_fdp8dfo",
        "template_1moii2p",
        e.target,
        "NOq8pOuzyHHee2zmj"
      )
      .then((res) => {
        console.log(res.status);
        e.target.reset();
        setSuccessful(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            For any of your questions, please dont hesitate to send me an email.
            I am always up for a chat!!
          </p>
        </div>
        {successful ? (
          Swal.fire(
            "Thank You!!",
            "Your message was sent and I will respond to you shortly!",
            "success"
          ).then((okay) => {
            if (okay) {
              window.location.reload();
            }
          })
        ) : (
          <div></div>
        )}
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <form className="space-y-8 w-full max-w-[780px]" onSubmit={sendEmail}>
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                required
                placeholder="Your name"
                value={values.name}
                onChange={set("name")}
              />
              <input
                className="input"
                type="email"
                required
                placeholder="Your email"
                value={values.email}
                onChange={set("email")}
              />
            </div>
            <input
              className="input"
              type="text"
              required
              placeholder="Subject"
              value={values.subject}
              onChange={set("subject")}
            />
            <textarea
              className="textarea"
              type="text"
              required
              placeholder="Your message"
              value={values.message}
              onChange={set("message")}
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-secondary-hover">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
