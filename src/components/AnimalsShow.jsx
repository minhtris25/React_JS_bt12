import React from 'react';

function AnimalsShow({ animal, heartIcon, onHeartClick }) {
  return (
    <div className="animal-card">
      <img src={animal.url} alt="Animal" className="animal-img" />
      <img
        src={heartIcon}
        alt="Heart"
        className="heart-icon"
        onClick={onHeartClick}
        style={{
          width: `${animal.heartSize}px`,
          height: `${animal.heartSize}px`,
        }}
      />
    </div>
  );
}

export default AnimalsShow;