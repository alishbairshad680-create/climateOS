"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowLeft,
  Globe,
  Phone,
  Users,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white p-6 md:p-10">

      {/* Top */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 text-[#00BFA5] mb-8"
      >
       
      <Link
  href="/"
  className="flex items-center gap-3 text-[#00BFA5] mb-8 font-semibold"
>
  ← Back to Home
</Link>
<nav className="flex justify-between mb-10">
 
  <div className="flex gap-5">
    <Link href="/">Home</Link>
    <Link href="/register">Register</Link>
    <Link href="/leaderboard">Leaderboard</Link>
  </div>
</nav>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold mb-10"
      >
        Register Your Community
      </motion.h1>

      <section className="grid md:grid-cols-2 gap-8">

        {/* LEFT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
        >
          <div className="space-y-5">

            <input
              placeholder="Community Name"
              className="w-full bg-[#1B2838] p-4 rounded-xl outline-none focus:ring-2 ring-[#00BFA5]"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="City"
                className="bg-[#1B2838] p-4 rounded-xl outline-none"
              />

              <input
                placeholder="Province"
                className="bg-[#1B2838] p-4 rounded-xl outline-none"
              />
            </div>

            <input
              placeholder="WhatsApp Contact"
              className="w-full bg-[#1B2838] p-4 rounded-xl outline-none"
            />

            {/* Language */}
            <div>
              <p className="text-sm text-gray-400 mb-3">
                Primary Language
              </p>

              <div className="grid grid-cols-2 gap-3">
                {["Urdu", "English", "Punjabi", "Sindhi"].map((lang, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#1B2838] p-4 rounded-xl border border-white/10 hover:border-[#00BFA5]"
                  >
                    {lang}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Submit */}
          <motion.button
  onClick={async () => {
    try {
      const res = await fetch(
        "https://YOUR-LINK-8000.app.github.dev/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Green Town",
            city: "Lahore",
            province: "Punjab",
            whatsapp: "03001234567",
            language: "Urdu",
          }),
        }
      );

      const data = await res.json();
      alert("Community Registered!");
      console.log(data);

    } catch (error) {
      alert("Backend not connected.");
      console.log(error);
    }
  }}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.96 }}
  className="w-full mt-4 bg-[#00BFA5] text-black p-4 rounded-xl font-bold text-lg"
>
  Register Community 🚀
</motion.button>
          </div>
        </motion.div>

        {/* RIGHT MAP */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative bg-[#111827] rounded-3xl overflow-hidden border border-white/10 min-h-[600px]"
        >
          {/* Search */}
          <div className="absolute top-5 left-5 right-5 z-10">
            <input
              placeholder="Search city or coordinates..."
              className="w-full bg-white/10 backdrop-blur-xl p-4 rounded-xl outline-none"
            />
          </div>

          {/* Fake Grid Map */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#00BFA5_0%,_transparent_70%)]" />

          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className="border border-white/5"
              />
            ))}
          </div>

          {/* Pulse Pins */}
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-[40%] left-[55%]"
          >
            <MapPin className="text-[#00BFA5]" size={35} />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute top-[62%] left-[35%]"
          >
            <MapPin className="text-red-400" size={30} />
          </motion.div>

          {/* Live Box */}
          <div className="absolute bottom-5 right-5 bg-black/50 p-4 rounded-2xl backdrop-blur-xl">
            <p className="text-xs text-gray-400">
              Active Network
            </p>
            <h3 className="font-bold">
              14 Communities Online
            </h3>
          </div>
        </motion.div>

      </section>

    </main>
  );
}