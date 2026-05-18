import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>

      <div className="container-box relative grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-20">
        <div>
          <p className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/15 text-blue-200 font-bold mb-7">
            Premium Car Rental Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
            Rent Your Dream Car With Confidence
          </h1>

          <p className="mt-7 text-lg text-slate-300 leading-8 max-w-xl">
            Explore premium cars, book instantly, manage your bookings and list
            your own vehicles with DriveFleet.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/explore-cars"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-xl shadow-blue-900/40 hover:bg-blue-500 transition"
            >
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              className="px-8 py-4 rounded-full bg-white/10 border border-white/15 text-white font-bold hover:bg-white hover:text-slate-950 transition"
            >
              Add Your Car
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

          <img
            src="/images/banner-car.png"
            alt="Premium Car"
            className="relative w-full max-h-[560px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}