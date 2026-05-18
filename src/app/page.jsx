import Banner from "@/components/Banner";
import CarCard from "@/components/CarCard";

const cars = [
  {
    id: 1,
    name: "BMW X5 Series",
    type: "Luxury SUV",
    price: 120,
    seats: 5,
    status: "Available",
    image: "/images/car-1.jpg",
  },
  {
    id: 2,
    name: "Audi A6 Premium",
    type: "Luxury Sedan",
    price: 100,
    seats: 5,
    status: "Available",
    image: "/images/car-2.jpg",
  },
  {
    id: 3,
    name: "Toyota Corolla",
    type: "Sedan",
    price: 55,
    seats: 5,
    status: "Available",
    image: "/images/car-1.jpg",
  },
  {
    id: 4,
    name: "Honda Civic",
    type: "Sedan",
    price: 65,
    seats: 5,
    status: "Available",
    image: "/images/car-2.jpg",
  },
  {
    id: 5,
    name: "Range Rover Evoque",
    type: "Luxury SUV",
    price: 150,
    seats: 5,
    status: "Available",
    image: "/images/car-1.jpg",
  },
  {
    id: 6,
    name: "Hyundai Tucson",
    type: "SUV",
    price: 80,
    seats: 5,
    status: "Available",
    image: "/images/car-2.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Banner />

      <section className="container-box py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-blue-600 font-black">Available Cars</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Choose Your Perfect Ride
          </h2>
          <p className="text-slate-600 mt-5">
            Browse our most popular cars and book your favorite vehicle instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <section className="container-box py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <h3 className="text-2xl font-black">Easy Booking</h3>
            <p className="text-slate-600 mt-3">
              Book your car within minutes using our simple rental system.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <h3 className="text-2xl font-black">Secure Payment</h3>
            <p className="text-slate-600 mt-3">
              Enjoy a safe and trusted rental experience with verified users.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <h3 className="text-2xl font-black">Premium Cars</h3>
            <p className="text-slate-600 mt-3">
              Find SUV, Sedan, Hatchback and Luxury cars in one platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}