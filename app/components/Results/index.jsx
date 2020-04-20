import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '../Card';
import Loading from '../Loading';
import ProfileList from './ProfileList';
import useFetchResults from '../../hooks/useFetchResults';

function Results({ location: { search } }) {
  const { winner, loser, error, loading } = useFetchResults(search);

  if (loading) {
    return <Loading text='Battling' />;
  }

  if (error) {
    return <p className='center-text error'>{error}</p>;
  }

  return (
    <>
      <div className='grid space-around container-sm'>
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList profile={winner.profile} />
        </Card>
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Loser'}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.profile.avatar_url}
          name={loser.profile.login}
          href={loser.profile.html_url}
        >
          <ProfileList profile={loser.profile} />
        </Card>
      </div>
      <Link to='/battle' className='btn dark-btn btn-space'>
        Reset
      </Link>
    </>
  );
}

export default Results;

Results.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};
