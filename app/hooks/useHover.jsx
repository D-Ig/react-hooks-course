import { useState } from 'react';

function useHover() {
  const [hovering, setHovering] = useState(false);

  const attrs = {
    onOver: () => setHovering(true),
    onOut: () => setHovering(false),
  };

  return [hovering, attrs];
}

export default useHover;
