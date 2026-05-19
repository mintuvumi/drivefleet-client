"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/car-banner-1.jpg",
  "/images/car-banner-2.jpg",
  "/images/car-banner-3.jpg",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide}
            alt="banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl text-white">
                <p className="text-blue-400 font-bold uppercase tracking-[4px]">
                  Premium Car Rental
                </p>

                <h1 className="text-5xl md:text-7xl font-black leading-tight mt-4">
                  Drive Luxury Cars With Comfort
                </h1>

                <p className="text-lg text-slate-200 mt-6 max-w-2xl">
                  Experience premium driving with our luxury fleet.
                  Book instantly and enjoy smooth rides.
                </p>

                <div className="flex gap-4 mt-8">
                  <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold">
                    Explore Cars
                  </button>

                  <button className="border border-white/40 hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl font-bold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}