import './styles.scss'
import PropTypes from 'prop-types'

const ToggleButton = ({ onToggle, value, label, toggleActive}) => {
  return (
    <button
        onClick={() => onToggle(value)}
        className={`toggle--button ${
            value === toggleActive && 'toggle--button-active'
        }`}
    >
        {label}
    </button>
  )
}

ToggleButton.propTypes = {
    onToggle: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    toggleActive: PropTypes.string.isRequired
}

export default ToggleButton