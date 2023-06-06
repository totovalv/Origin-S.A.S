import { Element, scroller } from "react-scroll";
import ContactUs from "../../ContactUs/ContactUs";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";

function Origin3() {
  let [data, setData] = useState({});
  let [currentPhoto, setCurrentPhoto] = useState(
    "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684800020/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/Aptos/MAPA-todos_oqb6ji.jpg"
  );
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
    setData({
      mall: "https://res.cloudinary.com/dxajrtcwk/image/upload/v1686010990/Aptos%20Origin3/1_home_G2-1_valbwr.jpg",
      parks:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1686010990/Aptos%20Origin3/4_home_G2-1_xjw8lk.jpg",
      market:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1686010622/Aptos%20Origin3/JUMBO_fafvom.jpg",
      education:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1686011161/Aptos%20Origin3/uniminuto_bog_cop_n2vmaw.jpg",
      sportsCenters:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1686010990/Aptos%20Origin3/5_home_G2-1_o5rbpl.jpg",
      renderOrigin3:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684187694/Origin3%20Aleda%C3%B1os/vectorOrigin3_uqspta.png",
      type1:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684800020/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/Aptos/MAPA-Tipo1_nksky1.jpg",
      type2:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684800020/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/Aptos/MAPA-Tipo2_kzzk45.jpg",
      type3:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684800020/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/Aptos/MAPA-Tipo3_xlq4d5.jpg",
      type4:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684800020/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/Aptos/MAPA-Tipo4_ewuupb.jpg",
      type5:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684800020/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/Aptos/MAPA-Tipo5_oetfon.jpg",
      porcentage:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684795382/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/45__u6hmcy.png",
      buildingLogo:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684794554/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/building_logo_biztci.png",
      timeline:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684795405/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/linea_de_tiempo-origin3_x8fnvi.jpg",
      map: "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684797331/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/MAPAlugares_1_estge7.jpg",
    });
  }, []);

  const handleApto = (e) => {
    scrollToLeftSide();
    if (e == 1) setCurrentPhoto(data.type1);
    if (e == 2) setCurrentPhoto(data.type2);
    if (e == 3) setCurrentPhoto(data.type3);
    if (e == 4) setCurrentPhoto(data.type4);
    if (e == 5) setCurrentPhoto(data.type5);
  };
  const scrollToSection = () => {
    scroller.scrollTo("sectionRef", {
      smooth: true,
      offset: -50,
    });
  };
  const scrollToLeftSide = () => {
    scroller.scrollTo("leftSideRef", {
      smooth: true,
      offset: -50,
    });
  };
  return (
    <div>
      <Loader isLoading={loading} />
      <Navbar />
      <div className={style.head}>
        <img className={style.renderImg} src={data.renderOrigin3} alt="" />
        <div>
          <div className={style.title}>
            <p className={style.textTitle}>ORIGIN 3</p>
          </div>
          <div className={style.newContent}>
            <p className={style.new}>Nuevo </p>
            <p className={style.project}>proyecto</p>
          </div>
          <div className={style.porcentage}>
            <p className={style.weGolikeThis}>Así vamos</p>
            <div>
              <p className={style.porcentageNumber}>45%</p>
              <p className={style.buildingPart}>1er. piso</p>
              <img
                className={style.porcentageBarImg}
                src={data.porcentage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.knowOurBuildings}>
        {" "}
        <img className={style.buildingLogo} src={data.buildingLogo} alt="" />
        <div className={style.containTitleBlueBar}>
          <p className={style.knowTheText}>CONOCE LOS</p>
          <div className={style.gridtextBlueBar}>
            <p className={style.apartments}>APARTAMENTOS</p>
            <p>MODELO</p>
          </div>
        </div>
        <button onClick={scrollToSection} className={style.seeMoreBtn}>
          Ver más
        </button>
      </div>

      <div className={style.detailSection}>
        <div className={style.informationBox}>
          <div className={style.firstBox}>
            <h5> Direccion: Carrera 77A #83-31, Bogotá,Colombia</h5>
          </div>
          <div className={style.secondBox}>
            <h5>
              Barrio: Soledad Norte
              <br />
              <br />
              Localidad: Engativá
              <br />
              <br />
              UPZ Boyacá Real
            </h5>
          </div>
          <div className={style.thirdBox}>
            <h5>Área del lote: 300 mt2(14*23.6mts)</h5>
          </div>
          <div className={style.fourthBox}>
            <div className={style.spaceOne}>
              <h5>
                No. Apartamentos: 20
                <br />5 por piso, 50 mt2 c/u aprox.
              </h5>
            </div>
            <div className={style.spaceTow}>
              <h5>Licencia de Construcción Curaduría No. 5.</h5>
            </div>
            <div className={style.spaceThree}>
              <h5>Vivienda: No VIS</h5>
            </div>
            <div className={style.spaceFour}>
              <h5>Estrato: 3</h5>
            </div>
            <div className={style.spaceFive}>
              <h5>No. Pisos: 5</h5>
            </div>
            <div className={style.sapaceSix}>
              <h5></h5>
            </div>
          </div>
        </div>
        <div className={style.sliderComponent}>
          <div className={style.containerHome}>
            <div className={style.carouselHome}>
              <input type="radio" name="slides" id="slide-1" />
              <input type="radio" name="slides" id="slide-2" />
              <input type="radio" name="slides" id="slide-3" />
              <input type="radio" name="slides" id="slide-4" />
              <input type="radio" name="slides" id="slide-5" />
              <input type="radio" name="slides" id="slide-6" />
              <ul className={style.carousel__slides}>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Sitios de interés: </h1>
                      <ul>
                        <label htmlFor="slide-2">
                          <li className={style.unorderList}>
                            Centros Comerciales
                          </li>
                        </label>
                        <label htmlFor="slide-3">
                          <li className={style.unorderList}>Educación</li>
                        </label>

                        <label htmlFor="slide-4">
                          <li className={style.unorderList}>Comercio</li>
                        </label>
                        <label htmlFor="slide-5">
                          <li className={style.unorderList}>Parques</li>
                        </label>
                        <label htmlFor="slide-6">
                          <li className={style.unorderList}>
                            Sitios Deportivos
                          </li>
                        </label>
                      </ul>
                    </figcaption>
                    <div>
                      <img
                        src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684797331/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/MAPAlugares_1_estge7.jpg"
                        alt=""
                      />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Centros Comerciales </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a href="https://www.titanplaza.com/" target="blank">
                            Centro Comercial Titan Plaza{" "}
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.diverplaza.com/nosotros"
                            target="blank"
                          >
                            Centro Comercial Diverplaza
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://www.portal80.com.co/" target="blank">
                            Centro Comercial Portal 80
                          </a>
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          <p>Volver</p>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img src={data.mall} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Eduación </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a href="https://www.uniminuto.edu/" target="blank">
                            Universidad Minuto de Dios{" "}
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.colegiolapalestina.edu.co/"
                            target="blank"
                          >
                            Colegio La Palestina
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.redacademica.edu.co/colegios/colegio-tabora-ied"
                            target="blank"
                          >
                            Colegio Tabora - Sede A
                          </a>
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          {" "}
                          <p>Volver</p>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img src={data.education} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Comercio </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.tiendasjumbo.co/?utm_source=google&utm_medium=cpa&utm_campaign=Jumbo_aon_nonfood_performance&utm_content=Searchintereses-Almacenes_Jumbo&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wBPziGt8BHaMfyaEkjMzFNuQBOEP6eC071nXu56LdmxDWl2q1NGcoaAr9HEALw_wcB"
                            target="blank"
                          >
                            Jumbo{" "}
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.makro.com.co/ofertas?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0w3vUGuBdyAspUaTXjB3QR-FijF8HSR684B7V4WVjsn6xok8SyQyY8aAtqKEALw_wcB#modal"
                            target="blank"
                          >
                            Makro
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://d1.com.co/" target="blank">
                            D1
                          </a>
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          <p>Volver</p>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img src={data.market} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Parques </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a
                            href="https://humedalesbogota.com/2012/06/20/parque-ecologico-distrital-de-humedal-santa-maria-del-lago-parque-o-humedal/"
                            target="blank"
                          >
                            Parque Santa Maria del Lago{" "}
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.civico.com/lugar/parque-almeria-bogota/"
                            target="blank"
                          >
                            Parque La Almeria
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.google.com/maps/place/La+Granja+Public+Park/@4.6979802,-74.1010539,19.08z/data=!4m6!3m5!1s0x8e3f9b37e176bb6f:0xc7ae941226a07276!8m2!3d4.6978674!4d-74.1005495!16s%2Fg%2F11b7hfpbyq?entry=ttu"
                            target="blank"
                          >
                            Parque Público La Granja
                          </a>
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          <p>Volver</p>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img src={data.parks} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Sitios Deportivos </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a
                            href="https://centro20182.ascundeportes.org/escenario/escenario/259"
                            target="blank"
                          >
                            Estadio Tabora{" "}
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://empresite.eleconomistaamerica.co/SPIRIT-GYM-CENTER-SAS-BOGOTA.html"
                            target="blank"
                          >
                            Spirit
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://vymaps.com/CO/BEAST-GYM-590831988099399/"
                            target="blank"
                          >
                            BEAST Gym
                          </a>
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          <p>Volver</p>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img src={data.sportsCenters} alt="" />
                    </div>
                  </figure>
                </li>
              </ul>
              <ul className={style.carousel__thumbnails}>
                <li>
                  <label htmlFor="slide-1">
                    <img
                      src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684797331/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/MAPAlugares_1_estge7.jpg"
                      alt=""
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-2">
                    <img src={data.mall} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-3">
                    <img src={data.education} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-4">
                    <img src={data.market} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-5">
                    <img src={data.parks} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-6">
                    <img src={data.sportsCenters} alt="" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={style.timeline}>
        <img className={style.imgTimeline} src={data.timeline} alt="timeline" />
      </div>
      <div className={style.titleContain}>
        <p className={style.ubicationTitle}>UBICACIÓN</p>
        <hr className={style.titleUnderline}></hr>
      </div>
      <div className={style.ubicationContainer}>
        <img className={style.ubicationImg} src={data.map} alt="" />
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1Es9h5eKHodOCCr0z35MtOwX_TR_ogJQ&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
      </div>
      <p className={style.availableSpacesTitle}>ESPACIOS DISPONIBLES</p>
      <>
        <div className={style.iconsGrid}>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/p_vcv9ie.png"
              alt=""
            />
            <div className={style.iconsText}>PARQUEADEROS PRIVADOS</div>
          </div>

          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/reception_rnsgue.png"
              alt=""
            />
            <div className={style.iconsText}>RECEPCION</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/people_gqo985.png"
              alt=""
            />
            <div className={style.iconsText}>SALÓN COMUNAL</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/terraza_xfxnf1.png"
              alt=""
            />
            <div className={style.iconsText}>TERRAZA</div>
          </div>
        </div>

        <div className={style.iconsGrid}>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684798371/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/unnamed_o9zocz.png"
              alt=""
            />
            <div className={style.iconsText}>DEPÓSITOS PRIVADOS</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684798482/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/person_o4pvnv.png"
              alt=""
            />
            <div className={style.iconsText}>SÓTANO CON RAMPA LEVADIZA</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.iconBbq}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/bbq_qo1d2p.png"
              alt=""
            />
            <div className={style.iconsText}>ZONA BBQ </div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/terraza_xfxnf1.png"
              alt=""
            />
            <div className={style.iconsText}>TERRAZA</div>
          </div>
        </div>
        <div className={style.iconsGrid}>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/bicycle_uuwow3.png"
              alt=""
            />
            <div className={style.iconsText}>BICICLETERO</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/trash_mb6rzo.png"
              alt=""
            />
            <div className={style.iconsText}>SHUT DE BASURAS</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/terraza_xfxnf1.png"
              alt=""
            />
            <div className={style.iconsText}>TERRAZA</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/terraza_xfxnf1.png"
              alt=""
            />
            <div className={style.iconsText}>TERRAZA</div>
          </div>
        </div>
      </>
      <div className={style.titleModelApartmentsContain}>
        <Element className={style.titleModelApartments} name="sectionRef">
          APARTAMENTOS MODELO
        </Element>
        <hr className={style.titleUnderlineModelApartments}></hr>
        <hr className={style.titleUnderlineModelApartmentsSoft}></hr>
      </div>

      <div className={style.apartmentsGrid}>
        <div className={style.leftSideContainer}>
          <div className={style.availableLeftSideGrid}>
            <p className={style.availabilityText}>Disponibilidad</p>
            <div className={style.availabilityLabelContainer}>
              <div className={style.availabilityLabel}>
                <p className={style.greenCircle}></p>Si esta disponible
              </div>
              <div className={style.availabilityLabel}>
                <p className={style.redCircle}></p>No esta disponible
              </div>
            </div>
          </div>
          <img className={style.imgAptos} src={currentPhoto} alt="aptos" />
        </div>

        <div className={style.aptosContainer}>
          <div className={style.aptoCard} onClick={() => handleApto(1)}>
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <p className={style.typeApto}>TIPO 1</p>
                <p className={style.typeAptoDescription}>
                  45.45 M2 - Área Privada
                </p>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684868056/Aptos%20Origin3/Apto_Tipo1_kdzsns_u0sqyi.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <p className={style.availabilityTextApto}>Disponiblidad</p>
              <div className={style.numberApartmentsGrid}>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>201
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>301
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>401
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>501
                </p>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} to="/projects/Origin3/1">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className={style.aptoCard} onClick={() => handleApto(2)}>
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <p className={style.typeApto}>TIPO 2</p>
                <p className={style.typeAptoDescription}>
                  61.73 M2 - Área Privada
                </p>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684881817/Aptos%20Origin3/Apto_Tipo2_epippg_wnnppd.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <p className={style.availabilityTextApto}>Disponiblidad</p>
              <div className={style.numberApartmentsGrid}>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>202
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>302
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>402
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>502
                </p>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} to="/projects/Origin3/2">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div
            className={style.aptoCard}
            onClick={() => handleApto(3)}
            name="leftSideRef"
          >
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <p className={style.typeApto}>TIPO 3</p>
                <p className={style.typeAptoDescription}>
                  45.45 M2 - Área Privada
                </p>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684882163/Aptos%20Origin3/Apto_Tipo3_htyo7y_amqq36.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <p className={style.availabilityTextApto}>Disponiblidad</p>
              <div className={style.numberApartmentsGrid}>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>203
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>303
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>403
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>503
                </p>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} to="/projects/Origin3/3">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={style.aptoCard} onClick={() => handleApto(4)}>
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <p className={style.typeApto}>TIPO 4</p>
                <p className={style.typeAptoDescription}>
                  32.71 M2 - Área Privada
                </p>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684882717/Aptos%20Origin3/Apto_Tipo4_jsjgoh_1_hpc1zs.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <p className={style.availabilityTextApto}>Disponiblidad</p>
              <div className={style.numberApartmentsGrid}>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>204
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>304
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>404
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>504
                </p>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} to="/projects/Origin3/4">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={style.aptoCard} onClick={() => handleApto(5)}>
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <p className={style.typeApto}>TIPO 5</p>
                <p className={style.typeAptoDescription}>
                  23.31 M2 - Área Privada
                </p>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684882935/Aptos%20Origin3/Apto_Tipo5_ovi1ye_dfmchh.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <p className={style.availabilityTextApto}>Disponiblidad</p>
              <div className={style.numberApartmentsGrid}>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>205
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>305
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>405
                </p>
                <p className={style.availabilityLabelApto}>
                  <p className={style.greenCircleApto}></p>505
                </p>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} to="/projects/Origin3/5">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Origin3;
