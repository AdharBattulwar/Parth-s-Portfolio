import React from "react";
import "../Stylesheet/Nectar.css";
import NectarImg1 from "../Images/NectarImg1.svg";
import NectarImg2 from "../Images/NectarImg2.svg";
import NectarVideo from "../Videos/Nectar.mp4";
import { Link } from "react-router-dom";
const Nectar = () => {
  return (
    <>
      <main className="NectarWrapper">
        <div className="NecatarMain">
          <div className="NectarTop">
            <div className="NectarTopLeft">
              <img src={NectarImg1} alt="img"></img>
            </div>
            <div className="NectarTopRight">
              <img src={NectarImg2} alt="img"></img>
            </div>
          </div>
          <Link to="/Nectar">
            <div className="NectarBottom">
              <video loop muted autoPlay className="NectarBottomVideo">
                <source src={NectarVideo} type="video/mp4"></source>
              </video>
            </div>
          </Link>
        </div>
        <footer className="NectarFooter">
          <h1>Nectar</h1>
          <h3>A Full Scale Branding And Product Design Case Study</h3>
        </footer>
      </main>
    </>
  );
};

export default Nectar;
