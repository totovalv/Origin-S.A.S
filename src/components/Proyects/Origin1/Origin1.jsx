import { useEffect, useState } from "react";
import ContactUs from "../../ContactUs/ContactUs";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import Loader from "../../Loader/Loader";

import style from "./style.module.css";
import { Element, scroller } from "react-scroll";
function Origin1() {
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(false);
  useEffect(() => {

    setTimeout(() => {
      setLoading(true);
    }, 500);
    setData({
      default:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684178437/Origin1%20Acabados/Origin1_A1_qn0ztg.jpg",
      photo2:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684178438/Origin1%20Acabados/Origin1_A2_t7zkrw.jpg",
      photo3:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684178437/Origin1%20Acabados/Origin1_A3_vltb1o.jpg",
      photo4:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684178437/Origin1%20Acabados/Origin1_A4_gsp2dh.jpg",
      photo5:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684178438/Origin1%20Acabados/Origin1_A5_qa4kmo.jpg",
      photo6:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684178438/Origin1%20Acabados/Origin1_A6_oebx0p.jpg",
      photo7:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684178438/Origin1%20Acabados/Origin1_A7_nvbndo.jpg",
      photo8:
        "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684178441/Origin1%20Acabados/Origin1_A8_sexxaf.jpg",
    });
  }, [loading]);


  const scrollToSection = () => {
    scroller.scrollTo("sectionCarousel", {
      smooth: true,
      offset: -50,
    });
  };
  // console.log(loading);
  return (
    <div >
       <Loader isLoading={loading} />
          <Navbar />
          <div className={style.introduction}>
            <div className={style.titleInformation}>
              <div className={style.principalTitle}>
                <h1>ORIGIN I</h1>
              </div>
              <div className={style.infoTable}>
                <img
                  src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177148/Origin1%20Acabados/info_table_a6rzda.png"
                  alt="info_table"
                />
              </div>
            </div>
            <Element name="sectionCarousel" className={style.sectionHome}>
              <div>
                <div className={style.carouselHome}>
                  <input type="radio" name="slides" id="slide-1" />
                  <input type="radio" name="slides" id="slide-2" />
                  <input type="radio" name="slides" id="slide-3" />
                  <input type="radio" name="slides" id="slide-4" />
                  <input type="radio" name="slides" id="slide-5" />
                  <input type="radio" name="slides" id="slide-6" />
                  <input type="radio" name="slides" id="slide-7" />
                  <input type="radio" name="slides" id="slide-8" />

                  <ul className={style.carousel__slides}>
                    <li className={style.carousel__slide}>
                      <figure>
                        <div>
                          <img src={data.default} alt="" />
                        </div>
                      </figure>
                    </li>
                    <li className={style.carousel__slide}>
                      <figure>
                        <div>
                          <img src={data.photo2} alt="" />
                        </div>
                      </figure>
                    </li>
                    <li className={style.carousel__slide}>
                      <figure>
                        <div>
                          <img src={data.photo3} alt="" />
                        </div>
                      </figure>
                    </li>
                    <li className={style.carousel__slide}>
                      <figure>
                        <div>
                          <img src={data.photo4} alt="" />
                        </div>
                      </figure>
                    </li>
                    <li className={style.carousel__slide}>
                      <figure>
                        <div>
                          <img src={data.photo5} alt="" />
                        </div>
                      </figure>
                    </li>
                    <li className={style.carousel__slide}>
                      <figure>
                        <div>
                          <img src={data.photo6} alt="" />
                        </div>
                      </figure>
                    </li>
                    <li className={style.carousel__slide}>
                      <figure>
                        <div>
                          <img src={data.photo7} alt="" />
                        </div>
                      </figure>
                    </li>
                    <li className={style.carousel__slide}>
                      <figure>
                        <div>
                          <img src={data.photo8} alt="" />
                        </div>
                      </figure>
                    </li>
                  </ul>
                  <ul
                    onClick={scrollToSection}
                    className={style.carousel__thumbnails}
                  >
                    <li>
                      <label htmlFor="slide-1">
                        <img src={data.default} alt="" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="slide-2">
                        <img src={data.photo2} alt="" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="slide-3">
                        <img src={data.photo3} alt="" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="slide-4">
                        <img src={data.photo4} alt="" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="slide-5">
                        <img src={data.photo5} alt="" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="slide-6">
                        <img src={data.photo6} alt="" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="slide-7">
                        <img src={data.photo7} alt="" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="slide-8">
                        <img src={data.photo8} alt="" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </Element>
          </div>
          <div className={style.ubicacion}>
            <h1 className={style.titleUbicacion}>UBICACIÓN </h1>

            <div className={style.map}>
              <iframe
                title="map"
                className={style.dimesionMap}
                src="https://www.google.com/maps/d/embed?mid=1u_s5epZehtKHxue2i50YuUfQJDJGNsU&ehbc=2E312F"
              ></iframe>
            </div>
          </div>
          <div className={style.container}>
            <div className={style.titleEspaciosDisp}>ESPACIOS DISPONIBLES </div>
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

              <div className={style.itemIcon}>
                <img
                  className={style.icon}
                  src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/trash_mb6rzo.png"
                  alt=""
                />
                <div className={style.iconsText}>SHUT DE BASURAS</div>
              </div>
            </div>
          </div>
          <div className={style.timeline}>
            <img
              className={style.imgTimeline}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177153/Origin1%20Acabados/timeline_tfbnym.jpg"
              alt="timeline"
            />
          </div>
          <div className={style.carouselWrapperBuildings}>
            <div className={style.carouselContainerBuildings}>
              <div className={style.carouselBuildings}>
                <div className={style.imageOne}></div>
                <div className={style.imageTwo}></div>
              </div>
            </div>
          </div>
          <ContactUs />
          <Footer />
 
      
    </div>
  );
}

export default Origin1;
