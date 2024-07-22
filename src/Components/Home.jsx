import React from 'react';
import logo1 from '../assets/Home/c1.jpg';
import logo2 from '../assets/Home/c2.jpg';
import logo3 from '../assets/Home/c3.jpg';
import logo4 from '../assets/Home/c4.jpg';
import logo5 from '../assets/Home/c5.jpeg';
import logo6 from '../assets/Home/c6.jpg';

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

const Home = () => {
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

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl text-center font-bold text-green-600 mb-8">Updated Vacancies Unleashed!</h1>
      <div className="grid grid-cols-1 gap-2">
        {cards.map((card, index) => (
          <Card key={index} img={card.img} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;