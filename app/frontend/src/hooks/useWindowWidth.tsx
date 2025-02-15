import { useState, useEffect } from 'react';

const useWindowWidth = (): number => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useWindowWidth;
