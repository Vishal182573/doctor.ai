"use client"

import CardItem from "../../../../components/shared/CardItems";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  route:string;
}

export default function diagonises() {
  const cardsData: CardItemProps[] = [
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Diabetes',
      description: 'Description for Diabetes',
      route:'/diabetes'
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Breast Cancer',
      description: 'Description for Disease 2',
      route:'/breastCancer'
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Heart Disease',
      description: 'Description for Disease 3',
      route:'/heartDisease'
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Bone Fractures',
      description: 'Description for Disease 4',
      route:'/boneFracture'
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Lung Disease',
      description: 'Description for Disease 5',
      route:'/lungsDisease'
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Disease 6',
      description: 'Description for Disease 6',
      route:'/diabetes'
    },
  ];
  return (
    <section>
      <div className="w-full flex justify-center items-center p-8 pb-36 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl gap-12">
        {cardsData.map((card, index) => (
          <CardItem key={index} image={card.image} title={card.title} description={card.description} url={card.route}/>
        ))}
      </div>
      </div>
    </section>
  );
}

