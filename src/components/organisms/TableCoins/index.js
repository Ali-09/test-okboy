import "./styles.scss"
import PropTypes from 'prop-types'

const TableCoins = ({ coins }) => {
  return (
    <div className="wrapper-table">
        <table>
            <thead>
                <tr>
                    <th align="center">#</th>
                    <th align="left">Nombre</th>
                    <th align="center">Precio</th>
                    <th align="center">Precio BTC</th>
                </tr>
            </thead>
            <tbody>
                {
                    coins.map(coin => (
                        <tr key={coin.id}>
                            <td align="center">{coin.rank}</td>
                            <td align="left">
                                <div className="table--coin-item">
                                    <img src={coin.icon} alt={coin.name}/>
                                    <p>{coin.name}</p>
                                </div>
                            </td>
                            <td align="center">{coin.price.toFixed(2)} MX</td>
                            <td align="center">{coin.priceBtc}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

TableCoins.propTypes = {
    coins: PropTypes.array.isRequired
}

export default TableCoins