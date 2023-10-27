import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar.jsx";
import { BsFillPeopleFill } from "react-icons/bs";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  return (
    <div>
      <Navbar />
      <div className={style.barra3}></div>

      <div className={style.positionHome}>
        <div className={style.yellowBack}>
          <div className={style.ftRecipe}>
            <div className={style.ftRecipeThumb}>
              <div className={style.slider}>
                <ul>
                  <li>
                    <img
                      src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177148/Origin2%20Acabados/imgHome_czivcr.jpg"
                      alt="fachadaOrigin2"
                    />
                  </li>

                  <li>
                    <img
                      src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177147/Origin1%20Acabados/Fachada3_Origin3_uosf5q.jpg"
                      alt="fachadaOrigin2"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.ftRecipeContent}>
              <header className={style.content__header}>
                <div className={style.rowWrapper}>
                  <h2 className={style.recipeTitle}>Origin Holdings S.A.S</h2>
                  <div></div>
                </div>
              </header>
              <p className={style.description}>
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
              <div className={style.buttonNosotrosPosition}>
                <button
                  className={style.buttonNosotros}
                  onClick={() => navigate("/aboutus")}
                >
                  Nosotros{" "}
                  <BsFillPeopleFill className={style.iconB}></BsFillPeopleFill>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={style.selectionPosition}>
          <div className={style.container}>
            <div className={style.container__text}>
              <h1>Conoce nuestro nuevo proyecto</h1>
              <div className={style.positionContainer}>
                <img
                  src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684187694/Origin3%20Aleda%C3%B1os/vectorOrigin3_uqspta.png"
                  alt="FachadaOrigin3 "
                />
                <p className={style.blueSpaceTxt}>
                  <h4>Edificio Origin III</h4>
                  Es un proyecto de apartamentos y apartaestudios desde 23.3m2
                  hasta 61.7m2 de área privada. <br />
                  <b>Dirección:</b> Calle 77a 83-31/39 <br />
                  <b>Barrio:</b> Soledad Norte
                  <br />
                  <b>Localidad:</b> Engativá (Bogotá)
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "end",paddingRight:"1rem"}}>
                <button
                  className={style.btn}
                  onClick={() => navigate("projects/Origin3")}
                >
                  Ver Mas
                </button>
              </div>
            </div>
          </div>

          <div className={style.positionCarouselAuto}>
            <div className={style.contentCarousel}>
              <p className={style.contentTextCarousel}>
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
            <div className={style.slider2}>
              <ul>
                <li>
                  <img
                    src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177155/Origin3%20Aleda%C3%B1os/titan2_svbocm.jpg"
                    alt={"img"}
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177102/Origin3%20Aleda%C3%B1os/Estacion_Avenida_Cali_njtspo.jpg"
                    alt={"img"}
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177153/Origin3%20Aleda%C3%B1os/Santa_maria_del_lago_xwesoy.png"
                    alt={"img"}
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684180251/Origin3%20Aleda%C3%B1os/MAPAlugares_iiguur.jpg"
                    alt={"img"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={style.dividerBlue}>
        <h1>CONOCE NUESTROS</h1>
      </div>

      <div className={style.titleProyects}>
        <h1>PROYECTOS</h1>
        <img
          src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177147/Logos/IconEdificio_tp9u7o.png"
          alt="icon"
        />
      </div>

      <div className={style.allProjects}>
        <Link to="/projects/Origin1" className={style.imagesProjects}>
          <hr />
          <img
            src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177147/Origin1%20Acabados/Fachada3_Origin3_uosf5q.jpg"
            alt=""
          />
          <h1>ORIGIN I</h1>
          <hr className={style.hrYellow} />
          <div className={style.addressOrigin}>Barrio La Asunción. Bogotá.</div>
        </Link>
        <Link to="/projects/Origin2" className={style.imagesProjects}>
          <img
            src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177148/Origin2%20Acabados/imgHome_czivcr.jpg"
            alt=""
          />
          <h1>ORIGIN II</h1>
          <hr className={style.hrblue} />
          <div className={style.addressOrigin}>Barrio Veraguas. Bogotá.</div>
        </Link>
        <Link to="/projects/Origin3" className={style.imagesProjects}>
          <img
            src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684187694/Origin3%20Aleda%C3%B1os/vectorOrigin3_uqspta.png"
            alt=""
          />
          <h1>
            ORIGIN III <p>(En proceso)</p>
          </h1>
          <hr className={style.hrYellow} />
          <div className={style.addressOrigin}>
            Barrio La Granja - Soledad Norte. Bogotá.
          </div>
        </Link>
      </div>

      <div className={style.decoration}>
        <div className={style.decoration2}></div>
      </div>

      <Footer />
      <ContactUs />
    </div>
  );
}

export default Home;
