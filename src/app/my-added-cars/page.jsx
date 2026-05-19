"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function MyAddedCarsPage() {
  const { user } = useAuth();
  const [cars, setCars] = useState([]);

  const loadCars = () => {
    if (user?.email) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-cars?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setCars(data));
    }
  };

  useEffect(() => {
    loadCars();
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This car will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it",
    });

    if (confirm.isConfirmed) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Car deleted successfully");
        loadCars();
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container-box">
        <div className="rounded-[40px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 md:p-14 text-white">
          <p className="text-blue-300 font-black uppercase tracking-[4px]">
            My Added Cars
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-4">
            Manage Your Listed Cars
          </h1>
          <p className="text-slate-300 mt-5">
            Update, delete and track all vehicles you added.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {cars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-[32px] overflow-hidden border shadow-sm"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-black">{car.name}</h2>
                <p className="text-slate-500 mt-2">{car.type}</p>

                <div className="mt-4 space-y-2 text-slate-600">
                  <p>Price: ${car.price}/day</p>
                  <p>Location: {car.location}</p>
                  <p>Status: {car.status}</p>
                  <p>Bookings: {car.booking_count || 0}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Link
                    href={`/update-car/${car._id}`}
                    className="text-center bg-blue-600 text-white py-3 rounded-2xl font-black"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => handleDelete(car._id)}
                    className="bg-red-500 text-white py-3 rounded-2xl font-black"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cars.length === 0 && (
          <div className="bg-white rounded-[32px] p-10 mt-12 text-center">
            <h2 className="text-2xl font-black">No cars added yet</h2>
          </div>
        )}
      </div>
    </main>
  );
}