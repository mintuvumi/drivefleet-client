"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { loginUser, googleLogin } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await loginUser(email, password);
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Google login successful");
      router.push("/");
    } catch (error) {
      toast.error("Google login failed");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-[36px] p-8 md:p-10 shadow-2xl shadow-blue-100 border border-slate-200">
        <div className="text-center">
          <h1 className="text-4xl font-black">Login</h1>
          <p className="text-slate-500 mt-3">
            Welcome back to DriveFleet
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="font-bold text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button className="w-full rounded-2xl bg-blue-600 py-4 text-white font-black hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full rounded-2xl border border-slate-200 bg-white py-4 font-black hover:bg-slate-50 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-slate-600 mt-6">
          New here?{" "}
          <Link href="/register" className="text-blue-600 font-black">
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}