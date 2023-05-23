import ContactUs from "../../ContactUs/ContactUs";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import style from "./style.module.css";

function Origin2() {
  return (
    <div>
      <Navbar />
      <div className={style.head}>
        <img
          className={style.renderImg}
          src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684187694/Origin3%20Aleda%C3%B1os/vectorOrigin3_uqspta.png"
          alt=""
        />
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
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684795382/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/45__u6hmcy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.knowOurBuildings}>
        {" "}
        <img
          className={style.buildingLogo}
          src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684794554/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/building_logo_biztci.png"
          alt=""
        />
        <div className={style.containTitleBlueBar}>
          <p className={style.knowTheText}>CONOCE LOS</p>
          <div className={style.gridtextBlueBar}>
            <p className={style.apartments}>APARTAMENTOS</p>
            <p>MODELO</p>
          </div>
        </div>
        <button className={style.seeMoreBtn}>Ver más</button>
      </div>
      <div className={style.timeline}>
        <img
          className={style.imgTimeline}
          src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684795405/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/linea_de_tiempo-origin3_x8fnvi.jpg"
          alt="timeline"
        />
      </div>
      <div className={style.titleContain}>
        <p className={style.ubicationTitle}>UBICACIÓN</p>
        <hr className={style.titleUnderline}></hr>
      </div>
      <div className={style.ubicationContainer}>
        <img
          className={style.ubicationImg}
          src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684797331/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/MAPAlugares_1_estge7.jpg"
          alt=""
        />
        <img
          className={style.ubicationImg}
          src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684797331/Origin3%20Aleda%C3%B1os/Origin3%20Acabados/MAPAlugares_1_estge7.jpg"
          alt=""
        />
      </div>
      <p className={style.availableSpacesTitle}>ESPACIOS DISPONIBLES</p>
      <>
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
            <img className={style.iconBbq} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/bbq_qo1d2p.png" alt="" />
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
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/bicycle_uuwow3.png" alt="" />
            <div className={style.iconsText}>BICICLETERO</div>
          </div>
          <div className={style.itemIcon}>
            <img className={style.icon} src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684182823/icons/trash_mb6rzo.png" alt="" />
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
      <p className={style.titleModelApartments}>APARTAMENTOS MODELO</p>
      <hr className={style.titleUnderlineModelApartments}></hr>
      <hr className={style.titleUnderlineModelApartmentsSoft}></hr>

      

      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Origin2;
