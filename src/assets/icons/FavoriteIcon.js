import PropTypes from 'prop-types';

function FavoriteIcon({
  fill, stroke, width, height,
}) {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
    </svg>
  );
}

FavoriteIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

FavoriteIcon.defaultProps = {
  fill: '#E90064',
  stroke: '',
  width: 18,
  height: 18,
};

export default FavoriteIcon;
