"use client";

import PrivateRoute from "@/components/PrivateRoute";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function MyBookingsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = () => {
    if (user?.email) {
      setLoading(true);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Failed to load bookings");
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    loadBookings();
  }, [user]);

  const handleCancelBooking = async (id) => {
    const confirmCancel = confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Booking cancelled successfully");

        setBookings((prev) =>
          prev.filter((booking) => booking._id !== id)
        );
      } else {
        toast.error("Booking cancel failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <PrivateRoute>
      <main className="min-h-screen bg-slate-50 py-16">
        <div className="container-box">
          {/* HEADER */}
          <div className="rounded-[40px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 md:p-14 text-white shadow-2xl">
            <p className="text-blue-300 font-black uppercase tracking-[4px]">
              Booking Dashboard
            </p>

            <h1 className="text-4xl md:text-6xl font-black mt-4">
              My Bookings
            </h1>

            <p className="text-slate-300 mt-5 max-w-2xl leading-8">
              Track your booked cars, booking date, driver request and total
              rental cost from one clean dashboard.
            </p>
          </div>

          {/* SUMMARY */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-[30px] p-7 border border-slate-200 shadow-sm">
              <p className="text-slate-500 font-bold">Total Bookings</p>
              <h2 className="text-4xl font-black mt-2">{bookings.length}</h2>
            </div>

            <div className="bg-white rounded-[30px] p-7 border border-slate-200 shadow-sm">
              <p className="text-slate-500 font-bold">Total Cost</p>
              <h2 className="text-4xl font-black mt-2 text-blue-600">
                $
                {bookings.reduce(
                  (total, item) => total + Number(item.totalPrice || 0),
                  0
                )}
              </h2>
            </div>

            <div className="bg-white rounded-[30px] p-7 border border-slate-200 shadow-sm">
              <p className="text-slate-500 font-bold">Account</p>
              <h2 className="text-xl font-black mt-2 truncate">
                {user?.email}
              </h2>
            </div>
          </div>

          {/* LOADING */}
          {loading ? (
            <div className="flex justify-center py-24">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            </div>
          ) : (
            <>
              {/* BOOKINGS */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
                {bookings.map((booking) => (
                  <div
                    key={booking._id}
                    className="group bg-white rounded-[36px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={booking.carImage || "/images/car-card-1.jpg"}
                        alt={booking.carName}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />

                      <div className="absolute top-5 left-5 rounded-full bg-green-500 text-white text-xs font-black uppercase tracking-[2px] px-4 py-2">
                        Confirmed
                      </div>

                      <div className="absolute bottom-5 right-5 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-3">
                        <h3 className="text-2xl font-black text-blue-600">
                          ${booking.totalPrice}
                        </h3>
                        <p className="text-xs text-slate-500 uppercase font-bold">
                          Total
                        </p>
                      </div>
                    </div>

                    <div className="p-7">
                      <h2 className="text-2xl font-black">
                        {booking.carName}
                      </h2>

                      <p className="text-slate-500 mt-2">
                        {booking.carType}
                      </p>

                      <div className="mt-6 space-y-3 text-slate-600">
                        <div className="flex justify-between rounded-2xl bg-slate-100 p-4">
                          <span>Driver Needed</span>
                          <span className="font-black">
                            {booking.driverNeeded}
                          </span>
                        </div>

                        <div className="flex justify-between rounded-2xl bg-slate-100 p-4">
                          <span>Booking Date</span>
                          <span className="font-black">
                            {new Date(
                              booking.bookingDate
                            ).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="rounded-2xl bg-slate-100 p-4">
                          <p className="text-sm text-slate-500">
                            Special Note
                          </p>
                          <p className="font-semibold mt-1">
                            {booking.specialNote || "No note added"}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCancelBooking(booking._id)}
                        className="mt-6 w-full rounded-2xl bg-red-500 py-4 font-black text-white transition hover:bg-red-600"
                      >
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* EMPTY */}
              {bookings.length === 0 && (
                <div className="bg-white rounded-[36px] p-12 mt-12 text-center shadow-sm border border-slate-200">
                  <h2 className="text-3xl font-black">
                    No bookings found
                  </h2>

                  <p className="text-slate-500 mt-3">
                    You have not booked any car yet.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </PrivateRoute>
  );
}