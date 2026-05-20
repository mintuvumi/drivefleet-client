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
    image: "/images/car-card-1.jpg",
  },
  {
    id: 2,
    name: "Audi A6 Premium",
    type: "Luxury Sedan",
    price: 100,
    seats: 5,
    status: "Available",
    image: "/images/car-card-2.jpg",
  },
  {
    id: 3,
    name: "Toyota Corolla",
    type: "Sedan",
    price: 55,
    seats: 5,
    status: "Available",
    image: "/images/car-card-3.jpg",
  },
  {
    id: 4,
    name: "Honda Civic",
    type: "Sedan",
    price: 65,
    seats: 5,
    status: "Available",
    image: "/images/car-card-4.jpg",
  },
  {
    id: 5,
    name: "Range Rover Evoque",
    type: "Luxury SUV",
    price: 150,
    seats: 5,
    status: "Available",
    image: "/images/car-card-5.jpg",
  },
  {
    id: 6,
    name: "Hyundai Tucson",
    type: "SUV",
    price: 80,
    seats: 5,
    status: "Available",
    image: "/images/car-card-6.jpg",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <Banner />

      {/* AVAILABLE CARS */}
      <section className="container-box py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-black uppercase tracking-[4px]">
            Available Cars
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4 leading-tight">
            Choose Your Perfect Ride
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-8">
            Browse our premium collection of luxury SUVs, sedans,
            hatchbacks and sports cars for your next journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="bg-slate-950 text-white py-24">
        <div className="container-box grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 font-black uppercase tracking-[4px]">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-5 leading-tight">
              Premium Rental Experience
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-8">
              DriveFleet provides a smooth, secure and modern
              car rental experience with instant booking,
              trusted owners and premium support.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-black">100+</h3>
                <p className="text-slate-400 mt-2">
                  Premium Cars
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-black">24/7</h3>
                <p className="text-slate-400 mt-2">
                  Customer Support
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-black">500+</h3>
                <p className="text-slate-400 mt-2">
                  Happy Clients
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-black">Safe</h3>
                <p className="text-slate-400 mt-2">
                  Secure Booking
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="/images/car-1.jpg"
              alt="Premium Car"
              className="relative rounded-[40px] w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-box py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-black uppercase tracking-[4px]">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Everything You Need
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-2xl transition">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
              🚘
            </div>

            <h3 className="text-2xl font-black mt-6">
              Easy Booking
            </h3>

            <p className="text-slate-600 mt-4 leading-7">
              Book your favorite vehicle within minutes using
              our fast and secure booking system.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-2xl transition">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
              🔒
            </div>

            <h3 className="text-2xl font-black mt-6">
              Secure Payment
            </h3>

            <p className="text-slate-600 mt-4 leading-7">
              Enjoy safe payment and trusted booking
              protection for every rental.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-2xl transition">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
              ⭐
            </div>

            <h3 className="text-2xl font-black mt-6">
              Luxury Cars
            </h3>

            <p className="text-slate-600 mt-4 leading-7">
              Explore premium SUVs, sedans and sports cars
              from verified owners.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}