import React from 'react';
import PropTypes from 'prop-types';

import useHover from '../hooks/useHover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  },
};

function Tooltip({ text, children }) {
  const [hovering, attrs] = useHover();
  const { onOver, onOut } = attrs;
  return (
    <div style={styles.container} onMouseOver={onOver} onMouseOut={onOut} onFocus={onOver} onBlur={onOut}>
      {hovering === true && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
