import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const tips = [
  { title: "Stay Hydrated", content: "Drink at least 8 glasses of water daily." },
  { title: "Exercise Regularly", content: "Aim for 30 minutes of moderate exercise most days." },
  { title: "Get Enough Sleep", content: "Adults should get 7-9 hours of sleep per night." },
  { title: "Eat a Balanced Diet", content: "Include a variety of fruits, vegetables, and whole grains." },
];

export function HealthTips() {
  return (
    <>
    <h2 className='font-bold text-3xl mb-3 p-5'>Some Health related tips -</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
      {tips.map((tip, index) => (
        <Card key={index} className=' hover:animate-accordion-up transition-transform'>
          <CardHeader>
            <CardTitle>{tip.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{tip.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    </>
  );
}