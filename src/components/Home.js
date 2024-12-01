// src/components/Home.js
import React from 'react';

// Sample card data (this can be dynamic based on your app)
const cards = [
  { title: "Card 1", description: "This is the first card." },
  { title: "Card 2", description: "This is the second card." },
  { title: "Card 3", description: "This is the third card." },
  { title: "Card 4", description: "This is the fourth card." },
  { title: "Card 5", description: "This is the fifth card." },
  { title: "Card 6", description: "This is the sixth card." },
];

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Faculty Collaboration Platform</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
