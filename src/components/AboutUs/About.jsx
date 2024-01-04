// import React from 'react';
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer.tsx";

import style from "./style.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContactUs from "../ContactUs/ContactUs";
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
      {startIndex > 0 ? (
        <div className={style.arrow} onClick={handlePrev}>
          <div className={style.arrow_left}>
            <ArrowBackIosIcon />
          </div>
        </div>
      ) : (
        <div className={style.empty}></div>
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

      {startIndex < images.length - 2 ? (
        <div className={style.arrow} onClick={handleNext}>
          <div className={style.arrow_right}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      ) : (
        <div className={style.empty}></div>
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
  // Desplaza la página al principio después de una redirección
  window.scrollTo(0, 0);

  return (
    <div>
      <Navbar />
      <div className={style.blockWhoAreWe}>
        <h1 className={style.title}>¿QUIENES SOMOS?</h1>
        <div className={style.ourCompany}>NUESTRA EMPRESA</div>
        <div className={style.descriptionTxt}>
          Origin Holdings S.A.S Nit.9007589604 es una empresa privada dedicada a
          la construcción de inmuebles y prestación de servicios de obras
          civiles e inmobiliarios como son venta, arriendo y remodelación.
        </div>
      </div>
      <div className={style.ourHistory}>
        <div className={style.ourHistoryTitle}>
          <div className={style.our}>NUESTRA</div>
          <div className={style.history}>HISTORIA</div>
        </div>
        <div className={style.bgTxtHistory}>
          <div className={style.textHistory}>
            <div className={style.textHistoryParagraph}>
            {" "}
            Surgió en el año 2014 bajo una iniciativa de emprendimiento familiar
            con un concepto de brindar opciones de vivienda para población de
            estratos medios en donde prime la calidad, el buen gusto y costos
            asequibles que les permita a los compradores una vivienda digna
            ubicada en excelentes sectores de la ciudad. Es así que el año 2016
            se construyó Origin I y en el año 2020 Origin II con éxito en
            ventas.
            </div>
          </div>
        </div>
      </div>
      <div className={style.teamWork}>
        <h1 className={style.teamworkTitle}>EQUIPO DE TRABAJO</h1>
        <div className={style.pictures}>
          <Carousel />
        </div>
      </div>
      {/* <div className={style.blueLineTop}>line</div> */}
      <div className={style.MVcontainer}>
        <div className={style.misionContain}>
          <div className={style.misionVisionTitles}>MISIÓN</div>
          <div className={style.textMisionVision}>
            Ofrecer a la población de Bogotá inmuebles de alta calidad y diseño,
            inigualable localización y precios competitivos, siempre
            comprometida con la satisfacción, desarrollo y mejoramiento del
            estilo de vida de sus clientes, colaboradores y accionistas.
          </div>
        </div>
        <div className={style.visionContain}>
          <div className={style.misionVisionTitles}>VISIÓN</div>
          <div className={style.textMisionVision}>
            {" "}
            Al año 2028 Origin Holdings S.A.S será reconocida en Bogotá
            especialmente en las localidades de Puente Aranda y Engativá por
            brindar a la población de estrato 3, alternativas inmobiliarias
            altamente competitivas y con una relación costo beneficio atractiva.
          </div>
        </div>
      </div>
      {/* <div className={style.blueLineBottom}>line</div> */}

      <Footer />
      <ContactUs />
    </div>
  );
}

export default About;
