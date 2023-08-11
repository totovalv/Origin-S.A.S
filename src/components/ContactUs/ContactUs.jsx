import "./ContactUs.css";
import WhatsAppIcon from "./whats.png";

function ContactUs() {
  return (
    <div>
      <div className="floating-container">
        <a
          className="floating-button"
          href="https://api.whatsapp.com/send?phone=573228795258&text=Quiero Recibir mas informacion sobre..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="whatsappIcon" src={WhatsAppIcon} alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
