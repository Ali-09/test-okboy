import './styles.scss';
import PropTypes from 'prop-types';
import FavoriteIcon from 'assets/icons/FavoriteIcon';
import { Image } from 'components';

function TableCoins({ coins, handleFavorites, favorites }) {
  return (
    <div className="wrapper-table">
      <table>
        <thead>
          <tr>
            <th align="center">#</th>
            <th align="left">Nombre</th>
            <th align="center">Precio</th>
            <th align="center">Precio BTC</th>
            <th align="center">Cambio 24H</th>
            <th align="center">Favoritos</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td align="center">{coin.rank}</td>
              <td align="left">
                <div className="table--coin-item">
                  <Image src={coin.icon} alt={coin.name} />
                  <p>{coin.name}</p>
                </div>
              </td>
              <td align="center">
                {coin.price.toFixed(2)}
                {' '}
                MX
              </td>
              <td align="center">{coin.priceBtc}</td>
              <td align="center">{coin.priceChange1d}</td>
              <td align="center">
                <button type="button" onClick={() => handleFavorites(coin.id)}>
                  <FavoriteIcon
                    fill={favorites.includes(coin.id) ? '#E90064' : ''}
                    stroke={!favorites.includes(coin.id) ? '#E90064' : ''}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableCoins.propTypes = {
  coins: PropTypes.array.isRequired,
  handleFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
};

export default TableCoins;
