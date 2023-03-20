import './styles.scss'
import { ToggleButton } from 'components'
import PropTypes from "prop-types";

const ToggleButtonGroup = ({toggleButtons, setToggleActive, toggleActive}) => {
  const onToggle = (val) => {
    const value = val === toggleActive ? "" : val;
    setToggleActive(value);
  };
  return (
    <div className="toggle-button-group">
      {toggleButtons.map((toggle) => (
        <ToggleButton
          key={toggle.value}
          value={toggle.value}
          label={toggle.label}
          toggleActive={toggleActive}
          onToggle={() => onToggle(toggle.value)}
        />
      ))}
    </div>
  );
};

ToggleButtonGroup.propTypes = {
  toggleButtons: PropTypes.array.isRequired,
  setToggleActive: PropTypes.func.isRequired,
  toggleActive: PropTypes.string.isRequired
};

export default ToggleButtonGroup;
