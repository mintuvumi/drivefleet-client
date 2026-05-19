"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const cars = [
  {
    id: "1",
    name: "BMW X5 Series",
    type: "Luxury SUV",
    price: 120,
    seats: 5,
    status: "Available",
    image: "/images/car-card-1.jpg",
    location: "Dhaka",
    description:
      "Premium luxury SUV with comfort, power and modern safety features.",
  },
  {
    id: "2",
    name: "Audi A6 Premium",
    type: "Luxury Sedan",
    price: 100,
    seats: 5,
    status: "Available",
    image: "/images/car-card-2.jpg",
    location: "Chattogram",
    description:
      "Elegant sedan for business, family and premium city rides.",
  },
  {
    id: "3",
    name: "Toyota Corolla",
    type: "Sedan",
    price: 55,
    seats: 5,
    status: "Available",
    image: "/images/car-card-3.jpg",
    location: "Sylhet",
    description:
      "Reliable sedan with excellent fuel efficiency and comfort.",
  },
  {
    id: "4",
    name: "Honda Civic",
    type: "Sedan",
    price: 65,
    seats: 5,
    status: "Available",
    image: "/images/car-card-4.jpg",
    location: "Dhaka",
    description:
      "Sporty, stylish and comfortable sedan for daily and long rides.",
  },
  {
    id: "5",
    name: "Range Rover Evoque",
    type: "Luxury SUV",
    price: 150,
    seats: 5,
    status: "Available",
    image: "/images/car-card-5.jpg",
    location: "Cox's Bazar",
    description:
      "Luxury SUV with premium interior and powerful road presence.",
  },
  {
    id: "6",
    name: "Hyundai Tucson",
    type: "SUV",
    price: 80,
    seats: 5,
    status: "Available",
    image: "/images/car-card-6.jpg",
    location: "Khulna",
    description:
      "Modern SUV with smooth performance and excellent comfort.",
  },
];

export default function CarDetailsPage() {
  const { user } = useAuth();
  const params = useParams();
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const car = cars.find((item) => item.id === params.id);

  if (!car) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center bg-white p-10 rounded-[32px] shadow-xl">
          <h1 className="text-4xl font-black">Car Not Found</h1>
          <Link href="/" className="text-blue-600 font-bold mt-4 inline-block">
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  const handleOpenBooking = () => {
    if (!user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    setOpenModal(true);
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    const driverNeeded = e.target.driverNeeded.value;
    const specialNote = e.target.specialNote.value;

    const bookingData = {
      carId: car.id,
      carName: car.name,
      carImage: car.image,
      carType: car.type,
      carLocation: car.location,
      dailyPrice: car.price,
      totalPrice: car.price,
      driverNeeded,
      specialNote,
      bookingDate: new Date().toISOString(),
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Booking successful");
        setOpenModal(false);
        router.push("/my-bookings");
      }
    } catch (error) {
      toast.error("Booking failed");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container-box grid lg:grid-cols-2 gap-10 items-start">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-[560px] object-cover rounded-[40px] shadow-2xl"
        />

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-200">
          <p className="text-blue-600 font-black uppercase tracking-[4px]">
            {car.type}
          </p>

          <h1 className="text-4xl md:text-6xl font-black mt-4">{car.name}</h1>

          <p className="text-slate-600 mt-6 leading-8">{car.description}</p>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <div className="bg-slate-100 rounded-3xl p-5">
              <p className="text-slate-500">Daily Rent</p>
              <h3 className="text-3xl font-black text-blue-600">
                ${car.price}
              </h3>
            </div>

            <div className="bg-slate-100 rounded-3xl p-5">
              <p className="text-slate-500">Seats</p>
              <h3 className="text-3xl font-black">{car.seats}</h3>
            </div>

            <div className="bg-slate-100 rounded-3xl p-5">
              <p className="text-slate-500">Location</p>
              <h3 className="text-2xl font-black">{car.location}</h3>
            </div>

            <div className="bg-green-100 rounded-3xl p-5">
              <p className="text-green-700">Status</p>
              <h3 className="text-2xl font-black text-green-700">
                {car.status}
              </h3>
            </div>
          </div>

          <button
            onClick={handleOpenBooking}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-3xl font-black text-lg transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="w-full max-w-xl bg-white rounded-[36px] p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h2 className="text-3xl font-black">Book This Car</h2>
                <p className="text-slate-500 mt-2">{car.name}</p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="w-10 h-10 rounded-full bg-slate-100 font-black"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleBooking} className="mt-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-slate-500 text-sm">User</p>
                  <h4 className="font-black">{user?.displayName}</h4>
                </div>

                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-slate-500 text-sm">Total Price</p>
                  <h4 className="font-black text-blue-600">${car.price}</h4>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700">
                  Driver Needed
                </label>
                <select
                  name="driverNeeded"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700">
                  Special Note
                </label>
                <textarea
                  name="specialNote"
                  rows="4"
                  placeholder="Write pickup time, location or any special request..."
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button className="w-full rounded-2xl bg-blue-600 py-4 text-white font-black hover:bg-blue-700 transition">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}