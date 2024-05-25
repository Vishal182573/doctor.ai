"use client"

import CardItem from "../../../../components/shared/CardItems";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
}

export default function diagonises() {
  const cardsData: CardItemProps[] = [
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Disease 1',
      description: 'Description for Disease 1',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Disease 2',
      description: 'Description for Disease 2',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Disease 3',
      description: 'Description for Disease 3',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Disease 4',
      description: 'Description for Disease 4',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Disease 5',
      description: 'Description for Disease 5',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Disease 6',
      description: 'Description for Disease 6',
    },
  ];
  return (
    <section>
      <div className="w-full flex justify-center items-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl gap-12">
        {cardsData.map((card, index) => (
          <CardItem key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
      </div>
    </section>
  );
}

