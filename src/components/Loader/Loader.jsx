import { useEffect } from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";

const Loader = (props) => {
  const { isLoading } = props;
  useEffect(() => {
    const body = document.body;
    if (isLoading===false) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'scroll';
    }
  }, [isLoading]);
  return (
    <div className={isLoading === false ? style.container : style.containerOut}>
      <img
        className={isLoading === false ? style.logo : style.logoOut}
        src="https://res.cloudinary.com/dxajrtcwk/image/upload/v1684177149/Logos/LOGOborde_hmuzyc.png"
        alt=""
      />
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;

