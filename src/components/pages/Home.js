import { HomeTemplate } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from 'state/slices/coins-slice';

const Home = () => {

  const dataCoins = useSelector(state => state.coins.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins())
  }, [dispatch]);

  return (
    <HomeTemplate coins={dataCoins} />
  )
}

export default Home