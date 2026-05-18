import Link from "next/link";

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <div className="h-56 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-black">{car.name}</h3>
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
            {car.status}
          </span>
        </div>

        <p className="mt-2 text-slate-500">{car.type}</p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="bg-slate-100 rounded-2xl p-3">
            <p className="text-slate-500">Price</p>
            <p className="font-black">${car.price}/day</p>
          </div>
          <div className="bg-slate-100 rounded-2xl p-3">
            <p className="text-slate-500">Seats</p>
            <p className="font-black">{car.seats}</p>
          </div>
        </div>

        <Link
          href={`/cars/${car.id}`}
          className="mt-6 block text-center px-6 py-3 rounded-full bg-slate-950 text-white font-bold hover:bg-blue-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}