"use client";

import CarCard from "@/components/CarCard";
import { useEffect, useMemo, useState } from "react";

export default function ExploreCarsPage() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchSearch = car.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchType = type === "All" || car.type === type;

      return matchSearch && matchType;
    });
  }, [cars, search, type]);

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container-box">
        <div className="rounded-[40px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 md:p-14 text-white shadow-2xl">
          <p className="text-blue-300 font-black uppercase tracking-[4px]">
            Explore Cars
          </p>

          <h1 className="text-4xl md:text-6xl font-black mt-4">
            Find Your Perfect Rental Car
          </h1>

          <p className="text-slate-300 mt-5 max-w-2xl leading-8">
            Search and filter available cars by name and type. Choose your
            favorite vehicle and book it instantly.
          </p>
        </div>

        <div className="mt-10 bg-white rounded-[32px] p-5 md:p-6 border border-slate-200 shadow-sm grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Search by car name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
          >
            <option value="All">All Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
            <option value="Luxury SUV">Luxury SUV</option>
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center py-24">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <>
            <div className="mt-10 flex items-center justify-between">
              <h2 className="text-2xl font-black">
                Total Cars: {filteredCars.length}
              </h2>

              <p className="text-slate-500">
                Showing available and unavailable cars
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
              {filteredCars.map((car) => (
                <CarCard key={car._id || car.id} car={car} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="bg-white rounded-[32px] p-10 mt-12 text-center shadow-sm">
                <h2 className="text-2xl font-black">No cars found</h2>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}