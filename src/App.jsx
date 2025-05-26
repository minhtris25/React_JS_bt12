import { useState } from 'react';
import './App.css'; // Import file CSS riêng
import Cat from './svg/cat.svg';
import Dog from './svg/dog.svg';
import Bird from './svg/bird.svg';
import Cow from './svg/cow.svg';
import Gator from './svg/gator.svg';
import Horse from './svg/horse.svg';

function App() {
  // State lưu danh sách các động vật được hiển thị
  // Mỗi động vật gồm url hình ảnh và kích thước trái tim
  const [animals, setAnimals] = useState([]);

  // Danh sách SVG động vật
  const animalSvgs = [Cat, Dog, Bird, Cow, Gator, Horse];

  // Hàm xử lý khi bấm nút: thêm một con vật ngẫu nhiên
  const handleAddAnimal = () => {
    const randomAnimal = animalSvgs[Math.floor(Math.random() * animalSvgs.length)];
    // Mặc định trái tim kích thước nhỏ (16px)
    setAnimals([...animals, { url: randomAnimal, heartSize: 16 }]);
  };

  // Hàm xử lý khi bấm vào trái tim: tăng kích thước trái tim
  const handleHeartClick = (index) => {
    const updatedAnimals = animals.map((animal, i) => {
      if (i === index) {
        return { ...animal, heartSize: animal.heartSize + 4 }; // Tăng kích thước trái tim
      }
      return animal;
    });
    setAnimals(updatedAnimals);
  };

  return (
    <div className="app-container">
      {/* Tiêu đề */}
      <h1 className="app-title">Thư viện động vật ngẫu nhiên 🐾</h1>

      {/* Nút được căn giữa */}
      <div className="button-wrapper">
        <button onClick={handleAddAnimal} className="animal-button">
          Hiện thêm con vật 🐶
        </button>
      </div>

      {/* Vùng hiển thị các ảnh động vật */}
      <div className="animal-gallery">
        {animals.map((animal, index) => (
          <div key={index} className="animal-card">
            {/* Hình ảnh động vật */}
            <img src={animal.url} alt={`Animal ${index + 1}`} className="animal-img" />

            {/* Trái tim ở góc dưới phải */}
            <div
              className="heart-icon"
              onClick={() => handleHeartClick(index)}
              style={{ fontSize: `${animal.heartSize}px` }} // Dùng fontSize để phóng to trái tim
            >
              ❤️
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
