"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const { registerUser, updateUserProfile, googleLogin } = useAuth();
  const router = useRouter();

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must have an uppercase letter";
    }

    if (!/[a-z]/.test(password)) {
      return "Password must have a lowercase letter";
    }

    return "";
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordError = validatePassword(password);

    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    try {
      await registerUser(email, password);
      await updateUserProfile(name, photo);
      toast.success("Registration successful");
      router.push("/login");
    } catch (error) {
      toast.error("Registration failed");
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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-[36px] p-8 md:p-10 shadow-2xl border border-white/20">
        <div className="text-center">
          <h1 className="text-4xl font-black">Register</h1>
          <p className="text-slate-500 mt-3">
            Create your DriveFleet account
          </p>
        </div>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <div>
            <label className="font-bold text-slate-700">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

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
            <label className="font-bold text-slate-700">Photo URL</label>
            <input
              type="url"
              name="photo"
              required
              placeholder="https://i.ibb.co/photo.jpg"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Minimum 6 characters"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500 focus:bg-white"
            />
            <p className="text-xs text-slate-500 mt-2">
              Must contain uppercase, lowercase and minimum 6 characters.
            </p>
          </div>

          <button className="w-full rounded-2xl bg-blue-600 py-4 text-white font-black hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full rounded-2xl border border-slate-200 bg-white py-4 font-black hover:bg-slate-50 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-slate-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-black">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}