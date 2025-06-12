import React, { useEffect, useState } from 'react';

const SocialButton = ({ children, href, id }) => {
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 });
  const [transitioning, setTransitioning] = useState(false);

  const handleMouseMove = event => {
    const rect = event.target.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    const displacementX = event.clientX - buttonCenterX;
    const displacementY = event.clientY - buttonCenterY;

    setDisplacement({ x: displacementX / 2, y: displacementY / 2 });
    setTransitioning(true);
  };

  const handleMouseOut = () => {
    setDisplacement({ x: 0, y: 0 });
    setTransitioning(false);
  };

  useEffect(() => {
    const button = document.getElementById(id);

    const updateDisplacement = () => {
      if (transitioning) {
        const newX = displacement.x * 1; // Adjust the transition speed here
        const newY = displacement.y * 1; // Adjust the transition speed here
        if (Math.abs(newX) < 0.01 && Math.abs(newY) < 0.01) {
          setDisplacement({ x: 0, y: 0 });
          setTransitioning(false);
        } else {
          setDisplacement({ x: newX, y: newY });
          requestAnimationFrame(updateDisplacement);
        }
      }
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseout', handleMouseOut);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseout', handleMouseOut);
    };
  }, [id, displacement, transitioning]);

  return (
    <button
      id={id}
      className='p-4'
      style={{
        transform: `translate(${displacement.x}px, ${displacement.y}px)`,
        transition: transitioning
          ? 'transform 0.1s ease'
          : 'transform 0.5s ease', // Adjust
      }}
    >
      <a
        rel='noreferrer'
        target='_blank'
        href={href}
        className='[&>svg]:transition-all [&>svg]:duration-300 [&>svg]:hover:fill-amber-300'
      >
        {children}
      </a>
    </button>
  );
};

export default SocialButton;
