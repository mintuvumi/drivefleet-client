"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddCarPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleAddCar = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    const form = e.target;

    const carData = {
      name: form.name.value,
      price: Number(form.price.value),
      type: form.type.value,
      image: form.image.value,
      seats: Number(form.seats.value),
      location: form.location.value,
      description: form.description.value,
      status: form.status.value,
      booking_count: 0,
      ownerName: user?.displayName,
      ownerEmail: user?.email,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Car added successfully");
        form.reset();
        router.push("/explore-cars");
      }
    } catch (error) {
      toast.error("Failed to add car");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container-box">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-600 font-black uppercase tracking-[4px]">
            Add Car
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-4">
            List Your Vehicle
          </h1>
          <p className="text-slate-600 mt-5">
            Add your car details and make it available for rental.
          </p>
        </div>

        <form
          onSubmit={handleAddCar}
          className="mt-12 max-w-5xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-200 grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="font-bold text-slate-700">Car Name</label>
            <input
              name="name"
              required
              placeholder="BMW X5 Series"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">
              Daily Rent Price
            </label>
            <input
              name="price"
              type="number"
              required
              placeholder="120"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">Car Type</label>
            <select
              name="type"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            >
              <option value="">Select Type</option>
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
              required
              placeholder="/images/car-card-1.jpg or imgbb URL"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">Seat Capacity</label>
            <input
              name="seats"
              type="number"
              required
              placeholder="5"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">
              Pickup Location
            </label>
            <input
              name="location"
              required
              placeholder="Dhaka"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">
              Availability Status
            </label>
            <select
              name="status"
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
              required
              placeholder="Write car description..."
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          <button className="md:col-span-2 rounded-2xl bg-blue-600 py-4 text-white font-black hover:bg-blue-700 transition">
            Add Car
          </button>
        </form>
      </div>
    </main>
  );
}