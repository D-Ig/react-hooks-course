import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

function Battle() {
  const [labelOne, labelTwo] = ['Player One', 'Player Two'];

  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const handleReset = label => {
    const playerResetter = label === labelOne ? setPlayerOne : setPlayerTwo;
    playerResetter(null);
  };

  return (
    <>
      <Instructions />

      <div className='players-container'>
        <h1 className='center-text header-lg'>Players</h1>
        <div className='row space-around'>
          {playerOne === null ? (
            <PlayerInput label={labelOne} onSubmit={setPlayerOne} />
          ) : (
            <PlayerPreview username={playerOne} label={labelOne} onReset={() => handleReset(labelOne)} />
          )}

          {playerTwo === null ? (
            <PlayerInput label={labelTwo} onSubmit={setPlayerTwo} />
          ) : (
            <PlayerPreview username={playerTwo} label={labelTwo} onReset={() => handleReset(labelTwo)} />
          )}
        </div>

        {playerOne && playerTwo && (
          <Link
            className='btn dark-btn btn-space'
            to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
            }}
          >
            Battle
          </Link>
        )}
      </div>
    </>
  );
}

export default Battle;
