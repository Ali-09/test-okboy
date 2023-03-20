import "./styles.scss"
import { Header, TableCoins } from "components"
import PropTypes from 'prop-types'

const HomeTemplate = ({coins}) => {
  
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <TableCoins coins={coins}/>
      </main>
    </div>
  )
}

TableCoins.propTypes = {
  coins: PropTypes.array.isRequired
}

export default HomeTemplate