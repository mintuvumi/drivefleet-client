"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const menuItems = (
    <>
      <Link
        href="/"
        className="hover:text-blue-600 transition duration-300"
      >
        Home
      </Link>

      <Link
        href="/explore-cars"
        className="hover:text-blue-600 transition duration-300"
      >
        Explore Cars
      </Link>

      <Link
        href="/add-car"
        className="hover:text-blue-600 transition duration-300"
      >
        Add Car
      </Link>

      <Link
        href="/my-bookings"
        className="hover:text-blue-600 transition duration-300"
      >
        My Bookings
      </Link>

      <Link
        href="/my-added-cars"
        className="hover:text-blue-600 transition duration-300"
      >
        My Cars
      </Link>
    </>
  );

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-xl border-b border-slate-200"
          : "bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div
        className={`container-box flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-20" : "h-24"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <div
            className={`overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 ${
              scrolled ? "w-12 h-12" : "w-14 h-14"
            }`}
          >
            <img
              src="/images/car-logo.jpg"
              alt="DriveFleet"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2
              className={`font-black leading-none transition-all duration-500 ${
                scrolled ? "text-2xl" : "text-3xl"
              }`}
            >
              Drive<span className="text-blue-600">Fleet</span>
            </h2>

            <p className="text-xs text-slate-500 font-semibold tracking-[2px] uppercase mt-1">
              Premium Car Rental
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 font-bold text-slate-700">
          {menuItems}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-3 rounded-full bg-slate-100 px-3 py-2">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="user"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white"
                />

                <div>
                  <p className="font-black text-sm leading-none">
                    {user?.displayName}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Active User
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="px-6 py-3 rounded-full bg-red-500 text-white font-black hover:bg-red-600 transition shadow-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-6 py-3 rounded-full bg-slate-950 text-white font-black hover:bg-blue-600 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-black hover:bg-blue-700 transition shadow-xl shadow-blue-200"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center font-black text-2xl"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-2xl shadow-2xl">
          <div className="container-box py-6 flex flex-col gap-5 font-bold text-slate-700">
            {menuItems}

            {user ? (
              <button
                onClick={handleLogout}
                className="text-center px-6 py-4 rounded-full bg-red-500 text-white font-black"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-center px-6 py-4 rounded-full bg-slate-950 text-white font-black"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="text-center px-6 py-4 rounded-full bg-blue-600 text-white font-black"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}