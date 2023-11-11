import React from "react";
import image from "../../assets/about.png";
import { DevProfile } from "../../mainComponents";
import "./AboutUs.css";
import victor from "../../assets/devs/victor.png";
import emeka from "../../assets/devs/emmy.png";
import tobby from "../../assets/devs/tobby.png";

function AboutUs() {
  const aboutUs = [
    {
      id: 1,
      head: "About Cipherskill",
      body: "At Cipher skill, we are more than just a coding blog. We are a vibrant community of passionate tech enthusiasts dedicated to fostering innovation and learning in the world of programming.",
    },
    {
      id: 2,
      head: "Our Mission",
      body: "Our mission is simple yet powerful: to empower tech enthusiasts like you with the right resources and knowledge. We offer a wealth of educational articles, insightful tutorials, coding challenges, and so much more to keep you at the forefront of technology.",
    },

    { id: 3, head: "What Sets Us Apart", body: "" },
    {
      id: 4,
      head: "Join Our Vision",
      body: "At Cipherskill, we aim to groom the techies of the future. Our vision is to inspire and guide upcoming developers, helping them reach their full potential and make a lasting impact on the tech world.",
    },
  ];
  const unique = [
    {
      head: "Learning Hub:",
      body: " We provide a one-stop hub for tech enthusiasts, whether you're a beginner ",
    },
    {
      head: "Community Focus:",
      body: " We believe in the strength of a thriving community. Connect with like-",
    },
    {
      head: "Staying Current:",
      body: " Technology evolves rapidly, and so do we. We keep you informed about the latest tech news, programming languages, and tools.",
    },
  ];
  const result1 = aboutUs.filter((value) => value.id < 4);
  const result2 = aboutUs.filter((value) => value.id === 4);
  const devs = [
    {
      name: "Nnaemaka Charles",
      role: "Qaulity assurance software engineer",
      img: emeka,
    },
    { name: "Ike Tobenna", role: "Software engineer", img: tobby },
    { name: "Chukwu Jachike", role: "Frontend developer", img: victor },
  ];
  return (
    <div className="about-us">
      <div className="marginn"></div>
      {/* <div className="margin"></div> */}
      <main className="about-container">
        <section className="information">
          <h2>About us</h2>
          <article>
            {result1.map((item) => {
              return (
                <div>
                  <h3>{item.head}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
            {unique.map((item) => {
              return (
                <div>
                  <h4>{item.head}</h4> <p>{item.body}</p>
                </div>
              );
            })}
            {result2.map((item) => {
              return (
                <div>
                  <h3>{item.head}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </article>
        </section>
        <section className="about-img">
          {/* <div className="hold-aboutimg"> */}
          <img src={image} alt="" className="image2" />
          {/* </div> */}
        </section>
      </main>
      <h1 className="dev-head">Developers and sponsors</h1>
      <main className="developer-contain">
        {devs.map((value) => {
          return (
            <DevProfile img={value.img} name={value.name} role={value.role} />
          );
        })}
      </main>
    </div>
  );
}

export default AboutUs;
