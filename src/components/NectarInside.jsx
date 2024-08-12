import React from "react";
import "../Stylesheet/NectarInside.css";
import Nav from "./Nav";
import NectarVideo from "../Videos/Nectar.mp4";
import NectarInsideMan from "../Images/NectarInsideMan.svg";
import NectarInsideCan from "../Images/NectarInsideCan.svg";
import NectarInsideMan2 from "../Images/NectarInsideMan2.svg";
import NectarInsideWomen from "../Images/NectarInsideWomen.svg";
import NectarLogo from "../Images/NectarLogo.svg";
import NectarInsideMockUp from "../Images/NectarInsideMockUp.svg";
import NectarInsideSolkadhi from "../Images/NectarInsideSolkadhi.svg";
import NectarInsideProduct from '../Images/NectarInsideProduct.svg'
import { Link } from "react-router-dom";

const NectarInside = () => {
  return (
    <>
      <div className="NectarInsideWrapper">
        <Nav />
        <div className="NectarInsideMain">
          <div className="NectarInsideMainHeading">
            <h1>Nectar</h1>
          </div>
          <div className="NectarInsideMainImage">
            <video loop muted autoPlay className="NectarInsideBottomVideo">
              <source src={NectarVideo} type="video/mp4"></source>
            </video>
          </div>
          <div className="NectarInsideMainOverview">
            <div className="NectarInsideMainOverviewHeading">
              <h2>Overview</h2>
            </div>
            <div className="NectarInsideMainOverviewContent">
              <li>
                Developed a comprehensive branding strategy for an indigenous
                beverage line focused on cultural significance and modern
                appeal.
              </li>
              <li>
                Designed visually compelling packaging, functional product
                design, and a user-friendly website.
              </li>
            </div>
          </div>
          <div className="NectarInsideMainTargetAudience">
            <div className="NectarInsideMainTargetAudienceImg">
              <img src={NectarInsideMan} alt="img"></img>
            </div>
            <div className="NectarInsideMainTargetAudienceHeading">
              <h2>Target Audience</h2>
            </div>
            <div className="NectarInsideMainTargetAudienceContent">
              <li>
                Young professionals, health enthusiasts, and eco-conscious
                consumers aged 25-45.
              </li>
            </div>
          </div>
          <div className="NectarInsideMainKeyDesign">
            <div className="NectarInsideMainKeyDesignImg">
              <img src={NectarInsideCan} alt="img"></img>
            </div>
            <div className="NectarInsideMainKeyDesignHeading">
              <h2>Key Design</h2>
            </div>
            <div className="NectarInsideMainKeyDesignContent">
              <li>
                Packaging: Culturally themed, sustainable, and interactive
                packaging .
              </li>
              <li>
                Product Design: Functional and aesthetically pleasing bottle
                design that reflects brand values.
              </li>
              <li>
                Website: Informative platform to educate users about ingredients
                and the cultural heritage behind the drinks.
              </li>
            </div>
          </div>
          <div className="NectarInsideMainUserResearch">
            <div className="NectarInsideMainUserResearchImg">
              <img src={NectarInsideMan2} alt="img"></img>
              <img src={NectarInsideWomen} alt="img"></img>
            </div>
            <div className="NectarInsideMainUserResearchHeading">
              <h2>UserResearch</h2>
            </div>
            <div className="NectarInsideMainUserResearchContent">
              <li>
                Addressed pain points such as the abundance of sugary drinks and
                the lack of culturally connected, healthy options.
              </li>
              <li>
                Prioritized health benefits, sustainability, and unique flavor
                experiences.
              </li>
            </div>
          </div>
          <div className="NectarInsideMainCompitetorAnalysis">
            <div className="NectarInsideMainCompitetorAnalysisImg">
              <img src={NectarInsideProduct} alt="img"></img>
            </div>
            <div className="NectarInsideMainCompitetorAnalysisHeading">
              <h2>CompitetorAnalysis</h2>
            </div>
            <div className="NectarInsideMainCompitetorAnalysisContent">
              <li>
                Positioned Nectar against brands like Paperboat and Storia,
                focusing on health benefits, cultural connection, and innovative
                packaging.
              </li>
            </div>
          </div>
          <div className="NectarInsideMainFinalDeliverables">
            <div className="NectarInsideMainFinalDeliverablesImg">
              <div className="NectarInsideMainFinalDeliverablesImgLeft">
                <img src={NectarLogo} alt="img"></img>
                <img src={NectarInsideMockUp} alt="img"></img>
              </div>
              <div className="NectarInsideMainFinalDeliverablesImgRight">
                <img src={NectarInsideSolkadhi} alt="img"></img>
              </div>
            </div>
            <div className="NectarInsideMainFinalDeliverablesHeading">
              <h2>FinalDeliverables</h2>
            </div>
            <div className="NectarInsideMainFinalDeliverablesContent">
              <li>
              Branding elements including logo, packaging, website, and product design, all aligning with the brand's mission of offering healthy, culturally significant beverages.
              </li>
            </div>
          </div>
          <div className="NectarInsideMainFigmaLink">
            <div className="NectarInsideMainFigmaLinkHeading">
              <h2>FigmaLink</h2>
            </div>
            <div className="NectarInsideMainFigmaLinkContent">
              <li>
              <Link to='https://www.figma.com/design/S9e0F2Bu7JX2XrwddgdpHX/Nectar-Website?node-id=0-1&t=AnV5Nx4RkCrAAYLY-1'>
                https://www.figma.com/design/S9e0F2Bu7JX2XrwddgdpHX/Nectar-Website?node-id=0-1&t=AnV5Nx4RkCrAAYLY-1
              </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NectarInside;
