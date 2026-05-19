"use client";

import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import PrivateRoute from "@/components/PrivateRoute";

export default function MyBookingsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [user]);

  return (
    <PrivateRoute>
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container-box">
        <h1 className="text-4xl md:text-6xl font-black">My Bookings</h1>
        <p className="text-slate-600 mt-4">
          Track and manage your booked cars.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-[32px] overflow-hidden border shadow-sm"
            >
              <img
                src={booking.carImage}
                alt={booking.carName}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-black">{booking.carName}</h2>
                <p className="text-slate-500 mt-2">{booking.carType}</p>

                <div className="mt-5 space-y-2 text-slate-600">
                  <p>Total Price: ${booking.totalPrice}</p>
                  <p>Driver Needed: {booking.driverNeeded}</p>
                  <p>
                    Booking Date:{" "}
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="bg-white rounded-[32px] p-10 mt-12 text-center shadow-sm">
            <h2 className="text-2xl font-black">No bookings found</h2>
          </div>
        )}
      </div>
    </main>
    </PrivateRoute>
  );
}