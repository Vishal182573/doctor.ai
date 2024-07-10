import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Services() {
  const services = [
    {
      title: "AI Diagnosis",
      description: "Get quick and accurate disease predictions based on your symptoms and medical history.",
      action: "Try Now",
      steps: [
        "Input your symptoms and medical history",
        "Our AI analyzes the information",
        "Receive a detailed diagnosis report",
        "Consult with a doctor if recommended",
      ],
      route: "/aiAnalysis"
    },
    {
      title: "Test Report Analysis",
      description: "Upload your medical test reports for AI-powered analysis and interpretation.",
      action: "Upload Report",
      steps: [
        "Upload your medical test reports",
        "Our AI processes and analyzes the data",
        "Get a comprehensive interpretation",
        "Share results with your healthcare provider",
      ],
      route: "/diagonise",
    },
    {
      title: "Health Monitoring",
      description: "Track your health metrics over time and receive personalized recommendations.",
      action: "Start Monitoring",
      steps: [
        "Set up your health profile",
        "Input or sync your health data regularly",
        "Receive personalized insights and trends",
        "Get alerts for any concerning changes",
      ],
      route: "/",
    },
  ];
  const router = useRouter();
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 rounded-2xl py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{service.description}</p>
                <h4 className="font-semibold mb-2">How it works:</h4>
                <ol className="list-decimal list-inside">
                  {service.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="mb-1">{step}</li>
                  ))}
                </ol>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={()=>{router.push(service.route)}}>{service.action}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Guidelines for Using Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Always provide accurate and up-to-date information for the best results.</li>
            <li>Our AI-powered services are meant to assist, not replace, professional medical advice.</li>
            <li>If you experience severe symptoms or have concerns, consult a healthcare professional immediately.</li>
            <li>Keep your health profile updated to receive the most relevant recommendations.</li>
            <li>Regularly back up your health data and maintain your privacy by using strong passwords.</li>
            <li>Share your AI-generated reports with your doctor for a comprehensive evaluation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}