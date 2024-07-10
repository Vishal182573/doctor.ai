"use client";

import Image from "next/image";
import { APPLOGO, COURSOREL1, COURSOREL2, COURSOREL3, IMAGE1 } from "../../public";
import { useSession, signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { HeroCarousel } from "../../components/shared/HeroCarousel";
import { HowItWorks } from "../../components/shared/How_it_works";
import { HealthTips } from "../../components/shared/HealthTips";
import Services from "../../components/shared/Services";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn(undefined, { callbackUrl: '/' });
    },
  });

  if (status !== 'authenticated') {
    return (
      <div className="bg-white animate-pulse h-screen w-screen absolute top-0 flex justify-center items-center">
        <p className="text-black text-4xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <HeroCarousel images={[COURSOREL1,COURSOREL2,COURSOREL3]}/>
        <section className="mb-16" id="about" >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">About Doctor.ai</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center">
              <div className="sm:w-2/3 pr-8">
                <p className="text-lg">
                  Welcome to Doctor.ai, a platform using machine learning to predict
                  diseases accurately. Our tools analyze patient data and symptoms to
                  identify health issues quickly. With an easy-to-use interface,
                  Doctor.ai supports informed decisions for better health outcomes.
                  Experience advanced disease prediction with Doctor.ai.
                </p>
              </div>
              <div className="sm:w-1/3 mt-4 sm:mt-0">
                <Image
                  alt="Doctor.ai Logo"
                  src={IMAGE1}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>
        <Services/>
        <HealthTips/>
        <HowItWorks/>
      </main>
    </div>
  );
}