import React from "react";
// import img
import Image from "../assets/img/Chai.jpg";
import { Link } from "react-scroll";
import { navigation } from "../data";

const About = () => {
  return (
    <section className="section bg-primary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-[350px] w-[350px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Me
              </h2>
              <p className="mb-4 text-accent">Full Stack Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Hi Everyone. My name is Chaitali and I am a Canada-based
                Software Developer. I build web applications with a focus on
                design and responsiveness to ensure seemless digital experience
                for the users <br />
                <br />
                Infact, I love nothing more than breaking 🔨 and making 🔧code
                and ofcourse a cuppa ☕. If you think you need help in creating
                your online presence, I will be more than happy to be at
                service.
              </p>
            </div>

            <Link to={navigation[4].href}>
              <button
                className="btn btn-md bg-accent hover:bg-secondary-hover transition-all"
                type="button"
              >
                Lets talk!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
