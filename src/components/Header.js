import React, { useEffect, useState } from 'react';
import logo from '../img/epsilon-logo-black.png';

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 600);
  }, []);

  return (
    <div className="header">
        <img 
          src={logo} 
          alt="Epsilon Logo" 
          className={`header-logo ${isLoaded ? 'loaded' : ''}`} 
        />
    </div>
  );
}
