import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import loading from '../images/loading.png';

/* https://via.placeholder.com/100x100?text=Loading */
const Image = ({ src, alt, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => {
    setIsVisible(true);
  };

  return (
    <React.Fragment>
      <img
        src={loading}
        alt={alt}
        style={{ display: isVisible ? 'none' : 'inline' }}
        {...props}
      />
      <img
        src={src}
        alt={alt}
        onLoad={changeVisibility}
        style={{ display: isVisible ? 'inline' : 'none' }}
        {...props}
      />
    </React.Fragment>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
