export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">
      <div className="container-box py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-black">
            Drive<span className="text-blue-400">Fleet</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Premium car rental platform for easy and secure vehicle booking.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <div className="space-y-2 text-slate-400">
            <p>Home</p>
            <p>Explore Cars</p>
            <p>Add Car</p>
            <p>My Bookings</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2 text-slate-400">
            <p>Email: support@drivefleet.com</p>
            <p>Phone: +880 1700-000000</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-slate-500">
        © 2026 DriveFleet. All rights reserved.
      </div>
    </footer>
  );
}