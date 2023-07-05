import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from "./style.module.css";

const ContactForm = () => {
  return (
    <div>
      <Navbar />
      <div className={style.titleContainer}>
        <div ><hr className={style.hrTop}  /><hr className={style.hrBottom}  /></div>
        <div className={style.contactContain}>
          <div  className={style.contactTitle}>CONTÁCTANOS</div>
          <div className={style.contactText}>
            Para nosotros es un gusto atenderte, encuentra nuestros medios de
            comunicación o llena el formulario para pedir información adicional.{" "}
          </div>
          <div className={style.contactTextBold}>Horario de atención: Lunes - Sábado 8:00 am - 4:30 pm</div>
        </div>
        <div className={style.hrLines}><hr className={style.hrTop}  /><hr className={style.hrBottom}  />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
