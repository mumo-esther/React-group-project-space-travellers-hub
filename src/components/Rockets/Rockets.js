import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './RocketItem';
import { getRocketsAsync } from '../../store/rocket/rocketSlice';
import './Rockets.css';

export default function Rockets() {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsAsync());
  }, [dispatch]);

  const listRockets = rockets.map((rocket) => (
    <li key={rocket.id}>
      <Rocket rocket={rocket} />
    </li>
  ));

  return (
    <div>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <p className="error">{error}</p>}
      <ul className="list">{listRockets}</ul>
    </div>
  );
}
