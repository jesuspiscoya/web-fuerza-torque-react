import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const ScrollAnimation = ({
  children,
  to,
  className = "",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  var direction = null;

  const handleScroll = () => {
    const rect = ref.current.getBoundingClientRect();
    const position = window.innerHeight - 80;

    if (rect.top > position && rect.bottom > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  switch (to) {
    case "left":
      direction = "-translate-x-20";
      break;
    case "right":
      direction = "translate-x-20";
      break;
    case "top":
      direction = "-translate-y-20";
      break;
    case "bottom":
      direction = "translate-y-20";
      break;
  }

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${direction}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

ScrollAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};
