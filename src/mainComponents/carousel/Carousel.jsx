import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import img1 from "../../assets/patience.png";
import img2 from "../../assets/perspective.png";
import img3 from "../../assets/logical.png";
import img4 from "../../assets/creative.png";
import img5 from "../../assets/learning.png";
function Carousell() {
  const homeimages = [
    {
      id: "1",
      img: img1,
      header: " Power of Patience",
      text: "During coding, we get many obstacles. One of the major obstacles is the error in the code. ",
    },
    {
      id: "2",
      img: img2,
      header: " Power of Perspection",
      text: "Coding or solving questions helps you understand the world from a different perspective. ",
    },
    {
      id: "3",
      img: img3,
      header: "Power of Logical Thinking",
      text: "Coding helps strengthen your thinking ability as many difficult questions need healthy thinking to crack it",
    },
    {
      id: "4",
      img: img4,
      header: "Power of Innovation ",
      text: "One best quality you can learn is the power to be innovative or unique. By gaining experience.",
    },
    {
      id: "5",
      img: img5,
      header: "Power of Self-Learning",
      text: "In coding, you face a lot of problems where you need help from other resources",
    },
  ];
  return (
    <div>
      {/* <div className="margin"></div> */}
      <div className="carousel">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={false}
          swipeable={true}
          showThumbs={false}
          className="carousel-container"
        >
          {homeimages.map((value, index) => {
            return (
              <div key={index} className="hold-c-img">
                <div
                  className="c-img"
                  style={{
                    backgroundImage: `linear-gradient(
                    90deg,
                    rgba(10, 5, 47, 0.8) 0%,
                    rgba(18, 6, 46, 0) 50%,
                    black 100%
                    ),url(${value.img})`,
                  }}
                ></div>
                <section className="caroll-info">
                  <h3>{value.header}</h3>
                  <p>{value.text}</p>
                </section>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Carousell;
