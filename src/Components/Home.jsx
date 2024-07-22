import React, { useState } from 'react';
import logo1 from '../assets/Home/c1.jpg';
import logo2 from '../assets/Home/c2.jpg';
import logo3 from '../assets/Home/c3.jpg';
import logo4 from '../assets/Home/c4.jpg';
import logo5 from '../assets/Home/c5.jpeg';
import logo6 from '../assets/Home/c6.jpg';

// SearchBar Component
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex items-center bg-green-950 border rounded-md p-1 w-60">
        <span className="text-green-500 mr-2 text-xl">&#x1F50D;</span> {/* Adjusted size */}
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        Vacancies
</span>
        <input
          type="text"
          placeholder=""
          value={value}
          onChange={onChange}
          className="p-1 outline-none text-sm w-full bg-transparent text-white" // Adjusted padding and font size
        />
      </div>
    </div>
  );
};


// Card Component
const Card = ({ img, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center">
        {img}
        <h2 className="mt-4 text-xl text-center font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 justify-center text-sm">{description}</p>
      </div>
    </div>
  );
};

// Home Component
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cards = [
    {
      img: (
        <img
          alt="Card 1"
          src={logo1}
          className="h-48 w-auto rounded-lg"
        />
      ),
      title: 'Noteworthy Technology Acquisitions 2021',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
      img: (
        <img
          alt="Card 2"
          src={logo2}
          className="h-48 w-auto rounded-lg"
        />
      ),
      title: 'Card 2 Title',
      description: 'Card 2 description',
    },
    {
      img: (
        <img
          alt="Card 3"
          src={logo3}
          className="h-48 w-auto rounded-lg"
        />
      ),
      title: 'Card 3 Title',
      description: 'Card 3 description',
    },
    {
      img: (
        <img
          alt="Card 4"
          src={logo4}
          className="h-48 w-auto rounded-lg"
        />
      ),
      title: 'Card 4 Title',
      description: 'Card 4 description',
    },
    {
      img: (
        <img
          alt="Card 5"
          src={logo5}
          className="h-48 w-auto rounded-lg"
        />
      ),
      title: 'Card 5 Title',
      description: 'Card 5 description',
    },
    {
      img: (
        <img
          alt="Card 6"
          src={logo6}
          className="h-48 w-auto rounded-lg"
        />
      ),
      title: 'Card 6 Title',
      description: 'Card 6 description',
    },
  ];

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12">
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="grid grid-cols-1 gap-2 mt-8">
        {filteredCards.map((card, index) => (
          <Card key={index} img={card.img} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;
