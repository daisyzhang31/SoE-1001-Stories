import "./homeHero.scss";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// pictures
import pictureone from "../../assets/images/homehero1.png";
import picturetwo from"../../assets/images/homehero2.png";
import picturethree from "../../assets/images/homehero3.png";
import picturefour from "../../assets/images/homehero4.png";

function HomeHero() {
   

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={picturetwo} alt="First slide" />
          <Carousel.Caption>
            <h3 className="homeHero__title">
              Mobile Based Storytelling Workshops
            </h3>
            <p className="homeHero__text">
              Build on children’s natural potential to become original
              storytellers
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={picturethree} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="homeHero__title">
              Developing Reading and Writing Skills
            </h3>
            <p className="homeHero__text">
              Grounded in local languages and local themes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pictureone} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="homeHero__title">
              Self-supportive, Entrepreneurial Model
            </h3>
            <p className="homeHero__text">
              Selected stories are published and
              reinvested into the local communities.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={picturefour} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="homeHero__title">
              Cultural Awareness and Global Understanding
            </h3>
            <p className="homeHero__text">
              Learn more about the world through the windows of stories
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeHero;
