import './styles.scss'
import PropTypes from 'prop-types'

const Input = ({value, handleChange, placeholder}) => {
  return (
    <input 
        placeholder={placeholder} 
        value={value}
        onChange={handleChange} 
        />
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  placeholder: ''
};

export default Input