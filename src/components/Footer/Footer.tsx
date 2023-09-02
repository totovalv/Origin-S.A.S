import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import style from "./style.module.css";

function Footer() {
  return (
    <>
      <footer className={style.bodyFooter}>
        <div className={style.containerLogo}>
          <img
            className={style.imgLogo}
            src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177149/Logos/LOGOCOLOR_misos2.png"
            alt=""
          />
        </div>

        <hr className={style.hrVertical}></hr>

        <div className={style.iconsNavigateFooter}>
          <h4 className={style.followUs}></h4>
          <div className={style.followUsContactContainer}>
            <div className={style.originsBlock}>
              <div className={style.followUsInfoLabelOriginTitle}>
                Origin 1{" "}
              </div>
              <div className={style.followUsInfoLabelOrigin}>
                {" "}
                Carrera 32 #1D - 33
              </div>
              <div className={style.followUsInfoLabelOrigin}>
                {" "}
                Bogotá - Colombia
              </div>
            </div>

            <div className={style.originsBlock}>
              <div className={style.followUsInfoLabelOriginTitle}>
                Origin 2{" "}
              </div>
              <div className={style.followUsInfoLabelOrigin}>
                {" "}
                Calle 5 #30 - 45
              </div>
              <div className={style.followUsInfoLabelOrigin}>
                {" "}
                Bogotá - Colombia
              </div>
            </div>
            <div className={style.originsBlock}>
              <div className={style.followUsInfoLabelOriginTitle}>Origin 3</div>
              <div className={style.followUsInfoLabelOrigin}>
                {" "}
                Calle 77A #83-31 <br />
                <hr /> Calle 77A #83-39{" "}
              </div>
              <div className={style.followUsInfoLabelOrigin}>
                {" "}
                Bogotá - Colombia
              </div>
            </div>
          </div>
        </div>
        <hr className={style.hrVertical}></hr>

        <div className={style.ContactNavigateFooter}>
          <h4 className={style.ContactUs}>Contáctenos</h4>
          <div className={style.correo}>
            <div className={style.titleCorreo}>Correo:</div>
            <div className={style.direccionCorreo}>
              {" "}
              Origin.holdings.sas@gmail.com
            </div>
            <div className={style.correo}>
              <div className={style.titleCorreo}>Telefonos:</div>
              <div className={style.direccionCorreo}> 322 8795258</div>
            </div>
          </div>
          <div className={style.contactIconsFooter}>
            <a
              className={style.iconsFooter}
              href="mailto: Origin.holdings.sas@gmail.com?Subject=Contact%20me!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail className={style.icon} size={35} />
            </a>
            <a
              className={style.iconsFooter}
              href="https://www.facebook.com/profile.php?id=100095422713723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className={style.icon} size={35} />
            </a>
            <a
              className={style.iconsFooter}
              href="https://www.instagram.com/originholdingssas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className={style.icon} size={35} />
            </a>
          </div>
        </div>
      </footer>
      <div className={style.copyrigth}>
        Copyright © {new Date().getFullYear()} Origin Holdings S.A.S
      </div>
    </>
  );
}

export default Footer;
