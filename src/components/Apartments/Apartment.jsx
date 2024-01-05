import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from "./style.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Apartment = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [orderSelect, setOrderSelect] = useState([]);
  let types = [
    {
      name: 1,
      area: "45.56 M2 Area Privada",
      areaC: "49.08 M2 Area Construida",
      rooms: " 2 alcobas",
      bath: " 1 baño",
      img: "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177143/Aptos%20Origin3/Apto_Tipo1_kdzsns.jpg",
      parqueadero: "Parqueadero Privado para Automovil",
      deposite: "Depósito opcional",
    },
    {
      name: 2,
      area: "61.73 M2 - Area Privada",
      areaC: "66.2 M2 - Area Construida",
      rooms: " 3 alcobas",
      bath: " 2 baños",
      img: "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177143/Aptos%20Origin3/Apto_Tipo1_kdzsns.jpg",
      parqueadero: "Parqueadero Privado para Automovil",
      deposite: "Depósito opcional",
    },
    {
      name: 3,
      area: "45.45 M2 - Area Privada",
      areaC: "48.94 M2 - Area Construida",
      rooms: " 2 alcobas",
      bath: " 1 baño",
      img: "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177143/Aptos%20Origin3/Apto_Tipo1_kdzsns.jpg",
      parqueadero: "Parqueadero Privado para Automovil",
      deposite: "Depósito opcional",
    },
    {
      name: 4,
      area: "32.71 M2 - Area Privada",
      areaC: "36.28 M2 - Area Construida",
      rooms: " 1 alcoba",
      bath: " 1 baño",
      img: "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177143/Aptos%20Origin3/Apto_Tipo1_kdzsns.jpg",
      parqueadero: "Parqueadero Privado para Moto",
    },
    {
      name: 5,
      area: "23.31 M2 - Area Privada  ",
      areaC: "25.43 M2 - Area Construida",
      rooms: " 1 alcoba",
      bath: " 1 baño",
      img: "https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177143/Aptos%20Origin3/Apto_Tipo1_kdzsns.jpg",
      parqueadero: "Parqueadero Privado para Moto",
    },
  ];

  useEffect(() => {
    let newOrderSelect = [1, 2, 3, 4, 5].filter(
      (option) => option !== Number(id)
    );
    setOrderSelect(newOrderSelect);
  }, [id]);


  const analyticsId = '421830914';

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analyticsId, {
      'page_path': `/projects/Origin3/${id}`,
    });
  }

  const optionHandle = (path) => {
    let test = `/projects/Origin3/${path}`;
    navigate(test);
  };
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    optionHandle(selectedOption);
  };
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
            <select
              className={style.type}
              name="types"
              id=""
              onChange={handleSelectChange}
              value={id}
            >
              <option className={style.optionDefault} selected>
                TIPO {id}
              </option>
              {orderSelect.map((option, index) => (
                <option
                  className={style.optionSelect}
                  key={index}
                  value={option}
                >
                  TIPO {option}
                </option>
              ))}
            </select>
            <div className={style.descriptionData}>
              {" "}
              {types.map((e) => e.name == id && e.area)}
              <br />
              {types.map((e) => e.name == id && e.areaC)}
            </div>
          </div>
        </div>
        <div className={style.gridContainer}>
          <div className={style.containerPhotoApto}>
            {id == 1 ? (
              <img
                className={style.imgApto}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1686598925/Aptos%20Origin3/Final%20Aptos/APARTAMENTO_TIPO_1_fbmqpd.png"
                alt=""
              />
            ) : id == 2 ? (
              <img
                className={style.imgApto}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1686598923/Aptos%20Origin3/Final%20Aptos/APARTAMENTO_TIPO_2_udqdjj.png"
                alt=""
              />
            ) : id == 3 ? (
              <img
                className={style.imgApto}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1686598925/Aptos%20Origin3/Final%20Aptos/APARTAMENTO_TIPO_5_alsqr8.png"
                alt=""
              />
            ) : id == 4 ? (
              <img
                className={style.imgApto}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1686598923/Aptos%20Origin3/Final%20Aptos/APARTAMENTO_TIPO_4_cbcztu.png"
                alt=""
              />
            ) : (
              <img
                className={style.imgApto}
                src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1686598925/Aptos%20Origin3/Final%20Aptos/APARTAMENTO_TIPO_3_l2tdkj.png"
                alt=""
              />
            )}
          </div>
          <div className={style.videoContain}>
            {id == 1 ? (
              <iframe
                className={style.video}
                src="https://www.youtube.com/embed/cEOtUqrVaDg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : id == 2 ? (
              <iframe
                className={style.video}
                src="https://www.youtube.com/embed/w85kmEOEU70"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : id == 3 ? (
              <iframe
                className={style.video}
                src="https://www.youtube.com/embed/gnwqEu62zg4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : id == 4 ? (
              <iframe
                className={style.video}
                src="https://www.youtube.com/embed/JlrCFiISbV4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                className={style.video}
                src="https://www.youtube.com/embed/H-Hn7a8IOKY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className={style.dataContainer}>
            <div className={style.dataSection}>
              <div className={style.dataSectionTitle}>Áreas disponibles</div>
              <ul className={style.ulSection}>
                <li> {types.map((e) => e.name == id && e.rooms)}</li>
                <li> Sala comedor</li>
                <li> {types.map((e) => e.name == id && e.bath)}</li>
                <li> Cocina </li>
                <li> Área de ropas</li>
              </ul>
            </div>
            <div className={style.dataSection2}>
              <div>{types.map((e) => e.name == id && e.parqueadero)} </div>
              {types.map((e, index) =>
                e.name == id && e.deposite != null ? (
                  <div key={index}> {e.deposite}</div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div>
  );
};

export default Apartment;
