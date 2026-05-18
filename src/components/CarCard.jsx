import Link from "next/link";

export default function CarCard({ car }) {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
      
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-sm font-black shadow-lg">
            {car.type}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <span className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-black shadow-lg">
            {car.status}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900">
              {car.name}
            </h3>

            <p className="text-slate-500 mt-2">
              Premium rental vehicle
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500">
              Daily Rent
            </p>

            <h4 className="text-3xl font-black text-blue-600">
              ${car.price}
            </h4>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-slate-100 rounded-2xl p-4">
            <p className="text-slate-500 text-sm">
              Seat Capacity
            </p>

            <h4 className="font-black text-lg mt-1">
              {car.seats} Seats
            </h4>
          </div>

          <div className="bg-slate-100 rounded-2xl p-4">
            <p className="text-slate-500 text-sm">
              Availability
            </p>

            <h4 className="font-black text-lg mt-1">
              Ready
            </h4>
          </div>
        </div>

        {/* BUTTON */}
        <Link
          href={`/cars/${car.id}`}
          className="mt-8 flex items-center justify-center w-full py-4 rounded-2xl bg-slate-950 text-white font-black hover:bg-blue-600 transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}