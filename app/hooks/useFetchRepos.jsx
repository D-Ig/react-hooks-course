import { useEffect, useReducer } from 'react';

import { fetchPopularRepos } from '../utils/api';

function useFetchRepos(language) {
  const initialState = {
    loading: true,
    error: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'request':
        return { ...state, loading: true };
      case 'success':
        return { ...state, [action.payload.language]: action.payload.repos, loading: false, error: null };
      case 'failure':
        return { ...state, loading: false, error: action.payload.message };
      default:
        throw new Error('unknown action');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchedRepos = state[language];

  useEffect(() => {
    if (!fetchedRepos) {
      dispatch({ type: 'request' });
      fetchPopularRepos(language)
        .then(repos => {
          dispatch({ type: 'success', payload: { repos, language } });
        })
        .catch(err => {
          dispatch({ type: 'failure', payload: err });
        });
    }
  }, [fetchedRepos, language]);

  return state;
}

export default useFetchRepos;
