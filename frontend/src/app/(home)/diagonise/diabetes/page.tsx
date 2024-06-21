'use client';

import Image from 'next/image';
import { useState } from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../../../components/ui/input';
import { Button } from '../../../../../components/ui/button';
import { Label } from '../../../../../components/ui/label';
import { Card, CardHeader, CardContent } from '../../../../../components/ui/card';
import { APPLOGO } from '../../../../../public';

const diagnosisSchema = z.object({
  age: z.string().min(1, "Age must be at least 1").max(120, "Age must be less than 120"),
  bmi: z.string().min(10, "BMI must be at least 10").max(50, "BMI must be less than 50"),
  bloodPressure: z.string().min(50, "Blood Pressure must be at least 50").max(200, "Blood Pressure must be less than 200"),
  glucose: z.string().min(50, "Glucose level must be at least 50").max(300, "Glucose level must be less than 300"),
  insulin: z.string().min(0, "Insulin level must be at least 0").max(900, "Insulin level must be less than 900"),
  skinThickness: z.string().min(0, "Skin Thickness must be at least 0").max(100, "Skin Thickness must be less than 100"),
});

type DiagnosisFormInputs = z.infer<typeof diagnosisSchema>;

export default function Diagnosis() {
  const { control, handleSubmit, formState: { errors } } = useForm<DiagnosisFormInputs>({
    resolver: zodResolver(diagnosisSchema),
  });

  const onSubmit = async (data: DiagnosisFormInputs) => {
    console.log("Form data submitted: ", data);
    
    // Mock prediction logic
    const prediction = Math.random() > 0.5 ? "Positive" : "Negative";
    alert(`Form submitted successfully! Diabetes prediction: ${prediction}`);
  };

  return (
    <section className="w-full flex justify-center items-center p-8 bg-gray-100 pb-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-10xl gap-12">
        <Image
          alt={"diabetes"}
          src={APPLOGO}
          width={200}
          height={200}
          className="rounded-full col-start-1"
        />
        <Card className="w-full col-start-2 shadow-lg">
          <CardHeader>
            <h1 className="text-xl font-bold">Diabetes Diagnosis</h1>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label className="block text-sm font-medium text-gray-700">Age</Label>
                <Controller
                  name="age"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} value={field.value || ''} />}
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">BMI</Label>
                <Controller
                  name="bmi"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} value={field.value || ''} />}
                />
                {errors.bmi && <p className="text-red-500 text-sm mt-1">{errors.bmi.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Blood Pressure</Label>
                <Controller
                  name="bloodPressure"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} value={field.value || ''} />}
                />
                {errors.bloodPressure && <p className="text-red-500 text-sm mt-1">{errors.bloodPressure.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Glucose</Label>
                <Controller
                  name="glucose"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} value={field.value || ''} />}
                />
                {errors.glucose && <p className="text-red-500 text-sm mt-1">{errors.glucose.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Insulin</Label>
                <Controller
                  name="insulin"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} value={field.value || ''} />}
                />
                {errors.insulin && <p className="text-red-500 text-sm mt-1">{errors.insulin.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Skin Thickness</Label>
                <Controller
                  name="skinThickness"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} value={field.value || ''} />}
                />
                {errors.skinThickness && <p className="text-red-500 text-sm mt-1">{errors.skinThickness.message}</p>}
              </div>

              <Button type="submit" variant={"default"} className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
