import "./styles.scss"
import { Header, TableCoins } from "components"

const coins = [
  {
    "id": "bitcoin",
    "icon": "https://static.coinstats.app/coins/1650455588819.png",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "price": 27446.567916924727,
    "priceBtc": 1,
    "volume": 59364791804.61989,
    "marketCap": 530338531746.7793,
    "availableSupply": 19322581,
    "totalSupply": 21000000,
    "priceChange1h": 0.23,
    "priceChange1d": 1.13,
    "priceChange1w": 22.95,
    "websiteUrl": "http://www.bitcoin.org",
    "twitterUrl": "https://twitter.com/bitcoin",
    "exp": [
      "https://blockchair.com/bitcoin/",
      "https://btc.com/",
      "https://btc.tokenview.io/"
    ]
  },
  {
    "id": "ethereum",
    "icon": "https://static.coinstats.app/coins/1650455629727.png",
    "name": "Ethereum",
    "symbol": "ETH",
    "rank": 2,
    "price": 1756.1696438030722,
    "priceBtc": 0.06398830604094308,
    "volume": 27507771940.13155,
    "marketCap": 211537519537.2534,
    "availableSupply": 120453921,
    "totalSupply": 120453921,
    "priceChange1h": 0.2,
    "priceChange1d": -1.42,
    "priceChange1w": 9.89,
    "websiteUrl": "https://www.ethereum.org/",
    "twitterUrl": "https://twitter.com/ethereum",
    "contractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "decimals": 18,
    "exp": [
      "https://etherscan.io/",
      "https://ethplorer.io/",
      "https://blockchair.com/ethereum",
      "https://eth.tokenview.io/"
    ]
  },
  {
    "id": "tether",
    "icon": "https://static.coinstats.app/coins/1650455771843.png",
    "name": "Tether",
    "symbol": "USDT",
    "rank": 3,
    "price": 1.0070415247962647,
    "priceBtc": 0.000036692856815959864,
    "volume": 187756231267.35776,
    "marketCap": 76645879527.16084,
    "availableSupply": 76109949431,
    "totalSupply": 76109949431,
    "priceChange1h": -0.03,
    "priceChange1d": 0.13,
    "priceChange1w": 0.69,
    "websiteUrl": "https://tether.to/",
    "twitterUrl": "https://twitter.com/Tether_to",
    "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "decimals": 18,
    "exp": [
      "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
      "https://ethplorer.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7",
      "https://snowtrace.io/token/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
      "https://optimistic.etherscan.io/token/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
      "https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955",
      "https://evmexplorer.velas.com/token/0xb44a9b6905af7c801311e8f4e76932ee959c663c",
      "https://cronos-explorer.crypto.org/token/0x66e428c3f67a68878562e79a0234c1f83c208770",
      "https://avascan.info/blockchain/c/address/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7/token",
      "https://blockchair.com/ethereum/erc-20/token/0xdac17f958d2ee523a2206206994597c13d831ec7"
    ]
  },
  {
    "id": "binance-coin",
    "icon": "https://static.coinstats.app/coins/1666608145347.png",
    "name": "BNB",
    "symbol": "BNB",
    "rank": 4,
    "price": 334.4272329909635,
    "priceBtc": 0.012185287570914858,
    "volume": 1077528794.6565506,
    "marketCap": 52804466209.0807,
    "availableSupply": 157895234,
    "totalSupply": 157900174,
    "priceChange1h": 0.06,
    "priceChange1d": 0.33,
    "priceChange1w": 11.68,
    "websiteUrl": "https://www.binance.com/",
    "twitterUrl": "https://twitter.com/binance",
    "contractAddress": "BNB",
    "decimals": 18,
    "exp": [
      "https://bscscan.com",
      "https://explorer.binance.org/",
      "https://binance.mintscan.io/",
      "https://etherscan.io/token/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
      "https://ethplorer.io/address/0xb8c77482e45f1f44de1745f52c74426c631bdd52"
    ]
  },
  {
    "id": "usd-coin",
    "icon": "https://static.coinstats.app/coins/1650455825065.png",
    "name": "USD Coin",
    "symbol": "USDC",
    "rank": 5,
    "price": 1.003,
    "priceBtc": 0.000036512879344658116,
    "volume": 4410501009,
    "marketCap": 36338544171,
    "availableSupply": 36212043566,
    "totalSupply": 36212043566,
    "priceChange1h": -0.02,
    "priceChange1d": -0.05,
    "priceChange1w": 0.98,
    "websiteUrl": "https://www.circle.com/en/usdc",
    "twitterUrl": "https://twitter.com/circlepay",
    "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "decimals": 18,
    "exp": [
      "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "https://stepscan.io/token/0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
      "https://nearblocks.io/address/a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near#transaction",
      "https://ethplorer.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      "https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      "https://ftmscan.com/address/0x04068da6c83afcfa0e13ba15a6696662335d5b75",
      "https://arbiscan.io/token/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
      "https://www.oklink.com/en/okc/token/0xc946daf81b08146b1c7a8da2a851ddf2b3eaaf85",
      "https://www.teloscan.io/token/0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b"
    ]
  }
  ]

const HomeTemplate = () => {
  
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <TableCoins coins={coins}/>
      </main>
    </div>
  )
}

export default HomeTemplate