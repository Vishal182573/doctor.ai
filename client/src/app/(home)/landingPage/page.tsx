"use client"
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../../components/ui/carousel"
import { COURSOREL1,COURSOREL2,COURSOREL3,IMAGE1, IMAGE2,} from "../../../../public";
import Autoplay from "embla-carousel-autoplay"

export default function landingPage() {
    return (
        <section className="w-full  p-3">
            <div className="w-full flex justify-center items-center p-2 mb-12">
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
                    className="w-4/5"
                >
                    <CarouselContent>
                        <CarouselItem className="flex justify-center items-center">
                            <Image
                                alt="NULL"
                                src={COURSOREL1}
                                width="500"
                                height="500"
                            />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-center">
                            <Image
                                alt="NULL"
                                src={COURSOREL2}
                                width="500"
                                height="500"
                            />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-center">
                            <Image
                                alt="NULL"
                                src={COURSOREL3}
                                width="500"
                                height="500"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="flex mt-10 mx-10 justify-between items-center p-12 border-black rounded-md border-[1px]" id="about">
                <div className="mr-10 lg:mr-28 font-bold text-[10px] lg:text-lg">
                    <div className="text-3xl mb-8">ABOUT</div>
                    Welcome to Doctor.ai, a platform using machine learning to predict diseases accurately. Our tools analyze patient data and symptoms to identify health issues quickly. With an easy-to-use interface, Doctor.ai supports informed decisions for better health outcomes. Experience advanced disease prediction with Doctor.ai</div>
                <Image
                    alt="NULL"
                    src={IMAGE1}
                    className="rounded-lg w-24 lg:w-[150px]"
                />
            </div>
        </section>
    );
}

[]