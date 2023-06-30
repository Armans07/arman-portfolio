
import React from "react";
import aboutImage from "../../../src/assets/about (2).png";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <div className="container mx-auto my-24 md:px-6 p-2">
         
      <div className="flex flex-col gap-y-12 lg:flex-row-reverse lg:items-center lg:gap-x-20 lg:gap-y-0">
        <div className="lg:w-1/2">
          <img src={aboutImage} alt="About" className="w-full h-full" />
        </div>
        <div className="lg:w-1/2">
        <Fade>
          <h2 className='text-center text-4xl mb-2 mt-5 font-extrabold text-slate-600 '>About <span className='text-sky-500'>Me</span></h2>
          
          </Fade>
      
          <h3 className="text-lg mt-4 mb-6">
            I'm <span className="text-color">Muhammad Arman</span>, a MERN Stack
            web developer who loves to create attractive websites with
            user-friendly experiences.
          </h3>
          <p className="mb-4">
            I have experience in developing websites that are fully responsive
            on all kinds of devices. I am skilled in writing semantic,
            cross-browser compatible, clean code that is reusable,
            maintainable, and easy to understand. My main areas of expertise
            are HTML, CSS, Bootstrap, JavaScript, and React. I also have
            intermediate knowledge of Next.js, Node.js, Express.js, and
            MongoDB. If you are looking for a front-end developer for your
            company, I can be the solution you're looking for. I am
            enthusiastic about showing you how my experience and skills meet
            your needs. You can contact me via the following details:
          </p>
          <div className="font-semibold">
            <div className="flex items-center gap-2">
              Muhammad Arman Sikder
            </div>
            <div className="flex items-center gap-2">+8801865796378</div>
            <div className="flex items-center gap-2">sikder89098@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
