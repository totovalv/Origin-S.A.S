import { Element, scroller } from "react-scroll";
import ContactUs from "../../ContactUs/ContactUs";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import {AiFillYoutube} from 'react-icons/ai'
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
      soledadNorte:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688094493/760x501_La-Soledad-Norte_bak2mj.jpg",
      mallTitan:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690657813/Principal%20Place/Titan_1_o3qysp.jpg",
      mallDiverPlaza:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1687026899/Origin3%20Aleda%C3%B1os/entro_Comercial_Diver_Plaza_skeo74.jpg",
      mallPortal:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1687027869/Origin3%20Aleda%C3%B1os/portal_80_t35ytb.jpg",
      parks:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1686010990/Aptos%20Origin3/4_home_G2-1_xjw8lk.jpg",
      marketJumbo:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690654143/Principal%20Place/jumbo_bx83zz.jpg",
      marketMakro:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690654162/Principal%20Place/makro_sh7xes.jpg",
      marketD1:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690654025/Principal%20Place/D1_necyc7.jpg",
      marketAra:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690653985/Principal%20Place/Ara_q9k6hp.jpg",
      marketDollarCity:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690654074/Principal%20Place/dollar_qf5e5y.jpg",
      marketFerias:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1687057295/feriasw_fsdnfy.jpg",
      marketQuirigua:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1687057282/qur_miezmg.jpg",
      education:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690654804/Principal%20Place/uniminuto_x529yj.jpg",
      schoolPalestina:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1687058642/colegio_p_v1bsiw.jpg",
      schoolTabora:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1687058933/tabora_pehqf1.jpg",
      schoolTurbai:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1687059144/turbai_itr5x8.jpg",
      schoolIsaac:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688085245/colegioisaa_uo1uul.jpg",
      schoolSanJose:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688085254/colegio_san_jose_ghgqey.jpg",
      othersCai:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690655496/Principal%20Place/cai_eia2d0.jpg",
      othersUnidad:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690655414/Principal%20Place/URI_v09evq.jpg",
      othersMuseo:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690655652/Principal%20Place/museo_contempor%C3%A1neo_lsf125.jpg",
      othersNotaria:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690655710/Principal%20Place/notaria_gohikx.jpg",
      othersEstacionCali:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690655556/Principal%20Place/estacion_cali_kflirj.jpg",
      othersEstacion:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690655601/Principal%20Place/estacion_hw5uhf.jpg",
      parkTabora:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1686010990/Aptos%20Origin3/5_home_G2-1_o5rbpl.jpg",
      parkLaGranja:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688089843/parque_la_granja_ue3l0g.jpg",
      parkLaAlmeria:
        "https://res.cloudinary.com/civico/image/upload/c_fit,f_auto,fl_lossy,h_1200,q_auto:low,w_1200/v1508812174/entity/image/file/55e/000/59eea58d9d2683ce3500055e.jpg",
      parkLiga:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688091310/liga_egdyqw.jpg",
      hospitalSantaMaria:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690656570/Principal%20Place/6_home_G2-1_qx3y0x.jpg",
      hospitalEngativa:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690656433/Principal%20Place/hospital_engativa_cgt62u.jpg",
      hospitalShaio:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690656460/Principal%20Place/shaio_ecptl4.jpg",
      sportsCenters:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1686010990/Aptos%20Origin3/5_home_G2-1_o5rbpl.jpg",
      renderOrigin3:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684187694/Origin3%20Aleda%C3%B1os/vectorOrigin3_uqspta.png",
      type1:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688333587/tipo-1_sg0hst.jpg",
      type2:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688333587/tipo-2_u6uvhv.jpg",
      type3:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688333587/tipo-3_sxggq8.jpg",
      type4:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688333587/tipo-4_tsa72q.jpg",
      type5:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688333587/tipo-5_zr0fa9.jpg",
      porcentage:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688334981/5_wacorj.png",
      buildingLogo:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684794554/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/building_logo_biztci.png",
      timeline:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688334981/origin-III-1_uhkqvt.png",

      map: "https://res.cloudinary.com/dxajrtcwk/image/upload/v1688334981/MAPA-sitioscercanos_flqmet.jpg",
      reception:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690653570/Aptos%20Origin3/PRIMER_NIVEL_xzoizv.png",
      cellar:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1690653613/Aptos%20Origin3/SEMISOTANO_hzzc88.png",
      terrace:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1691718765/CUBIERTAO_kgqllr.png",
    });
  }, []);
  const mediaQuery1062px = window.matchMedia("(width<=768px)");
  const imagesMallMarkert = [
    data.marketQuirigua,
    data.mallDiverPlaza,
    data.marketAra,
    data.mallTitan,
    data.mallPortal,
    data.marketJumbo,
    data.marketD1,
    data.marketDollarCity,
    data.marketMakro,
    data.marketFerias,
  ];

  const imagesEducation = [
    data.education,
    // data.schoolPalestina,
    data.schoolTabora,
    data.schoolTurbai,
    // data.schoolIsaac,
    data.schoolSanJose,
  ];

  const imagesParks = [
    data.parkTabora,
    data.parkLaGranja,
    data.parkLaAlmeria,
    data.parkLiga,
  ];

  const imagesOthers = [
    data.othersMuseo,
    data.othersCai,
    data.othersUnidad,
    data.othersNotaria,
    data.othersEstacion,
    data.othersEstacionCali,
  ];

  const imagesHospital = [
    data.hospitalSantaMaria,
    data.hospitalEngativa,
    data.hospitalShaio,
  ];

  const [currentImageIndexMarket, setCurrentImageIndexMarket] = useState(0);
  const [currentImageIndexEducation, setCurrentImageIndexEducation] =
    useState(0);

  const [currentImageIndexOthers, setCurrentImageIndexOthers] = useState(0);
  const [currentImageIndexParks, setCurrentImageIndexParks] = useState(0);
  const [currentImageIndexHospital, setCurrentImageIndexHospital] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexMarket((prevIndex) =>
        prevIndex === imagesMallMarkert.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentImageIndexEducation((prevIndex) =>
        prevIndex === imagesEducation.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentImageIndexOthers((prevIndex) =>
        prevIndex === imagesOthers.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentImageIndexParks((prevIndex) =>
        prevIndex === imagesParks.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentImageIndexHospital((prevIndex) =>
        prevIndex === imagesHospital.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleApto = (e) => {
    scrollToLeftSide();
    if (e == 1) setCurrentPhoto(data.type1);
    if (e == 2) setCurrentPhoto(data.type2);
    if (e == 3) setCurrentPhoto(data.type3);
    if (e == 4) setCurrentPhoto(data.type4);
    if (e == 5) setCurrentPhoto(data.type5);
  };
  const mediaQuery768px = window.matchMedia("(width<=768px)");
  const mediaQuery414px = window.matchMedia("(width<=414px)");

  const scrollToSection = () => {
    scroller.scrollTo("sectionRef", {
      smooth: true,
      // offset: 1,
    });
  };
  const scrollToSectionCarousel = () => {
    scroller.scrollTo("slides", {
      smooth: true,
      offset: -50,
    });
  };
  const scrollToLeftSide = () => {
    if (mediaQuery768px.matches) {
      scroller.scrollTo("topSideView", {
        smooth: true,
        offset: -100,
      });
    } else {
      scroller.scrollTo("leftSideRef", {
        smooth: true,
        offset: -100,
      });
    }
  };
  return (
    <div>
      <Loader isLoading={loading} />
      <Navbar />
      <div className={style.head}>
        <img className={style.renderImg} src={data.renderOrigin3} alt="" />
        <div>
          <div className={style.title}>
            <div className={style.textTitle}>ORIGIN 3</div>
          </div>
          <div className={style.newContent}>
            <div className={style.new}>Nuevo </div>
            <div className={style.project}>proyecto</div>
          </div>
          <div className={style.porcentage}>
            <div className={style.weGolikeThis}>Así vamos</div>
            <div className={style.porcentageContainer}>
              <div className={style.porcentageNumber}>5%</div>
              <div className={style.buildingPart}>Demolición</div>

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
          <div className={style.knowTheText}>CONOCE LOS</div>
          <div className={style.gridtextBlueBar}>
            <div className={style.apartments}>APARTAMENTOS</div>
            <div>TIPO</div>
          </div>
        </div>
        <button onClick={scrollToSection} className={style.seeMoreBtn}>
          Ver más
        </button>
      </div>

      <div className={style.detailSection}>
        <div className={style.informationBox}>
          <div className={style.firstBox}>
            <h5> Direccion: Calle 77A #83-31, Bogotá,Colombia</h5>
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
              <h5>Área del lote: 300 mt2(14*23.6mts)</h5>
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
                      <h1 className={style.interestSites}>
                        Sitios de interés:{" "}
                      </h1>
                      <ul>
                        <label htmlFor="slide-2">
                          <li className={style.unorderListMenu}>
                            Centros Comerciales y comercio
                          </li>
                        </label>
                        <label htmlFor="slide-3">
                          <li className={style.unorderListMenu}>Educación</li>
                        </label>

                        <label htmlFor="slide-5">
                          <li className={style.unorderListMenu}>
                            Parques y Gimnasios
                          </li>
                        </label>
                        <label htmlFor="slide-6">
                          <li className={style.unorderListMenu}>Salud</li>
                        </label>
                        <label htmlFor="slide-4">
                          <li className={style.unorderListMenu}>Otros</li>
                        </label>
                      </ul>
                    </figcaption>
                    <div>
                      <img src={data.soledadNorte} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Comercio </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a href="https://www.titanplaza.com/" target="blank">
                            Titan Plaza (1.9 km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.diverplaza.com/nosotros"
                            target="blank"
                          >
                            Diver Plaza (2.3 km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://www.portal80.com.co/" target="blank">
                            Portal 80 (2.4 km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="http://www.primaveraplaza.com/home"
                            target="blank"
                          >
                            Primavera Plaza Comercial (850 mts)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://www.tiendasjumbo.co/" target="blank">
                            Jumbo Calle 80 (2.2 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://tienda.makro.com.co/" target="blank">
                            Makro (2.2 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://domicilios.tiendasd1.com/"
                            target="blank"
                          >
                            Tiendas D1 Soledad Norte y La Granja (650 y 750 mts)
                          </a>
                        </li>
                        {/* <li className={style.unorderList}>
                          <a href="https://aratiendas.com/" target="blank">
                            Tienda ARA La granja (550 mt)
                          </a>
                        </li> */}
                        <li className={style.unorderList}>
                          <a href="https://dollarcity.com/" target="blank">
                            Dollar City: (450 mt)
                          </a>
                        </li>
                        <li
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "default",
                          }}
                          className={style.unorderList}
                        >
                          Comercio Calle 72 (900 mt)
                        </li>
                        <li
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "default",
                          }}
                          className={style.unorderList}
                        >
                          <a
                            href="https://ipes.gov.co/plazas/ferias/"
                            target="blank"
                          >
                            Plaza Las Ferias (2.4 Km)
                          </a>
                        </li>
                        <li
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "default",
                          }}
                          className={style.unorderList}
                        >
                          <a
                            href="https://ipes.gov.co/plazas/quirigua/"
                            target="blank"
                          >
                            Plaza Quirigua (2.4 Km)
                          </a>
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          <div>
                            {" "}
                            <p name="carousel">Volver</p>{" "}
                          </div>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img
                        src={imagesMallMarkert[currentImageIndexMarket]}
                        alt=""
                      />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Educación </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a href="https://www.uniminuto.edu/" target="blank">
                            Universidad Minuto de Dios (1.7 km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.colegiolapalestina.edu.co/"
                            target="blank"
                          >
                            Colegio Palestina Zona A (1.0 km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.redacademica.edu.co/colegios/colegio-tabora-ied"
                            target="blank"
                          >
                            Colegio Tabora (1.1 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://colegionydiaquintero.jimdofree.com/"
                            target="blank"
                          >
                            Colegio Nydia Quintero de Turbay (1.1 Km)
                          </a>
                        </li>
                        <li
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "default",
                          }}
                          className={style.unorderList}
                        >
                          Colegio Jorge Isaacs I.E.D (1.3 Km)
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.redacademica.edu.co/colegios/colegio-san-jose-norte-ied"
                            target="blank"
                          >
                            Colegio San Jose Norte (500 mt)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.colegiosminutodedios.edu.co/cemid/index.php"
                            target="blank"
                          >
                            Colegio Minuto De Dios (1.4 Km)
                          </a>
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          {" "}
                          <div>
                            {" "}
                            <p name="carousel">Volver </p>{" "}
                          </div>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img
                        src={imagesEducation[currentImageIndexEducation]}
                        alt=""
                      />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Otras </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a
                            href="https://co.todosnegocios.com/cai-de-santa-mar%C3%ADa-del-lago-5-2247211"
                            target="blank"
                          >
                            CAI Santa Maria del Lago (1.1 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://bogota.gov.co/servicios/puntos-de-atencion/unidades-de-reaccion-inmediata-uri-granja-engativa-penal-ii"
                            target="blank"
                          >
                            URI Engativá (500 mt)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.notaria67bogota.com.co/sitio/"
                            target="blank"
                          >
                            Notaria 67 (900 mt)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://notaria70bogota.com/" target="blank">
                            Notaria 70 (2.1 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.notaria51bogota.com/presentation"
                            target="blank"
                          >
                            Notaria 51 (1.9 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="http://www.engativa.gov.co/" target="blank">
                            Alcaldía Local Engativá (2.0 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          Estacion Trasmilenio La Granja (500 mt){" "}
                        </li>
                        <li className={style.unorderList}>
                          Estacion Trasmilenio Av. Cali (550 mt){" "}
                        </li>
                        <li className={style.unorderList}>
                          Museo de arte contemporáneo (1.7 km){" "}
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          <div>
                            {" "}
                            <p name="carousel">Volver </p>{" "}
                          </div>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img src={imagesOthers[currentImageIndexOthers]} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Parques y Gimnasios </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.zonabogotadc.com/2020/03/parque-estadio-tabora-engativa-bogota.html"
                            target="blank"
                          >
                            Parque Tabora (1.2 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.ambientebogota.gov.co/parque-ecologico-distrital-humedal-santa-maria-del-lago"
                            target="blank"
                          >
                            Parque Humedal Santa Maria del Lago (1.4 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://co.latinoplaces.com/bogota/parque-barrio-la-granja-304888"
                            target="blank"
                          >
                            Parque Barrio La Granja (450 mt)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://moovitapp.com/index/es-419/transporte_p%C3%BAblico-Parque_P%C3%BAblico_San_Jose_de_la_Granja-Bogota-site_25122045-762"
                            target="blank"
                          >
                            Parque San Jose La Granja (650 mts)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://soundcloud.com/user-305883303/paisaje-sonoro-parque-aguas-claras-localidad-de-engativa-bogota"
                            target="blank"
                          >
                            Parque Aguas Claras (750 mt)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://moovitapp.com/index/es-419/transporte_p%C3%BAblico-Parque_Almer%C3%ADa-Medellin-site_30416199-1642"
                            target="blank"
                          >
                            Parque La Almeria (750 mts)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.ligagimnasiabogota.com.co/"
                            target="blank"
                          >
                            Liga De Gimnasia De Bogotá (450 mt)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://gimnasios.guiabbb.co/Quind%C3%ADo/Parque_de_La_Soledad/"
                            target="blank"
                          >
                            Gimnasios, ver mas...
                          </a>
                        </li>
                        {/* <li className={style.unorderList}>
                          <a
                            href="https://www.google.com/maps/place/La+Granja+Public+Park/@4.6979802,-74.1010539,19.08z/data=!4m6!3m5!1s0x8e3f9b37e176bb6f:0xc7ae941226a07276!8m2!3d4.6978674!4d-74.1005495!16s%2Fg%2F11b7hfpbyq?entry=ttu"
                            target="blank"
                          >
                            Spirit (700 mt)
                          </a>
                        </li> */}
                        {/* <li className={style.unorderList}>
                          <a
                            href="https://www.google.com/maps/place/La+Granja+Public+Park/@4.6979802,-74.1010539,19.08z/data=!4m6!3m5!1s0x8e3f9b37e176bb6f:0xc7ae941226a07276!8m2!3d4.6978674!4d-74.1005495!16s%2Fg%2F11b7hfpbyq?entry=ttu"
                            target="blank"
                          >
                            Smart Fit Calle 80 (2.2 Km)
                          </a>
                        </li> */}
                        {/* <li className={style.unorderList}>
                          <a
                            href="https://www.google.com/maps/place/La+Granja+Public+Park/@4.6979802,-74.1010539,19.08z/data=!4m6!3m5!1s0x8e3f9b37e176bb6f:0xc7ae941226a07276!8m2!3d4.6978674!4d-74.1005495!16s%2Fg%2F11b7hfpbyq?entry=ttu"
                            target="blank"
                          >
                            FIT360 (1.1 Km)
                          </a>
                        </li> */}
                        {/* <li className={style.unorderList}>
                          <a
                            href="https://www.google.com/maps/place/La+Granja+Public+Park/@4.6979802,-74.1010539,19.08z/data=!4m6!3m5!1s0x8e3f9b37e176bb6f:0xc7ae941226a07276!8m2!3d4.6978674!4d-74.1005495!16s%2Fg%2F11b7hfpbyq?entry=ttu"
                            target="blank"
                          >
                            BHB GYM (1.2 Km)
                          </a>
                        </li> */}
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          <div>
                            {" "}
                            <p name="carousel"> Volver </p>{" "}
                          </div>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img src={imagesParks[currentImageIndexParks]} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <figcaption>
                      <h1>Salud </h1>
                      <ul>
                        <li className={style.unorderList}>
                          <a
                            href="https://www.clinicacolsanitas.com/web/clinica-infantil-santa-maria-del-lago/urgencias"
                            target="blank"
                          >
                            Clínica Santa Maria del Lago (1.3 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://bogota.gov.co/servicios/puntos-de-atencion/unidad-medica-hospitalaria-especializada-en-salud-engativa-calle-80"
                            target="blank"
                          >
                            Hospital Engativá (2.4 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a
                            href="https://enbogota.com.co/sitios/hospital-engativa-cami-ferias"
                            target="blank"
                          >
                            Hospital Engativá CAMI Ferias (2.6 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://www.nuevaeps.com.co/" target="blank">
                            Nueva EPS (1.3 Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://medimas.com.co/" target="blank">
                            Medimas EPS (750 mt Km)
                          </a>
                        </li>
                        <li className={style.unorderList}>
                          <a href="https://www.shaio.org/" target="blank">
                            Clínica SHAIO (4.2 Km)
                          </a>
                        </li>
                      </ul>
                      <span className={style.credit}>
                        <label htmlFor="slide-1">
                          <div>
                            {" "}
                            <p name="carousel">Volver </p>{" "}
                          </div>
                        </label>
                      </span>
                    </figcaption>
                    <div>
                      <img
                        src={imagesHospital[currentImageIndexHospital]}
                        alt=""
                      />
                    </div>
                  </figure>
                </li>
              </ul>
              <ul
                onClick={scrollToSectionCarousel}
                className={style.carousel__thumbnails}
              >
                <li>
                  <label htmlFor="slide-1">
                    <img src={data.soledadNorte} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-2">
                    <img src={data.mallTitan} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-3">
                    <img src={data.education} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-4">
                    <img src={data.othersMuseo} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-5">
                    <img src={data.parkTabora} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-6">
                    <img src={data.hospitalSantaMaria} alt="" />
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
        <div className={style.ubicationTitle}>UBICACIÓN</div>
        <hr className={style.titleUnderline}></hr>
      </div>
      <div className={style.ubicationContainer}>
        <img className={style.ubicationImg} src={data.map} alt="" />
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1Es9h5eKHodOCCr0z35MtOwX_TR_ogJQ&ehbc=2E312F"
          className={style.mapOrigin3}
        ></iframe>
      </div>
      <div className={style.availableSpacesTitle}>ESPACIOS DISPONIBLES</div>
      <>
        <div className={style.iconsGrid}>
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
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/reception_rnsgue.png"
              alt=""
            />
            <div className={style.iconsText}>RECEPCIÓN</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/people_gqo985.png"
              alt=""
            />
            <div className={style.iconsText}>SALÓN COMUNAL</div>
          </div>
        </div>

        <div className={style.iconsGrid}>
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
              className={style.iconBbq}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/bbq_qo1d2p.png"
              alt=""
            />
            <div className={style.iconsText}>ZONA BBQ </div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/bicycle_uuwow3.png"
              alt=""
            />
            <div className={style.iconsText}>BICICLETERO</div>
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
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1688489485/carCellar_tc7skq.png"
              alt=""
            />
            <div className={style.iconsText}>SÓTANO CON RAMPA LEVADIZA</div>
          </div>
          <div className={style.itemIcon}>
            <img
              className={style.icon}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/p_vcv9ie.png"
              alt=""
            />
            <div className={style.iconsText}>PARQUEADEROS PRIVADOS</div>
          </div>
        </div>
      </>
      <div className={style.titleModelApartmentsContain}>
        <Element className={style.titleModelApartments} name="sectionRef">
          APARTAMENTOS TIPO
        </Element>
        <hr className={style.titleUnderlineModelApartments}></hr>
        <hr className={style.titleUnderlineModelApartmentsSoft}></hr>
      </div>

      <div className={style.apartmentsGrid}>
        <div className={style.leftSideContainer}>
          <div className={style.availableLeftSideGrid}>
            <div className={style.availabilityText}>Disponibilidad</div>
            <div className={style.availabilityLabelContainer}>
              <div className={style.availabilityLabel}>
                <div className={style.greenCircle}></div>Si esta disponible
              </div>
              <div className={style.availabilityLabel}>
                <div className={style.redCircle}></div>No esta disponible
              </div>
            </div>
          </div>
          <img
            className={style.imgAptos}
            name="topSideView"
            src={currentPhoto}
            alt="aptos"
          />
        </div>

        <div className={style.aptosContainer}>
          <div className={style.aptoCard}>
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <div className={style.typeApto}>TIPO 1</div>
                <div className={style.typeAptoDescription}>
                  45.45 M2 - Área Privada
                </div>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1688170206/Aptos%20Origin3/Apto_Tipo1-recorte_txe0jj.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <button
                className={style.availabilityTextApto}
                onClick={() => handleApto(1)}
              >
                Ver Ubicación
              </button>
              {/* SI SE CAMBIA LA CLASE "style.greenCircleApto" POR "style.redCircle" SE MODIFICARA EL COLOR A ROJO 
              COLOR DISPONIBILIDAD DE APARTAMENTOS*/}
              <div className={style.numberApartmentsGrid}>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>201
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>301
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>401
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>501
                </div>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} target="_blank" to="/projects/Origin3/1">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className={style.aptoCard}>
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <div className={style.typeApto}>TIPO 2</div>
                <div className={style.typeAptoDescription}>
                  61.73 M2 - Área Privada
                </div>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1688170206/Aptos%20Origin3/Apto_Tipo2-recorte_znczp1.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <button
                className={style.availabilityTextApto}
                onClick={() => handleApto(2)}
              >
                Ver Ubicación
              </button>
              <div className={style.numberApartmentsGrid}>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>202
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>302
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>402
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>502
                </div>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} target="_blank" to="/projects/Origin3/2">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={style.aptoCard} name="leftSideRef">
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <div className={style.typeApto}>TIPO 3</div>
                <div className={style.typeAptoDescription}>
                  45.45 M2 - Área Privada
                </div>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1688170206/Aptos%20Origin3/Apto_Tipo3-recorte_lcancf.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <button
                className={style.availabilityTextApto}
                onClick={() => handleApto(3)}
              >
                Ver Ubicación
              </button>
              <div className={style.numberApartmentsGrid}>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>203
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>303
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>403
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>503
                </div>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} target="_blank" to="/projects/Origin3/3">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={style.aptoCard}>
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <div className={style.typeApto}>TIPO 4</div>
                <div className={style.typeAptoDescription}>
                  32.71 M2 - Área Privada
                </div>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1688170206/Aptos%20Origin3/Apto_Tipo4-recorte_tlosfp.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <button
                className={style.availabilityTextApto}
                onClick={() => handleApto(4)}
              >
                Ver Ubicación
              </button>
              <div className={style.numberApartmentsGrid}>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>204
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>304
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>404
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>504
                </div>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle} target="_blank" to="/projects/Origin3/4">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={style.aptoCard}>
            <div className={style.aptoTopGrid}>
              <div className={style.textApto}>
                <div className={style.typeApto}>TIPO 5</div>
                <div className={style.typeAptoDescription}>
                  23.31 M2 - Área Privada
                </div>
              </div>
              <img
                className={style.aptoImg}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1688170206/Aptos%20Origin3/Apto_Tipo5-recorte_jagxld.jpg"
                alt=""
              />
            </div>
            <div className={style.aptoBottomGrid}>
              <button
                className={style.availabilityTextApto}
                onClick={() => handleApto(5)}
              >
                Ver Ubicación
              </button>
              <div className={style.numberApartmentsGrid}>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>205
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>305
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>405
                </div>
                <div className={style.availabilityLabelApto}>
                  <div className={style.greenCircleApto}></div>505
                </div>
                <button className={style.seeMoreBtnApto}>
                  <Link className={style.linkStyle}  to="/projects/Origin3/5">
                    Ver más
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.parking}>
        <div className={style.parkingItem}>
          <div className={style.parkingTitle}>Recepción y primer piso <br></br><a  target="_blank"className={style.linkYoutube} href="https://www.youtube.com/embed/DpwiR0N0SIU">Ver Video <AiFillYoutube className={style.iconYoutube}  size={20}/></a></div>
          <img
            src={data.reception}
            className={style.parkingPhotos}
            alt="reception"
          />
        </div>

        <div className={style.parkingItem}>
          <div className={style.parkingTitle}>
            Terraza, zona verde y BBQ 2D-3D <br/><a  className={style.linkYoutube}  target="_blank"href="https://www.youtube.com/embed/zxOFmJ2DgCA">Ver Video<br/><AiFillYoutube className={style.iconYoutube}  size={20}/></a>
          </div>
          <img src={data.terrace} className={style.roofPhoto} alt="" />
        </div>
        <div className={style.parkingItem}>
          <div className={style.parkingTitle}>Semisotano <br></br><a className={style.linkYoutube} target="_blank" href="https://www.youtube.com/embed/DpwiR0N0SIU">Ver Video<AiFillYoutube className={style.iconYoutube}  size={20}/> </a></div>
          <img src={data.cellar} className={style.parkingPhotos2} alt="" />
        </div>
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
}

export default Origin3;
