"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* TOP GLOW */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="container-box relative z-10 py-20">
        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-12 border-b border-white/10 pb-14">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/images/car-logo.jpg"
                alt="DriveFleet"
                className="w-14 h-14 rounded-2xl object-cover shadow-2xl"
              />

              <div>
                <h2 className="text-3xl font-black">
                  Drive<span className="text-blue-500">Fleet</span>
                </h2>

                <p className="text-xs uppercase tracking-[3px] text-slate-400 mt-1">
                  Premium Car Rental
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-8 mt-6">
              DriveFleet provides a modern, secure and premium
              car rental experience with luxury vehicles,
              smart booking and trusted support.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer text-xl">
                f
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer text-xl">
                in
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer text-xl">
                ig
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-2xl font-black">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4 text-slate-400 font-medium">
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>

              <Link
                href="/explore-cars"
                className="hover:text-blue-400 transition"
              >
                Explore Cars
              </Link>

              <Link
                href="/add-car"
                className="hover:text-blue-400 transition"
              >
                Add Car
              </Link>

              <Link
                href="/my-bookings"
                className="hover:text-blue-400 transition"
              >
                My Bookings
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-2xl font-black">Services</h3>

            <div className="mt-6 flex flex-col gap-4 text-slate-400 font-medium">
              <p>Luxury Car Rental</p>
              <p>Airport Transfer</p>
              <p>Business Travel</p>
              <p>Wedding Car Service</p>
              <p>Corporate Booking</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-black">Contact</h3>

            <div className="mt-6 flex flex-col gap-5 text-slate-400">
              <div>
                <p className="text-sm uppercase tracking-[3px] text-slate-500">
                  Phone
                </p>

                <h4 className="text-lg font-bold mt-2">
                  +880 1234-567890
                </h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[3px] text-slate-500">
                  Email
                </p>

                <h4 className="text-lg font-bold mt-2">
                  support@drivefleet.com
                </h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[3px] text-slate-500">
                  Location
                </p>

                <h4 className="text-lg font-bold mt-2">
                  Dhaka, Bangladesh
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8">
          <p className="text-slate-500 text-center md:text-left">
            © 2026 DriveFleet. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-slate-500">
            <p className="hover:text-blue-400 transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-blue-400 transition cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}