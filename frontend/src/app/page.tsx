"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { COURSOREL1, COURSOREL2, COURSOREL3, IMAGE1 } from "../../public";
import { useEffect, useState } from "react"
import { useSession, signIn } from "next-auth/react";
import Autoplay from "embla-carousel-autoplay";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn(undefined, { callbackUrl: '/' });
    },
  });
  console.log(session)
  if (status !== 'authenticated') {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>

        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <section className="w-full p-3  pb-36 bg-gray-100">
      <div className="w-full flex justify-between items-center p-2 mb-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="rounded-lg border-2 border-black p-6"
        >
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center">
              <Image
                alt="Carousel Image 1"
                src={COURSOREL1}
                width="800"
                height="800"
                className="rounded-lg "
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image
                alt="Carousel Image 2"
                src={COURSOREL2}
                width="800"
                height="800"
                className="rounded-lg "
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image
                alt="Carousel Image 3"
                src={COURSOREL3}
                width="800"
                height="800"
                className="rounded-lg "
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
        </Carousel>
      </div>
      <div
        className="flex mt-10 mx-10 justify-between items-center p-12 border-black rounded-md border-[1px]"
        id="about"
      >
        <div className="mr-10 lg:mr-28 font-bold text-[10px] lg:text-lg">
          <div className="text-3xl mb-8">ABOUT</div>
          Welcome to Doctor.ai, a platform using machine learning to predict
          diseases accurately. Our tools analyze patient data and symptoms to
          identify health issues quickly. With an easy-to-use interface,
          Doctor.ai supports informed decisions for better health outcomes.
          Experience advanced disease prediction with Doctor.ai
        </div>
        <Image
          alt="Doctor.ai Logo"
          src={IMAGE1}
          className="rounded-lg w-24 lg:w-[150px]"
        />
      </div>
    </section>
  );
}
