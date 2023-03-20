import "./styles.scss";
import { Header, TableCoins, Filters } from 'components';
import PropTypes from 'prop-types';

const HomeTemplate = ({
  coins, 
  setSearch, 
  search, 
  toggleActive, 
  setToggleActive,
  toggleButtons
}) => {
  
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Filters 
          search={search} 
          setSearch={setSearch} 
          toggleActive={toggleActive}
          setToggleActive={setToggleActive}
          toggleButtons={toggleButtons}
        />
        <TableCoins coins={coins}/>
      </main>
    </div>
  )
}

HomeTemplate.propTypes = {
  coins: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  toggleActive: PropTypes.string.isRequired,
  setToggleActive: PropTypes.func.isRequired,
  toggleButtons: PropTypes.array.isRequired,
}

export default HomeTemplate