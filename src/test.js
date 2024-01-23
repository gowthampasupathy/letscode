import React, { useState } from 'react';

const Card = ({ title, category, color, size }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
    <h3>{title}</h3>
    <p>{category}</p>
    <p>{color}</p>
    <p>{size}</p>
  </div>
);

const CardList = ({ cards }) => (
  <div>
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

const FilteredCardList = () => {
  const allCards = [
    { title: 'Card 1', category: 'Category A', color: 'Red', size: 'Small' },
    { title: 'Card 2', category: 'Category B', color: 'Blue', size: 'Medium' },
    { title: 'Card 3', category: 'Category A', color: 'Green', size: 'Large' },
    // Add more cards as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const filteredCards = allCards.filter(
    (card) =>
      (selectedCategory === 'all' || card.category === selectedCategory) &&
      (selectedColor === 'all' || card.color === selectedColor) &&
      (selectedSize === 'all' || card.size === selectedSize)
  );

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedCategory === 'all'}
            onChange={handleCategoryChange}
          />
          All Categories
        </label>
        <label>
          <input
            type="radio"
            value="Category A"
            checked={selectedCategory === 'Category A'}
            onChange={handleCategoryChange}
          />
          Category A
        </label>
        <label>
          <input
            type="radio"
            value="Category B"
            checked={selectedCategory === 'Category B'}
            onChange={handleCategoryChange}
          />
          Category B
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedColor === 'all'}
            onChange={handleColorChange}
          />
          All Colors
        </label>
        <label>
          <input
            type="radio"
            value="Red"
            checked={selectedColor === 'Red'}
            onChange={handleColorChange}
          />
          Red
        </label>
        <label>
          <input
            type="radio"
            value="Blue"
            checked={selectedColor === 'Blue'}
            onChange={handleColorChange}
          />
          Blue
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedSize === 'all'}
            onChange={handleSizeChange}
          />
          All Sizes
        </label>
        <label>
          <input
            type="radio"
            value="Small"
            checked={selectedSize === 'Small'}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            value="Medium"
            checked={selectedSize === 'Medium'}
            onChange={handleSizeChange}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            value="Large"
            checked={selectedSize === 'Large'}
            onChange={handleSizeChange}
          />
          Large
        </label>
      </div>

      <CardList cards={filteredCards} />
    </div>
  );
};

export default FilteredCardList;
