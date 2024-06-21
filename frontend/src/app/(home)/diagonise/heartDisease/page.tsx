'use client';

import Image from 'next/image';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../../../components/ui/input';
import { Button } from '../../../../../components/ui/button';
import { Label } from '../../../../../components/ui/label';
import { Card, CardHeader, CardContent } from '../../../../../components/ui/card';
import { APPLOGO } from '../../../../../public';  // Replace with the correct path to your logo

const diagnosisSchema = z.object({
  age: z.number().min(1, "Age must be at least 1").max(120, "Age must be less than 120"),
  sex: z.number().min(0, "Sex must be 0 or 1").max(1, "Sex must be 0 or 1"),
  chestPainType: z.number().min(0, "Chest pain type must be between 0 and 3").max(3, "Chest pain type must be between 0 and 3"),
  restingBloodPressure: z.number().min(50, "Resting blood pressure must be at least 50").max(200, "Resting blood pressure must be less than 200"),
  serumCholestrol: z.number().min(100, "Serum cholesterol must be at least 100 mg/dl").max(600, "Serum cholesterol must be less than 600 mg/dl"),
  fastingBloodSugar: z.boolean(),
  restingECG: z.number().min(0, "Resting ECG result must be between 0 and 2").max(2, "Resting ECG result must be between 0 and 2"),
  maxHeartRate: z.number().min(60, "Maximum heart rate achieved must be at least 60").max(220, "Maximum heart rate achieved must be less than 220"),
  exerciseInducedAngina: z.boolean(),
  stDepression: z.number().min(0, "ST depression induced by exercise must be at least 0").max(10, "ST depression induced by exercise must be less than 10"),
  slope: z.number().min(0, "Slope of the peak exercise ST segment must be between 0 and 2").max(2, "Slope of the peak exercise ST segment must be between 0 and 2"),
  numMajorVessels: z.number().min(0, "Number of major vessels colored by flourosopy must be between 0 and 3").max(3, "Number of major vessels colored by flourosopy must be between 0 and 3"),
  thal: z.number().min(0, "Thal result must be between 0 and 2").max(2, "Thal result must be between 0 and 2"),
});

type DiagnosisFormInputs = z.infer<typeof diagnosisSchema>;

export default function HeartDiseaseDiagnosis() {
  const { control, handleSubmit, formState: { errors } } = useForm<DiagnosisFormInputs>({
    resolver: zodResolver(diagnosisSchema),
  });

  const onSubmit = async (data: DiagnosisFormInputs) => {
    // Replace this with your API call or prediction logic
    console.log("Form data submitted: ", data);
    alert("Form submitted successfully!");
  };

  return (
    <section className="w-full flex justify-center items-center p-8 bg-gray-100 pb-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
        <Image
          alt="heart disease"
          src={APPLOGO}
          width={200}
          height={200}
          className="rounded-full"
        />
        <Card className="w-full shadow-lg">
          <CardHeader>
            <h1 className="text-xl font-bold">Heart Disease Diagnosis</h1>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium text-gray-700">Age</Label>
                  <Controller
                    name="age"
                    control={control}
                    render={({ field }) => <Input type="number" {...field} />}
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700">Sex</Label>
                  <Controller
                    name="sex"
                    control={control}
                    render={({ field }) => <Input type="number" {...field} />}
                  />
                  {errors.sex && <p className="text-red-500 text-sm mt-1">{errors.sex.message}</p>}
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Chest Pain Type</Label>
                <Controller
                  name="chestPainType"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.chestPainType && <p className="text-red-500 text-sm mt-1">{errors.chestPainType.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Resting Blood Pressure</Label>
                <Controller
                  name="restingBloodPressure"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.restingBloodPressure && <p className="text-red-500 text-sm mt-1">{errors.restingBloodPressure.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Serum Cholesterol (mg/dl)</Label>
                <Controller
                  name="serumCholestrol"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.serumCholestrol && <p className="text-red-500 text-sm mt-1">{errors.serumCholestrol.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium text-gray-700">Fasting Blood Sugar &gt; 120 mg/dl</Label>
                  <Controller
                    name="fastingBloodSugar"
                    control={control}
                    render={({ field }) => (
                      <Input type="checkbox" {...field} className="form-checkbox h-5 w-5 text-indigo-600" />
                    )}
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700">Resting ECG Result</Label>
                  <Controller
                    name="restingECG"
                    control={control}
                    render={({ field }) => <Input type="number" {...field} />}
                  />
                  {errors.restingECG && <p className="text-red-500 text-sm mt-1">{errors.restingECG.message}</p>}
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Maximum Heart Rate Achieved</Label>
                <Controller
                  name="maxHeartRate"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.maxHeartRate && <p className="text-red-500 text-sm mt-1">{errors.maxHeartRate.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium text-gray-700">Exercise Induced Angina</Label>
                  <Controller
                    name="exerciseInducedAngina"
                    control={control}
                    render={({ field }) => (
                      <Input type="checkbox" {...field} className="form-checkbox h-5 w-5 text-indigo-600" />
                    )}
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700">ST Depression Induced by Exercise</Label>
                  <Controller
                    name="stDepression"
                    control={control}
                    render={({ field }) => <Input type="number" {...field} />}
                  />
                  {errors.stDepression && <p className="text-red-500 text-sm mt-1">{errors.stDepression.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium text-gray-700">Slope of Peak Exercise ST Segment</Label>
                  <Controller
                    name="slope"
                    control={control}
                    render={({ field }) => <Input type="number" {...field} />}
                  />
                  {errors.slope && <p className="text-red-500 text-sm mt-1">{errors.slope.message}</p>}
                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700">Number of Major Vessels Colored by Fluoroscopy</Label>
                  <Controller
                    name="numMajorVessels"
                    control={control}
                    render={({ field }) => <Input type="number" {...field} />}
                  />
                  {errors.numMajorVessels && <p className="text-red-500 text-sm mt-1">{errors.numMajorVessels.message}</p>}
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Thal : (0 = normal or 1=fixed defect or 2 = reversable defect)</Label>
                <Controller
                  name="thal"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.thal && <p className="text-red-500 text-sm mt-1">{errors.thal.message}</p>}
              </div>

              <Button type="submit" variant="default" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
