import img1Slider from "../../../../assets/img/OriginI/Acabados/Origin1_A1.jpg";
import img2Slider from "../../../../assets/img/OriginI/Acabados/Origin1_A2.jpg";
import img3Slider from "../../../../assets/img/OriginI/Acabados/Origin1_A3.jpg";
import img4Slider from "../../../../assets/img/OriginI/Acabados/Origin1_A4.jpg";
import img5Slider from "../../../../assets/img/OriginI/Acabados/Origin1_A5.jpg";
import img6Slider from "../../../../assets/img/OriginI/Acabados/Origin1_A6.jpg";
import img7Slider from "../../../../assets/img/OriginI/Acabados/Origin1_A7.jpg";
import img8Slider from "../../../../assets/img/OriginI/Acabados/Origin1_A8.jpg";
import infoTable from "../../../../assets/info_table.png";
import ContactUs from "../../ContactUs/ContactUs";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import timeline from "../../../../assets/timeline2.png.jpg";
import p from "../../icons/p.png";
import people from "../../icons/people.png";
import terraza from "../../icons/terraza.png";
import trash from "../../icons/trash.png";
import style from "./style.module.css";
// import { useState } from "react";

function Origin2() {
  // let [currentImg,setCurrenImg]= useState(img1Slider)
  // const handlePrevious = ()=>{
  //   if(currentImg===img1Slider) setCurrenImg(img8Slider)
  //   if(currentImg===img2Slider) setCurrenImg(img1Slider)
  //   if(currentImg===img3Slider) setCurrenImg(img2Slider)
  //   if(currentImg===img4Slider) setCurrenImg(img3Slider)
  //   if(currentImg===img5Slider) setCurrenImg(img4Slider)
  //   if(currentImg===img6Slider) setCurrenImg(img5Slider)
  //   if(currentImg===img7Slider) setCurrenImg(img6Slider)
  //   if(currentImg===img8Slider) setCurrenImg(img7Slider)
  // }
  // const handleNext = ()=>{
  //   if(currentImg===img1Slider) setCurrenImg(img2Slider)
  //   if(currentImg===img2Slider) setCurrenImg(img3Slider)
  //   if(currentImg===img3Slider) setCurrenImg(img4Slider)
  //   if(currentImg===img4Slider) setCurrenImg(img5Slider)
  //   if(currentImg===img5Slider) setCurrenImg(img6Slider)
  //   if(currentImg===img6Slider) setCurrenImg(img7Slider)
  //   if(currentImg===img7Slider) setCurrenImg(img8Slider)
  //   if(currentImg===img8Slider) setCurrenImg(img1Slider)
  // }
  const setImage=(img)=>{
    // setCurrenImg(img)
    console.log(img);
  }

  return (
    <div>
      <Navbar />

      <div className={style.introduction}>
        <div className={style.titleInformation}>
          <div className={style.principalTitle}>
            <h1>ORIGIN I</h1>
          </div>
          <div className={style.infoTable}>
            <img src={infoTable} alt="" />
          </div>
        </div>
        <div className={style.sectionHome}>
          <div>
            <div className={style.carouselHome}>
              {/* <div onClick={()=>handlePrevious()}>{"<"} </div> */}
              <input onClick={(img1Slider)=>setImage(img1Slider)} type="radio" name="slides" id="slide-1" />
              <input onClick={(img2Slider)=>setImage(img2Slider)} type="radio" name="slides" id="slide-2" />
              <input onClick={(img3Slider)=>setImage(img3Slider)} type="radio" name="slides" id="slide-3" />
              <input onClick={(img4Slider)=>setImage(img4Slider)}  type="radio" name="slides" id="slide-4" />
              <input onClick={(img5Slider)=>setImage(img5Slider)} type="radio" name="slides" id="slide-5" />
              <input  onClick={(img6Slider)=>setImage(img6Slider)} type="radio" name="slides" id="slide-6" />
              <input onClick={(img7Slider)=>setImage(img7Slider)}type="radio" name="slides" id="slide-7" />
              <input  onClick={(img8Slider)=>setImage(img8Slider)} type="radio" name="slides" id="slide-8" />
              {/* <div onClick={()=>handleNext()}>{">"} </div> */}
              <ul className={style.carousel__slides}>
                <li className={style.carousel__slide}>
                  <figure >
                    <div>
                      <img  src={img1Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img  src={img2Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img  src={img3Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img  src={img4Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img   src={img5Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img6Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img  src={img7Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img8Slider} alt="" />
                    </div>
                  </figure>
                </li>
              </ul>
              <ul className={style.carousel__thumbnails}>
                <li>
                  <label htmlFor="slide-1">
                    <img onClick={(img1Slider)=>setImage(img1Slider)} src={img1Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-2">
                    <img onClick={(img2Slider)=>setImage(img2Slider)} src={img2Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-3">
                    <img  onClick={(img3Slider)=>setImage(img3Slider)} src={img3Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-4">
                    <img onClick={(img4Slider)=>setImage(img4Slider)} src={img4Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-5">
                    <img onClick={(img5Slider)=>setImage(img5Slider)}src={img5Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-6">
                    <img onClick={(img6Slider)=>setImage(img6Slider)} src={img6Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-7">
                    <img onClick={(img7Slider)=>setImage(img7Slider)} src={img7Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-8">
                    <img  onClick={(img8Slider)=>setImage(img8Slider)}src={img8Slider} alt="" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={style.ubicacion}>
        <h1 className={style.titleUbicacion}>UBICACION </h1>

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
            <img className={style.icon} src={p} alt="" />
            <div className={style.iconsText}>PARQUEADEROS PRIVADOS</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src={people} alt="" />
            <div className={style.iconsText}>SALÓN COMUNAL</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src={terraza} alt="" />
            <div className={style.iconsText}>TERRAZA</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src={trash} alt="" />
            <div className={style.iconsText}>SHUT DE BASURAS</div>
          </div>
        </div>
      </div>

      <div className={style.timeline}>
        <img src={timeline} alt="timeline" />
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
