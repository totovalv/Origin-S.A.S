import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from "./style.module.css";
import { CiLocationOn } from "react-icons/ci";
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import ContactUs from "../ContactUs/ContactUs";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    user_name: "",
    user_surname: "",
    message: "",
    phone: "",
    user_email: "",
  });

  function handlerChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const messageCopy = `Nombre y apellido: ${inputs.user_name} ${inputs.user_surname}\nEmail: ${inputs.user_email}\nPhone: ${inputs.phone}\nMensaje: ${inputs.message}`;
    const element = document.getElementById("messageId");
    console.log("firstValue", element.value);

    element.value = messageCopy;
    console.log(element.value);
    emailjs
      .sendForm(
        "service_v0wy4jo",
        "template_a6pekct",
        form.current,
        "WtARjJwA3iGUtPMWE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInputs({
      user_name: "",
      user_surname: "",
      message: "",
      phone: "",
      user_email: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div className={style.titleContainer}>
        <div>
          <hr className={style.hrTop} />
          <hr className={style.hrBottom} />
        </div>
        <div className={style.contactContain}>
          <div className={style.contactTitle}>CONTÁCTANOS</div>
          <div className={style.contactText}>
            Para nosotros es un gusto atenderte, encuentra nuestros medios de
            comunicación o llena el formulario para pedir información adicional.{" "}
          </div>
          <div className={style.contactTextBold}>
            Horario de atención: Lunes - Sábado 8:00 am - 4:30 pm
          </div>
        </div>
        <div className={style.hrLines}>
          <hr className={style.hrTop} />
          <hr className={style.hrBottom} />
        </div>
      </div>
      <div className={style.containerContactForm}>
        <div className={style.leftElement}>
          <div className={style.firstBoxContact}>
            <div className={style.locationBox}>
              <CiLocationOn size={30} />
              <div className={style.contactInfoTitle}>Direccion</div>
              <div className={style.cityLabel}>Bogota,Colombia</div>
              <div>Calle 86a #69t-81, torre 4 apto</div>
              <div>2101.</div>
            </div>
            <div className={style.phoneContactBox}>
              <BsTelephone size={25} />
              <div className={style.contactInfoTitle}>TELEFONO</div>
              <div>300 5635245 - 322 8795258 </div>
            </div>
          </div>
          <div>
            <div className={style.secondBoxContact}>
              <div className={style.emailBox}>
                <TfiEmail size={27} />
                <div className={style.contactInfoTitle}>EMAIL</div>
                <div>info@mysite.com</div>
              </div>

              <div className={style.socialMediaBox}>
                <div>
                  <a
                    className={style.iconsFooter}
                    href="mailto: Origin.holdings.sas@gmail.com?Subject=Contact%20me!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineMail className={style.icon} size={30} />
                  </a>
                  <a
                    className={style.iconsFooter}
                    href="https://www.facebook.com/profile.php?id=100095422713723"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook className={style.icon} size={30} />
                  </a>
                  <a
                    className={style.iconsFooter}
                    href="https://www.instagram.com/originholdingssas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram className={style.icon} size={30} />
                  </a>
                </div>
                <div className={style.contactInfoTitle}>REDES SOCIALES</div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.rightElement}>
          <form ref={form} onSubmit={sendEmail} className={style.formContain}>
            <div className={style.nameSurnameGrid}>
              <div>
                <label>NOMBRE</label>
                <input
                  value={inputs.name}
                  name="user_name"
                  onChange={handlerChange}
                  className={style.inputs}
                  type="text"
                />
              </div>
              <div>
                <label>APELLIDO</label>
                <input
                  value={inputs.surname}
                  name="user_surname"
                  onChange={handlerChange}
                  className={style.inputs}
                  type="text"
                />
              </div>
            </div>
            <label>EMAIL</label>
            <input
              value={inputs.email}
              name="user_email"
              onChange={handlerChange}
              className={style.inputs}
              type="text"
            />
            <label>MENSAJE</label>
            <textarea
              id="messageId"
              value={inputs.message}
              name="message"
              onChange={handlerChange}
              className={style.inputMessage}
              type="text"
            />
            <label>CELULAR</label>
            <input
              value={inputs.phone}
              name="phone"
              onChange={handlerChange}
              className={style.inputs}
              type="text"
            />
            <button type="submit" value="Send" className={style.buttonForm}>
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className={style.thanksForContactContainer}>
        <img
          className={style.thanksImg}
          src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1688937233/mosaic_lgf5ja.jpg"
          alt=""
        />
        <div className={style.thanksText}>
          <div className={style.thanks}>GRACIAS</div>
          <div className={style.forCommunicate}>POR COMUNICARTE</div>
          <div className={style.message}>
            Queremos brindarte la mejor atención, responderemos lo más rápido
            posible, el tiempo de espera es máximo tres días hábiles.
          </div>
        </div>
      </div>
      <Footer />
      <ContactUs />
    </div>
  );
};

export default ContactForm;
