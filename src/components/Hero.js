import React from "react";

// import woman image
//import WomanImg from "../assets/img/banner-woman2.webp";
import WomanImg from "../assets/img/chait.jpeg";
import { Link } from "react-scroll";
import { navigation } from "../data";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px]">
              Hi, I'm Chaitali! 👋
            </p>
            <h1 className=" text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Design & Build <br /> Web Applications.
            </h1>
            <p className=" pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              <>Helping small businesses to create digital footprint</>
            </p>
            <Link to={navigation[4].href}>
              <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
                Lets talk!
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-end h-3/5 w-3/5">
            <img className="rounded-full" src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
