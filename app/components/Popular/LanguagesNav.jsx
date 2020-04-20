import React from 'react';
import PropTypes from 'prop-types';

function LangaugesNav({ onUpdateLanguage, selected }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='flex-center'>
      {languages.map(language => (
        <li key={language}>
          <button
            className='btn-clear nav-link'
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}
            type='button'
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LangaugesNav.propTypes = {
  onUpdateLanguage: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default LangaugesNav;
