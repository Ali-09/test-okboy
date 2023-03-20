import './styles.scss'
import { Input, ToggleButtonGroup } from 'components'
import PropTypes from 'prop-types'

const Filters = ({toggleButtons, toggleActive, setToggleActive, search, setSearch}) => {
  
  return (
    <div className='filters'>
        <Input placeholder='Buscar por nombre 🪙' value={search} handleChange={(e) => setSearch(e.target.value)}/>
        <ToggleButtonGroup
            toggleButtons={toggleButtons}
            setToggleActive={setToggleActive}
            toggleActive={toggleActive}
        />
    </div>
  )
}

Filters.propTypes = {
    toggleActive: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    setToggleActive: PropTypes.func.isRequired,
    toggleButtons: PropTypes.array.isRequired,
}

export default Filters