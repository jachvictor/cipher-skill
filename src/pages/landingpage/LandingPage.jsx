import React from "react";
import "./LandingPage.css";
import { Info, Info2, Header } from "../../mainComponents";

import offer from "../../assets/offer.png";
import serve from "../../assets/serve.png";
import us from "../../assets/programe.png";
import { Link } from "react-router-dom";
import {
  HiOutlineUserGroup,
  HiOutlineGlobe,
} from "react-icons/hi";
import { LuHelpingHand } from "react-icons/lu";
function LandingPage() {
  return (
    <main className="page">
      <Header />
      <section className="intro">
        <div className="hold-intro">
          {/* <div> */}
          <h1>Programming</h1>
          <h2> made easy!</h2>
          {/* </div> */}
          <p>
            A programming hub housing top-quality articles and resources. If
            you're passionate about technology, this is your ideal space for
            nurturing and advancing your skills as a programmer.
          </p>
          <Link to={"/home"}>
            <button className="start"> Get started</button>
          </Link>
        </div>
      </section>
      <div className="hold-article">
        <Info
          Children={
            <div className="hold-land-icon">
              <HiOutlineUserGroup className="land-icon up-down" />
            </div>
          }
          link={us}
          header={"Who we are"}
          text="The CipherSkill Community is an innovation and learning platform dedicated to empowering  tech enthusiasts with the latest and most relevant resources. Our mission is to equip our users with the essential and up-to-date skills needed to excel in today's tech-driven society. We aspire to nurture and elevate upcoming developers, helping them reach their full potential and contributing to the growth of the tech community."
        >
          {/* <HiOutlineGlobe /> */}
        </Info>
        {/* <div className="d"></div> */}
        <Info2
          Children={
            <div className="hold-land-icon">
              <HiOutlineGlobe className="land-icon icon-rotate" />
            </div>
          }
          header={"we serve the society"}
          link={serve}
          text="
            All our courses are free of charge ensuring that cost is never a barrier to education, making quality programming education accessible to everyone.
            We continuously update our course content to ensure you have access to the latest information and technologies.
            "
        />
        {/* <div className="d"></div> */}
        <Info
          Children={
            <div className="hold-land-icon">
              <LuHelpingHand className="land-icon up-down1" />
            </div>
          }
          header={"What we offer"}
          link={offer}
          text={
            <div className="offer-list">
              <p>
                Our platform offers a vast collection of programming courses,
                and many more
              </p>
              <ul>
                <li>Educational Articles</li>
                <li>Programming Language Insights</li>
                <li>Coding Resources</li>
                <li>Project Showcases</li>
              </ul>
            </div>
          }
        />
      </div>

      {/* <div className="d"></div> */}
      <div className="wrap">
        <section className="start-now">
          <h2 className="start-qoute">
            Are you ready to solve world problems with programming methodologies
            and algorithms
          </h2>
          <Link to={"/home"}>
            <button className="start"> join us now</button>
          </Link>
        </section>
      </div>
      {/* <div className="d"></div> */}
    </main>
  );
}

export default LandingPage;
