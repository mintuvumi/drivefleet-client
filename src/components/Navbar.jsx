import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="container-box h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="DriveFleet" className="w-11 h-11 rounded-xl" />
          <span className="text-2xl font-black tracking-tight">
            Drive<span className="text-blue-600">Fleet</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
          <Link href="/">Home</Link>
          <Link href="/explore-cars">Explore Cars</Link>
          <Link href="/add-car">Add Car</Link>
          <Link href="/my-bookings">My Bookings</Link>
        </div>

        <Link
          href="/login"
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}