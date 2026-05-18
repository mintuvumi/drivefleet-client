import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
      <div className="container-box grid lg:grid-cols-2 gap-12 items-center py-20">
        <div>
          <p className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-bold mb-6">
            Premium Car Rental Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Rent Your Dream Car With Confidence
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
            Explore premium cars, book instantly, manage your bookings and list your own vehicles with DriveFleet.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/explore-cars"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition"
            >
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              className="px-8 py-4 rounded-full bg-white border border-slate-200 font-bold hover:shadow-lg transition"
            >
              Add Your Car
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-300 blur-3xl opacity-30 rounded-full"></div>
          <img
            src="/images/banner-car.png"
            alt="Premium Car"
            className="relative w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}