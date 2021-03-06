import React from "react";
import "./Fullpage.css";
import cover from "../../assets/dp.jpg";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedIn from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";
import github from "../../assets/github.png";

import ReactFullpage from "@fullpage/react-fullpage";
import SkillByWidth from "../SkillByWidth/SkillByWidth";
import MediaSymbols from "../MediaSymbols/MediaSymbols";
import Mailing from "../Mailing/Mailing";
import Footer from "../Footer/Footer";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} // scrolling speed
    navigation={true} // right side dots
    css3={true}
    navigationTooltips={["Home", "About Me", "Skills", "Connect", "Contact"]} // right side dots name
    autoScrolling={true}
    slidesNavigation={true}
    controlArrows={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section s1">
            <h1>Nitesh Sethi</h1>
            <h2>I'm a Full Stack Web Developer</h2>
          </div>
          <div className="section s2">
            <div className="innerContent innerContent--aboutme">
              <h1>About Me</h1>
              <div className="imageContainer">
                <img src={cover} alt="" />
              </div>
              <div className="description">
                <p className="inner-heading">Hey there,</p>
                <p className="para">
                  This is Nitesh Sethi from New Delhi, India. I'm a Web
                  Developer and designer who develops web applications. I
                  persued my 3 years of Diploma in{" "}
                  <b>Computer Science Engineering</b> from{" "}
                  <b>Ambedkar Institute of Technology</b> (a.k.a Ambedkar
                  Polytechnic) in July 2019.
                </p>
                <p className="para">
                  I started learning HTML in my early days. After that during
                  college, I started putting my hands on Cascading Style sheets.
                  I was blown by it's potential. Apart from HTML &amp; CSS, I
                  started polishing my hands on Node.js &amp; React.js.
                </p>
              </div>
            </div>
          </div>
          <div className="section s3">
            <div className="innerContent innerContent--skills">
              <div className="wrapper">
                <h1>Skills &amp; Services</h1>
              </div>
              <div className="skills--section">
                <SkillByWidth />
              </div>
            </div>
          </div>
          <div className="section s4">
            <div className="innerContent innerContent--social">
              <h1>Let's Be Friends</h1>
              <div className="social-media-symbols">
                <MediaSymbols
                  symbol={github}
                  link="https://github.com/itssethi"
                />
                <MediaSymbols symbol={instagram} link="!#" />
                <MediaSymbols symbol={facebook} link="!#" />
                <MediaSymbols
                  symbol={telegram}
                  link="https://t.me/itsNitesh20"
                />
                <MediaSymbols
                  symbol={linkedIn}
                  link="https://www.linkedin.com/in/nitesh-sethi-442006154"
                />
              </div>
            </div>
          </div>
          <div className="section s5">
            <div className="innerContent innerContent--contact-footer">
              <div className="innerContent--contact">
                <h1>Get in Touch</h1>
                <div className="contact-mailing">
                  <Mailing />
                </div>
              </div>
              <div className="innerContent--footer">
                <Footer />
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
