import { useState } from 'react';
import './App.css';
import Cat from './svg/cat.svg';
import Dog from './svg/dog.svg';
import Bird from './svg/bird.svg';
import Cow from './svg/cow.svg';
import Gator from './svg/gator.svg';
import Horse from './svg/horse.svg';
import Heart from './svg/heart.svg';
import AnimalsShow from './components/AnimalsShow';

function App() {
  const [animals, setAnimals] = useState([]);
  const animalSvgs = [Cat, Dog, Bird, Cow, Gator, Horse];

  const handleAddAnimal = () => {
    const randomAnimal = animalSvgs[Math.floor(Math.random() * animalSvgs.length)];
    setAnimals([...animals, { url: randomAnimal, heartSize: 16 }]);
  };

  const handleHeartClick = (index) => {
    const updated = animals.map((animal, i) =>
      i === index ? { ...animal, heartSize: animal.heartSize + 4 } : animal
    );
    setAnimals(updated);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Animal Library</h1>

      <div className="button-wrapper">
        <button onClick={handleAddAnimal} className="animal-button">
          Add Now
        </button>
      </div>

      <div className="animal-gallery">
        {animals.map((animal, index) => (
          <AnimalsShow
            key={index}
            animal={animal}
            heartIcon={Heart}
            onHeartClick={() => handleHeartClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;