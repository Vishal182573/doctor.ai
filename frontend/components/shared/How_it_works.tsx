import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function HowItWorks() {
  return (
    <section className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl mt-9 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">How Doctor.ai Works</h2>
        <Tabs defaultValue="input" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="input">1. Input Data</TabsTrigger>
            <TabsTrigger value="analyze">2. AI Analysis</TabsTrigger>
            <TabsTrigger value="results">3. Get Results</TabsTrigger>
          </TabsList>
          <TabsContent value="input">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Step 1: Input Your Health Data</CardTitle>
                <CardDescription>Provide detailed information about your symptoms and medical history</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-3">
                  <li>Describe your symptoms in detail, including duration and severity</li>
                  <li>Provide information about your medical history and any existing conditions</li>
                  <li>Mention any medications you're currently taking</li>
                  <li>Upload relevant medical test reports or images if available</li>
                  <li>Answer a series of targeted questions to gather more context</li>
                </ul>
                <p className="mt-4 text-gray-600">Your detailed input helps our AI generate more accurate results.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analyze">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Step 2: AI Analysis</CardTitle>
                <CardDescription>Our advanced AI processes your information in the backend</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Once you submit your health data, our sophisticated AI algorithms get to work:</p>
                <ol className="list-decimal list-inside space-y-3">
                  <li>Natural Language Processing (NLP) interprets your symptom descriptions</li>
                  <li>Machine Learning models analyze patterns in your symptoms and medical history</li>
                  <li>Your data is cross-referenced with extensive medical databases</li>
                  <li>AI considers demographic factors and risk profiles</li>
                  <li>Multiple diagnostic possibilities are evaluated and ranked</li>
                </ol>
                <p className="mt-4 text-gray-600">This process typically takes just a few seconds to complete.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Step 3: Get Your Results</CardTitle>
                <CardDescription>Review your personalized health insights and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">After the AI analysis, you'll receive a comprehensive report including:</p>
                <ul className="list-disc list-inside space-y-3">
                  <li>Potential diagnoses ranked by probability</li>
                  <li>Detailed explanations for each potential diagnosis</li>
                  <li>Recommended next steps, such as tests or specialist consultations</li>
                  <li>Personalized health advice and precautions</li>
                  <li>Links to reliable medical resources for further reading</li>
                </ul>
                <p className="mt-4 text-gray-600">Remember, while our AI provides valuable insights, it's always recommended to consult with a healthcare professional for a definitive diagnosis.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}