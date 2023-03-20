import { HomeTemplate } from 'components';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from 'state/slices/coins-slice';
import useInterval from 'hooks/useInterval';

const Home = () => {

  const dispatch = useDispatch();
  const dataCoins = useSelector(state => state.coins.data);
  const [search, setSearch] = useState('');
  const [toggleActive, setToggleActive] = useState('');
  const toggleButtons = [
    {
      label: 'Nombre',
      value: 'name'
    },
    {
      label: 'Precio',
      value: 'price'
    }
  ]

  const dataCoinsFilter = useCallback(
    () => {
      let data = dataCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())) 
      if(toggleActive === 'price'){
        data = data.sort((a, b) => (a.price > b.price ? -1 : 1));
      }
      if(toggleActive === 'name'){
        data = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      return data
    },
    [dataCoins, search, toggleActive]
  )
  

  useInterval(() => { dispatch(getCoins())}, 60000)
  
  useEffect(() => {
    dispatch(getCoins())
  }, [dispatch]);

  return (
    <HomeTemplate 
      coins={dataCoinsFilter()} 
      search={search} 
      setSearch={(val) => setSearch(val)} 
      toggleActive={toggleActive}
      setToggleActive={setToggleActive}
      toggleButtons={toggleButtons}
    />
  )
}

export default Home