import ContactUs from "../../ContactUs/ContactUs";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import style from "./style.module.css";
import { Element, scroller } from 'react-scroll';


function Origin2() {
  const scrollToSection = () => {
    scroller.scrollTo('sectionCarousel', {
      smooth: true,
      offset: -50, 
    });
  };
  return (
    <div>
      <Navbar />

      <div className={style.introduction}>
        <div className={style.titleInformation}>
          <div className={style.principalTitle}>
            <h1>ORIGIN II</h1>
          </div>
          <div className={style.infoTable}>
            <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177148/Origin2%20Acabados/info_table2_q0bpww.png" alt="" />
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
                      <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1683588779/Origin2%20Acabados/Origin2_A1_xgq5zp.jpg" alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684185276/Origin2%20Acabados/Origin2_A7_gw7jyj.jpg" alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A3_a2wxtq.jpg" alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A4_bz7eco.jpg" alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A5_ok5wyg.png" alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184945/Origin2%20Acabados/Origin2_A6_xdtyd0.jpg" alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A2_icznkh.jpg" alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A8_k3iwto.jpg" alt="" />
                    </div>
                  </figure>
                </li>
              </ul>
              <ul onClick={scrollToSection} className={style.carousel__thumbnails}>
                <li>
                  <label htmlFor="slide-1">
                    <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1683588779/Origin2%20Acabados/Origin2_A1_xgq5zp.jpg" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-2">
                    <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684185276/Origin2%20Acabados/Origin2_A7_gw7jyj.jpg" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-3">
                    <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A3_a2wxtq.jpg" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-4">
                    <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A4_bz7eco.jpg" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-5">
                    <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A5_ok5wyg.png" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-6">
                    <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184945/Origin2%20Acabados/Origin2_A6_xdtyd0.jpg" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-7">
                    <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A2_icznkh.jpg" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-8">
                    <img src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684184944/Origin2%20Acabados/Origin2_A8_k3iwto.jpg" alt="" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </Element>
      </div>

      <div className={style.ubicacion}>
        <h1 className={style.titleUbicacion}>UBICACION </h1>

        <div className={style.map}>
          <iframe
            title="map"
            className={style.dimesionMap}
            src="https://www.google.com/maps/d/embed?mid=12QCNxtQjslEqL8C4n_7foaQHWkVCLNk&ehbc=2E312F"
          ></iframe>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.titleEspaciosDisp}>ESPACIOS DISPONIBLES </div>
        <div className={style.iconsGrid}>
          <div className={style.itemIcon}>
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/p_vcv9ie.png" alt="" />
            <div className={style.iconsText}>PARQUEADEROS PRIVADOS</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/reception_rnsgue.png" alt="" />
            <div className={style.iconsText}>RECEPCION</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/people_gqo985.png" alt="" />
            <div className={style.iconsText}>SALÓN COMUNAL</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/car_bz2qbq.png" alt="" />
            <div className={style.iconsText}>ELEVADOR VEHICULAR</div>
          </div>
        </div>

        <div className={style.iconsGrid2}>
          <div className={style.itemIcon}>
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/terraza_xfxnf1.png" alt="" />
            <div className={style.iconsText}>TERRAZA</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.iconBbq} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/bbq_qo1d2p.png" alt="" />
            <div className={style.iconsText}>ZONA BBQ </div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/trash_mb6rzo.png" alt="" />
            <div className={style.iconsText}>SHUT DE BASURAS</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/bicycle_uuwow3.png" alt="" />
            <div className={style.iconsText}>BICICLETERO</div>
          </div>
        </div>
      </div>

      <div className={style.timeline}>
        <img className={style.imgTimeline} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177153/Origin2%20Acabados/timeline2_yg1wqe.jpg" alt="timeline" />
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

export default Origin2;
