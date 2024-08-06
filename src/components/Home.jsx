import React, { useState } from 'react';
import logo1 from '../assets/Home/c1.jpg';
import logo2 from '../assets/Home/c2.jpg';
import logo3 from '../assets/Home/c3.jpg';
import logo4 from '../assets/Home/c4.jpg';
import logo5 from '../assets/Home/c5.jpeg';
import logo6 from '../assets/Home/c6.jpg';
import '../index.css'; // Ensure this path is correct


// SearchBar Component
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative mt-4">
      <div className="flex justify-center">
        <div className="max-w-9xl w-full mx-6 sm:mx-6 md:mx-16 lg:mx-80">
          <div className="flex items-center bg-green-50 border rounded-full p-2">
            <input
              type="text"
              placeholder="search for vacancies..."
              value={value}
              onChange={onChange}
              className="p-1 outline-none text-sm w-full bg-transparent text-white"
            />
            <span className="relative right-2 top-3 transform -translate-y-1/2 text-green-500 text-xl">&#x1F50D;</span>
          </div>
        </div>
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
          className="h-96 w-auto rounded-lg"
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
          className="h-96 w-auto rounded-lg"
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
          className="h-96 w-auto rounded-lg"
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
          className="h-96 w-auto rounded-lg"
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
          className="h-96 w-auto rounded-lg"
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
          className="h-96 w-auto rounded-lg"
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

  const handleEdit = (vacancy) => {
    // Logic to handle edit action
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'vacancies', id));
      setVacancies(prevVacancies => prevVacancies.filter(vacancy => vacancy.id !== id));
    } catch (error) {
      console.error('Error deleting vacancy:', error);
    }
  };

  return (
    <>    
    <div className="container mx-auto py-12">

      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <div className="grid grid-cols-1 mt-8">
          <span className="sticky top-0 ml-4 sm:ml-8 md:ml-24 lg:ml-60 xl:ml-96 bg-blue-200 px-2 py-1 text-lg font-medium text-blue-700 rounded-full text-gradient-my text-shadow-custom animate-pulse">
            new vacancies
          </span>
        {filteredCards.map((card, index) => (
          <Card key={index} img={card.img} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
    </>

  );
};

export default Home;
