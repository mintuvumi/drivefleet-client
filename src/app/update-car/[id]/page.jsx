"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import PrivateRoute from "@/components/PrivateRoute";

export default function UpdateCarPage() {
  const { id } = useParams();
  const router = useRouter();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedCar = {
      price: form.price.value,
      description: form.description.value,
      status: form.status.value,
      image: form.image.value,
      type: form.type.value,
      location: form.location.value,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Car updated successfully");
      router.push("/my-added-cars");
    } else {
      toast.error("No changes made");
    }
  };

  if (!car) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </main>
    );
  }

  return (
    <PrivateRoute>
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container-box">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-600 font-black uppercase tracking-[4px]">
            Update Car
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-4">
            Edit Vehicle Details
          </h1>
        </div>

        <form
          onSubmit={handleUpdate}
          className="mt-12 max-w-5xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-200 grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="font-bold text-slate-700">Daily Rent Price</label>
            <input
              name="price"
              type="number"
              defaultValue={car.price}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">Car Type</label>
            <select
              name="type"
              defaultValue={car.type}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            >
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
              <option value="Luxury SUV">Luxury SUV</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700">Image URL</label>
            <input
              name="image"
              defaultValue={car.image}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">Pickup Location</label>
            <input
              name="location"
              defaultValue={car.location}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">Availability</label>
            <select
              name="status"
              defaultValue={car.status}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="font-bold text-slate-700">Description</label>
            <textarea
              name="description"
              rows="5"
              defaultValue={car.description}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <button className="md:col-span-2 rounded-2xl bg-blue-600 py-4 text-white font-black hover:bg-blue-700 transition">
            Update Car
          </button>
        </form>
      </div>
    </main>
    </PrivateRoute>
  );
}