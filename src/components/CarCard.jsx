"use client";

import Image from "next/image";
import Link from "next/link";

export default function CarCard({ car }) {
  return (
    <div className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
      
      {/* IMAGE */}
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          priority
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* STATUS */}
        <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-[2px] text-white shadow-lg">
          {car.status}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900">
              {car.name}
            </h3>

            <p className="mt-2 text-slate-500">
              {car.type}
            </p>
          </div>

          <div className="text-right">
            <h4 className="text-3xl font-black text-blue-600">
              ${car.price}
            </h4>

            <p className="text-sm text-slate-500">
              Per Day
            </p>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-7 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-slate-100 p-4 text-center">
            <p className="text-sm text-slate-500">
              Seats
            </p>

            <h5 className="mt-1 text-xl font-black">
              {car.seats}
            </h5>
          </div>

          <div className="rounded-2xl bg-slate-100 p-4 text-center">
            <p className="text-sm text-slate-500">
              Transmission
            </p>

            <h5 className="mt-1 text-xl font-black">
              Auto
            </h5>
          </div>
        </div>

        {/* BUTTON */}
      <Link
        href={`/cars/${car._id || car.id}`}
        className="mt-8 flex w-full items-center justify-center rounded-2xl bg-slate-900 py-4 text-lg font-black text-white transition duration-300 hover:bg-blue-600"
      >
        View Details
      </Link>
      </div>
    </div>
  );
}