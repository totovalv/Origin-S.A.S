// import React from 'react';
import { useState } from "react";
import style from "./about.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/dxajrtcwk/image/upload/v1689530158/AboutUs/a1_ben0px.jpg",
    "https://res.cloudinary.com/dxajrtcwk/image/upload/v1689530258/AboutUs/a2_jfvubl.jpg",
    "https://res.cloudinary.com/dxajrtcwk/image/upload/v1689530329/AboutUs/a3_mtsltz.jpg",
    "https://res.cloudinary.com/dxajrtcwk/image/upload/v1689530391/AboutUs/a4_vmwmsr.jpg",
    "https://res.cloudinary.com/dxajrtcwk/image/upload/v1689530439/AboutUs/a5_sca9ea.jpg",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (index) => {
    setStartIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className={style.carousel}>
      {startIndex > 0 && (
        <div className={style.arrow} onClick={handlePrev}>
          <div className={style.arrow_left}>
            <ArrowBackIosIcon />
          </div>
        </div>
      )}

      <div className={style.carousel__images}>
        {images.slice(startIndex, startIndex + 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${startIndex + index + 1}`}
            onClick={() => handleImageClick(startIndex + index)}
            className={style.carousel__image}
          />
        ))}
      </div>

      {startIndex < images.length - 2 && (
        <div className={style.arrow} onClick={handleNext}>
          <div className={style.arrow_right}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      )}

      {showModal && (
        <div className={style.modal} onClick={handleCloseModal}>
          <img
            src={images[startIndex]}
            alt={`Imagen ${startIndex + 1}`}
            className={style.modal__image}
          />
        </div>
      )}
    </div>
  );
};

function About() {
  return (
    <div>
      <div>
        <h1>QUIENES SOMPOS?</h1>
      </div>
      <div className={style.teamWork}>
        <h1>EQUIPO DE TRABAJO</h1>
        <div className={style.pictures}>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default About;
