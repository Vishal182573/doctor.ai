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
import { APPLOGO } from '../../../../../public';  // Replace with the correct path to your logo

const diagnosisSchema = z.object({
  age: z.number().min(1, "Age must be at least 1").max(120, "Age must be less than 120"),
  tumorSize: z.number().min(1, "Tumor size must be at least 1").max(100, "Tumor size must be less than 100"),
  nodeStatus: z.number().min(0, "Node status must be at least 0").max(50, "Node status must be less than 50"),
  erStatus: z.string().nonempty("ER status is required"),
  prStatus: z.string().nonempty("PR status is required"),
  her2Status: z.string().nonempty("HER2 status is required"),
  bmi: z.number().min(10, "BMI must be at least 10").max(50, "BMI must be less than 50"),
  bloodPressure: z.number().min(50, "Blood Pressure must be at least 50").max(200, "Blood Pressure must be less than 200"),
  glucose: z.number().min(50, "Glucose level must be at least 50").max(300, "Glucose level must be less than 300"),
  insulin: z.number().min(0, "Insulin level must be at least 0").max(900, "Insulin level must be less than 900"),
  skinThickness: z.number().min(0, "Skin Thickness must be at least 0").max(100, "Skin Thickness must be less than 100"),
});

type DiagnosisFormInputs = z.infer<typeof diagnosisSchema>;

export default function BreastCancerDiagnosis() {
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
      <div className="lg:grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 w-full max-w-12xl gap-9">
        <Image
          alt="breast cancer"
          src={APPLOGO}
          width={200}
          height={200}
          className="rounded-full col-start-1 hidden lg:block"
        />
        <Card className="w-full col-start-2 shadow-lg auto-cols-auto">
          <CardHeader>
            <h1 className="text-xl font-bold text-center">Breast Cancer Diagnosis</h1>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                <Label className="block text-sm font-medium text-gray-700">Tumor Size</Label>
                <Controller
                  name="tumorSize"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.tumorSize && <p className="text-red-500 text-sm mt-1">{errors.tumorSize.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Node Status</Label>
                <Controller
                  name="nodeStatus"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.nodeStatus && <p className="text-red-500 text-sm mt-1">{errors.nodeStatus.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">ER Status</Label>
                <Controller
                  name="erStatus"
                  control={control}
                  render={({ field }) => <Input type="text" {...field} />}
                />
                {errors.erStatus && <p className="text-red-500 text-sm mt-1">{errors.erStatus.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">PR Status</Label>
                <Controller
                  name="prStatus"
                  control={control}
                  render={({ field }) => <Input type="text" {...field} />}
                />
                {errors.prStatus && <p className="text-red-500 text-sm mt-1">{errors.prStatus.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">HER2 Status</Label>
                <Controller
                  name="her2Status"
                  control={control}
                  render={({ field }) => <Input type="text" {...field} />}
                />
                {errors.her2Status && <p className="text-red-500 text-sm mt-1">{errors.her2Status.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">BMI</Label>
                <Controller
                  name="bmi"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.bmi && <p className="text-red-500 text-sm mt-1">{errors.bmi.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Blood Pressure</Label>
                <Controller
                  name="bloodPressure"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.bloodPressure && <p className="text-red-500 text-sm mt-1">{errors.bloodPressure.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Glucose</Label>
                <Controller
                  name="glucose"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.glucose && <p className="text-red-500 text-sm mt-1">{errors.glucose.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Insulin</Label>
                <Controller
                  name="insulin"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.insulin && <p className="text-red-500 text-sm mt-1">{errors.insulin.message}</p>}
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">Skin Thickness</Label>
                <Controller
                  name="skinThickness"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.skinThickness && <p className="text-red-500 text-sm mt-1">{errors.skinThickness.message}</p>}
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
