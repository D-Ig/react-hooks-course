import { useEffect, useReducer } from 'react';
import queryString from 'query-string';

import { battle } from '../utils/api';

function useFetchResults(searchStr) {
  const initialState = {
    winner: null,
    loser: null,
    error: null,
    loading: true,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'request':
        return { ...state, loading: true };
      case 'success':
        return { winner: action.payload[0], loser: action.payload[1], loading: false, error: null };
      case 'failure':
        return { ...state, loading: false, error: action.payload.message };
      default:
        throw new Error('unknown action');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const { playerOne, playerTwo } = queryString.parse(searchStr);
    dispatch({ type: 'request' });
    battle([playerOne, playerTwo])
      .then(players => dispatch({ type: 'success', payload: players }))
      .catch(err => dispatch({ type: 'failure', payload: err }));
  }, [searchStr]);

  return state;
}

export default useFetchResults;
