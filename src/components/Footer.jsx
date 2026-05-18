import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-0">
      <div className="container-box py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="DriveFleet"
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <span className="text-3xl font-black">
              Drive<span className="text-blue-400">Fleet</span>
            </span>
          </Link>

          <p className="text-slate-400 mt-5 max-w-md leading-7">
            DriveFleet is a premium car rental platform where users can explore,
            book, and manage vehicles with a smooth and secure experience.
          </p>

          <div className="flex gap-3 mt-6">
            <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center font-black">
              f
            </span>
            <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center font-black">
              X
            </span>
            <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center font-black">
              in
            </span>
            <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center font-black">
              yt
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black mb-5">Useful Links</h3>

          <div className="space-y-3 text-slate-400">
            <p>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </p>
            <p>
              <Link href="/explore-cars" className="hover:text-white transition">
                Explore Cars
              </Link>
            </p>
            <p>
              <Link href="/add-car" className="hover:text-white transition">
                Add Car
              </Link>
            </p>
            <p>
              <Link href="/my-bookings" className="hover:text-white transition">
                My Bookings
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black mb-5">Contact Info</h3>

          <div className="space-y-3 text-slate-400">
            <p>Email: support@drivefleet.com</p>
            <p>Phone: +880 1700-000000</p>
            <p>Location: Dhaka, Bangladesh</p>
            <p>Open: 24/7 Support</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-box py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 DriveFleet. All rights reserved.</p>
          <p>Designed for premium car rental experience.</p>
        </div>
      </div>
    </footer>
  );
}