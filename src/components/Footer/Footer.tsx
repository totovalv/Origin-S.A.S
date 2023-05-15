import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import "./Footer.css";


function Footer() {
  return (
    <>
      <footer className="bodyFooter">
        <div className="containerLogo">
          <img className="imgLogo" src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177149/Logos/LOGOCOLOR_misos2.png" alt="" />
        </div>

        <hr className="hrVertical"></hr>

        <div className="iconsNavigateFooter">
          <h4 className="followUs"></h4>
          <div className="followUsContactContainer">
            <div className="originsBlock">
              <div className="followUsInfoLabelOriginTitle">Origin 1 </div>
              <div className="followUsInfoLabelOrigin"> Carrera 32 #1D - 33</div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>

            <div className="originsBlock">
              <div className="followUsInfoLabelOriginTitle">Origin 2 </div>
              <div className="followUsInfoLabelOrigin"> Calle 5 #30 - 45</div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>
            <div className="originsBlock">
              <div className="followUsInfoLabelOriginTitle">Origin 3</div>
              <div className="followUsInfoLabelOrigin"> Carrera 77A #83-31 <br/><hr/> Carrera 77A #83-39  </div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>
          </div>
        </div>
        <hr className="hrVertical"></hr>

        <div className="ContactNavigateFooter">
          <h4 className="ContactUs">Contáctenos</h4>
          <div className="correo">
                <div className="titleCorreo">Correo:</div>
                <div className="direccionCorreo">origin_holdings_sas@hotmail.com</div>
              </div>
          <div className="contactIconsFooter">

            <a
              className="iconsFooter"
              href="mailto:origin_holdings_sas@hotmail.com?Subject=Contact%20me!"
            >
              <AiOutlineMail size={40}  />
            </a>
            <a
              className="iconsFooter"
              href="mailto:origin_holdings_sas@hotmail.com?Subject=Contact%20me!"
            >
              <BsFacebook size={40} />
            </a>
          </div>
      
       
        </div>
      </footer>
      <div className="copyrigth">
        Copyright © {new Date().getFullYear()} Origin Holdings S.A.S
      </div>
    </>
  );
}

export default Footer;
