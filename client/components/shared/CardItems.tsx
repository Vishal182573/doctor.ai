"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

interface CardItemProps {
  image: string;
  title: string;
  description: string;
}

const CardItem: React.FC<CardItemProps> = ({ image, title, description }) => {
  return (
    <Card className="transform transition duration-500 hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent>
        <CardTitle>
        <div className="text-2xl font-bold">{title}</div>
        </CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Predict Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;