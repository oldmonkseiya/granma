import React from "react";
import PropTypes from "prop-types";
import header from "../Assets/header.mp4";

const Hero = props => {
  const { backgrounds, theme } = props;

  return (
    <React.Fragment>
      <video loop autoPlay muted>
        <source src={header} type="video/mp4" />
      </video>

      {/* --- STYLES --- */}
      <style jsx>{`
        @from-width tablet {
          video {
            width: 100%;
            height: 80vh;
            object-fit: fill;
          }
        }

        @from-width desktop {
          video {
            width: 100%;
            height: 120%;
          }
        }
        @below desktop {
          video {
            width: 100%;
            height: 60vh;
            object-fit: fill;
          }
        }
        @below tablet {
          video {
            width: 100%;
            height: 60vh;
            object-fit: fill;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  // scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
