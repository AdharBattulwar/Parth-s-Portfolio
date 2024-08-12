import React from "react";
import Nav from "./Nav";
import BackgroundVideo from "../Videos/Background.mp4";
import LocationLogo from '../Icons/LocationLogo.svg'
import LinkedINLogo from '../Icons/LinkedInLogo.svg'
import MailLogo from '../Icons/MailLogo.svg'
import "../Stylesheet/Homepage.css";
import Nectar from "./Nectar";
import SmartInduction from "./SmartInduction";
import SkillUp from "./SkillUp";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <div className="HomepageWrapper">
        <video autoPlay muted loop className="BackgroundVideo">
          <source src={BackgroundVideo} type="video/mp4"></source>
        </video>
        <div className="HomepageMain">
          <Nav />
          <div className="HomepageMainHeading">
            <h1>
              <span> I Build</span> digital products,<br/> brands , and experience.
            </h1>
          </div>
          <div className="HomepageLocation">
            <img src={LocationLogo} alt="img"></img>
            Pune, India
          </div>
        </div>
      </div>
      <div className="ProjectsWrapper">
        <Nectar/>
        <div className="ProjectsWrapperSmartIndSkillUp">
        <SmartInduction/>
        <SkillUp/>
        </div>
      </div>
      <div className="ContactWrapper">
      <div className='ContactContent'>
                <Link to='https://www.linkedin.com/in/parth-dake-232790215'>
                <img className='ContactContentLinkedIn' src={LinkedINLogo} alt='img'></img>
                </Link>
            </div>
            <div className='ContactContent'>
                <Link to='mailto: parthdake1911@gmail.com'>
                <img className='ContactContentMail' src={MailLogo} alt='img'></img>
                </Link>
            </div>
      </div>
    </>
  );
}

export default Homepage;
