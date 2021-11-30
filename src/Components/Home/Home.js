import React from "react";
import Typewriter from "typewriter-effect";
import About from "../AboutMe/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <div className="HomeBanner" id="tsparticles">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 margin1">
              <h4 className="text-light">Hi! I am Abu Bakker</h4>
              <h1 className="text-light fs-1 fw-bold">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 90,
                    strings: [
                      "JavaScript Developer",
                      "React.js Developer",
                      "MongoDB",
                      "Bootstrap",
                      "HTML",
                      "CSS",
                    ],
                  }}
                />
              </h1>
              <h2 className="text-red fontSizeBig fw-bold">
                Based In Bangladesh.
              </h2>
              <p className="text-light mt-3 mb-5">
                I'm developer focused on crafting user‑friendly experiences, I
                am passionate about building excellent software that improves
                the lives of those around me.
              </p>
              <a
                href={
                  "https://drive.google.com/u/0/uc?id=1-g-MsvWIsD6yB57eybhEW9WTqHhSk7Bk&export=download"
                }
                download="Abu Bakker Resume"
              >
                <button className="buttonOutline">
                  Download Resume <i class="fas fa-download"></i>
                </button>
              </a>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Services />
      <Project />
      {/* <Blog></Blog> */}
      <Contact />
    </div>
  );
};

export default Home;
