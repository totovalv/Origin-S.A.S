import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar.jsx";
// import titanPlaza from "../../img/Tiatan_Plaza.jpg";
import titanPlaza from "../../../assets/img/titan2.jpg";
import lago from "../../../assets/Santa_maria_del_lago.jpeg";
import trasmi from "../../../assets/img/Estacion_Avenida_Cali.jpg";
import puentearanda from "../../../assets/img/Loclidad Puente Aranda.avif";
import imgFachada from "../../../assets/img/Fachada3_Origin3.jpg";
import imgHome from "../../../assets/img/imgHome.jpg";
import APTOS2 from "../../../assets/img/FACH2.png";
import FachadaFinal from "../../../assets/img/FACHADA FRONTAL.png";
import {BsFillPeopleFill} from 'react-icons/bs';
import ApartmentIcon from "../../../assets/img/IconEdificio.png";
import mapa from "../../../assets/mapa.jpeg";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="barra3"></div>

      <div className="positionHome">
        <div className="yellowBack">
          <div className="ft-recipe">
            <div className="ft-recipe__thumb">
              <div className="slider">
                <ul>
                  <li>
                    <img src={imgHome} alt="fachadaOrigin2" />
                  </li>
                  {/* <li  style={{ display: "flex", justifyContent: "center" }} > */}
                  <li>
                    <img
                      // style={{ width: "80%" }}
                      src={imgFachada}
                      alt="fachadaOrigin2"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="ft-recipe__content">
              <header className="content__header">
                <div className="row-wrapper">
                  <h2 className="recipe-title">Origin Holdings S.A.S</h2>
                  <div className="user-rating"></div>
                </div>
              </header>
              <p className="description">
                Nit. 9007589604
                <br />
                Somos una empresa privada dedicada a la construcción de
                inmuebles y prestación de servicios inmobiliarios como son
                venta, arriendo y adecuación de inmuebles. Surgió bajo una
                iniciativa de emprendimiento familiar que pretende brindar
                viviendas con condiciones óptimas en estratos medios, donde
                prima la calidad, el buen gusto y costos asequibles en
                excelentes sectores de la ciudad.
              </p>
              <div className="buttonNosotrosPosition">
                <button className="buttonNosotros">
                  Nosotros{" "}
                  <BsFillPeopleFill
                   
                    className="iconB"
                  ></BsFillPeopleFill>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="selectionPosition">
          <div className="container">
            <div className="container__text">
              <h1>Conoce nuestro nuevo proyecto</h1>
              <div className="positionContainer">
                <img src={FachadaFinal} alt="FachacdaOrigin3 " />
                <p>
                  <h4>Edificio Origin III</h4>
                  Es un proyecto de apartamentos y apartaestudios desde 23.3m2
                  hasta 61.7m2 de área privada. <br />
                  <b>Dirección:</b> Calle 77a #83-31/39 <br />
                  <b>Barrio:</b> Soledad Norte
                  <br />
                  <b>Localidad:</b> Engativá (Bogotá)
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <button className="btn">Ver Mas</button>¿
              </div>
            </div>
          </div>

          <div className="positionCarouselAuto">
            <div className="contentCarousel">
              <p>
                <b>Edificio Origin III</b> se localiza al noroccidente de la
                Ciudad De Bogotá, excelente ubicación y en un sector de fácil
                acceso rodeado por importantes vías como:
              </p>
              <ul>
                <li>La Avenida Ciudad de Cali</li>
                <li>Calle 80</li>
                <li>Av. Boyacá</li>
                <li>Calle 72.</li>
              </ul>
            </div>
            <div className="slider2">
              <ul>
                <li>
                  <img src={titanPlaza} alt={"img"} />
                </li>
                <li>
                  <img src={trasmi} alt={"img"} />
                </li>
                <li>
                  <img src={lago} alt={"img"} />
                </li>
                <li>
                  <img src={mapa} alt={"img"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="dividerBlue">
        <h1>CONOCE NUESTROS</h1>
      </div>

      <div className="titleProyects">
        <h1>PROYECTOS</h1>
        <img src={ApartmentIcon} alt="icon" />
      </div>

      <div className="allProjects">
        <div className="imagesProjects">
          <hr />
          {/* <hr className="hrYellow" /> */}
          <img src={imgFachada} alt="" />
          <h1>ORIGIN I</h1>
          <hr className="hrYellow" />
        </div>
        <div className="imagesProjects">
          <img src={imgHome} alt="" />
          <h1>ORIGIN II</h1>
          <hr className="hrblue" />
        </div>
        <div className="imagesProjects">
          {/* <hr className="hrYellow" /> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80%" }} src={FachadaFinal} alt="" />
          </div>
          <h1 style={{ marginTop: "-290px" }}>
            ORIGIN III <p>(En proceso)</p>
          </h1>
          <hr className="hrYellow" style={{ marginTop: "1rem" }} />
        </div>
      </div>

      <div className="decoration">
        <div className="decoration2"></div>
      </div>

      <Footer />
      <ContactUs />
    </div>
  );
}

export default Home;

