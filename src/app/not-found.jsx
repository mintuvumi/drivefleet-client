import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-xl text-center bg-white rounded-[40px] p-10 shadow-xl border border-slate-200">
        <div className="text-8xl font-black text-blue-600">404</div>

        <h1 className="text-4xl font-black mt-4">Page Not Found</h1>

        <p className="text-slate-600 mt-4 leading-7">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex mt-8 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}