"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <Link href="/" className="hover:text-blue-600 transition">
        Home
      </Link>
      <Link href="/explore-cars" className="hover:text-blue-600 transition">
        Explore Cars
      </Link>
      <Link href="/add-car" className="hover:text-blue-600 transition">
        Add Car
      </Link>
      <Link href="/my-bookings" className="hover:text-blue-600 transition">
        My Bookings
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="container-box h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="DriveFleet"
            className="w-11 h-11 rounded-2xl object-cover"
          />
          <span className="text-2xl font-black tracking-tight">
            Drive<span className="text-blue-600">Fleet</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-bold text-slate-700">
          {menuItems}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="px-6 py-3 rounded-full bg-slate-950 text-white font-black hover:bg-blue-600 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-black hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center font-black text-2xl"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
          <div className="container-box py-6 flex flex-col gap-5 font-bold text-slate-700">
            {menuItems}

            <Link
              href="/login"
              className="text-center px-6 py-3 rounded-full bg-slate-950 text-white font-black"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="text-center px-6 py-3 rounded-full bg-blue-600 text-white font-black"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}