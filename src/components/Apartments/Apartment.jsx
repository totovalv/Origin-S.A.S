import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./style.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Apartment = () => {
  let { id } = useParams();
  let types = [
    { name: "1", area: "(45.56 m2 Área Privada)" },
    { name: "2", area: "(61.73 M2 - Área Privada)" }, { name: "3", area: "(45.45 M2 - Área Privada)" }, { name: "4", area: "32.71 M2 - Área Privada" }, { name: "5", area: "(23.31 M2 - Área Privada)" }
  ];

  return (
    <div>
      <Navbar />
      <>
        <div className={style.title}>
          <button className={style.backBtn}>
            <Link to="/projects/Origin3" className={style.linkStyle}>
              <AiOutlineArrowLeft className={style.backArrow} />
              VOLVER
            </Link>
          </button>
          <div className={style.textData}>
            <p className={style.type}>TIPO {id}</p>
            <p className={style.descriptionData}> {types.map(e=>(e.name==id&&e.area))}</p>
          </div>
        </div>
        <div className={style.gridContainer}>
          <div className={style.dataSection}>
            <p className={style.dataSectionTitle}>Áreas disponibles</p>
            <ul className={style.ulSection}>
              <li> 2 alcobas</li>
              <li> Sala comedor</li>
              <li> 1 baño</li>
              <li> Cocina </li>
              <li> Área de ropas</li>
            </ul>
          </div>
          <div>
            <img
              className={style.imgApto}
              src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177143/Aptos%20Origin3/Apto_Tipo1_kdzsns.jpg"
              alt=""
            />
          </div>
          <div className={style.videoContain}>
            <iframe
              className={style.video}
              src="https://www.youtube-nocookie.com/embed/vyqbNFMDRGQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </>

      <Footer />
    </div>
  );
};

export default Apartment;
