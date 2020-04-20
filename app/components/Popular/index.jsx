import React, { useState } from 'react';

import LangaugesNav from './LanguagesNav';
import Loading from '../Loading';
import ReposGrid from './ReposGrid';
import useFetchRepos from '../../hooks/useFetchRepos';

function Popular() {
  const [selectedLanguage, selectLanguage] = useState('All');
  const state = useFetchRepos(selectedLanguage);

  const repos = state[selectedLanguage];
  const { loading, error } = state;

  return (
    <>
      <LangaugesNav selected={selectedLanguage} onUpdateLanguage={selectLanguage} />
      {loading && <Loading text='Fetching Repos' />}
      {error && <p className='center-text error'>{error}</p>}
      {repos && <ReposGrid repos={repos} />}
    </>
  );
}

export default Popular;
