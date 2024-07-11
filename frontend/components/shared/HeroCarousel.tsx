import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";

interface CarouselImage {
  src: string;
}

interface HeroCarouselProps {
  images: CarouselImage[];
}

export function HeroCarousel({ images }: HeroCarouselProps) {
    const router = useRouter();
  const handleclick = ()=>{
    router.push("/diagonise");
  }
  return (
    <section className="mb-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="rounded-lg overflow-hidden shadow-2xl"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                alt={image.src}
                src={image.src}
                width={1200}
                height={600}
                className="object-cover w-full h-[60vh]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-center">
                  <h2 className="text-4xl font-bold mb-4">Welcome to Doctor.ai</h2>
                  <p className="text-xl mb-6">AI-Powered Health Diagnostics at Your Fingertips</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={handleclick}>
                    Get Started
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </section>
  );
}