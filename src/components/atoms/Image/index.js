import React from 'react';
import PropTypes from 'prop-types';
import CoinImage from 'assets/images/coin.png';

function Image({ alt, src }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = CoinImage;
      }}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  alt: 'image',
};

export default Image;
