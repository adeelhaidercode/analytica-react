import React from "react";
import PropTypes from "prop-types";



const Button = ({
  title = "Click Me",
  height = "40px",
  width = "140px",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn-grad font-medium transition-all ease-in-out duration-300 transform active:scale-95 ${className}`}
      style={{
        height,
        width,
      }}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
