import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../../contexts/theme';

function PlayerInput({ label, onSubmit }) {
  const theme = useContext(ThemeContext);
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleChange = event => setUsername(event.target.value);

  return (
    <form className='column player' onSubmit={handleSubmit}>
      <label htmlFor={label} className='player-label'>
        {label}
      </label>
      <div className='row player-inputs'>
        <input
          type='text'
          id={label}
          className={`input-${theme}`}
          placeholder='github username'
          autoComplete='off'
          value={username}
          onChange={handleChange}
        />
        <button className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`} type='submit' disabled={!username}>
          Submit
        </button>
      </div>
    </form>
  );
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PlayerInput;
