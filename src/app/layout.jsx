import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "DriveFleet | Premium Car Rental",
  description: "Modern car rental platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}