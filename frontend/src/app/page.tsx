"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  ShieldAlert,
  CloudSun,
  Users,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [co2, setCo2] = useState(0);

  useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      count += 8;
      if (count >= 1240) {
        count = 1240;
        clearInterval(timer);
      }
      setCo2(count);
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      title: "Communities Joined",
      value: "82",
      icon: Users,
    },
    {
      title: "CO2 Saved",
      value: `${co2} kg`,
      icon: Leaf,
    },
    {
      title: "Alerts Today",
      value: "07",
      icon: ShieldAlert,
    },
    {
      title: "Top Rank",
      value: "#1 Lahore",
      icon: Trophy,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white overflow-hidden">

      {/* Navbar */}
<nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-xl">

  <Link href="/" className="text-2xl font-bold text-[#00BFA5]">
    TerraGauge
  </Link>

  <div className="flex gap-6 text-sm text-gray-300">

    <Link href="/" className="hover:text-[#00BFA5]">
      Home
    </Link>

    <Link href="/register" className="hover:text-[#00BFA5]">
      Register
    </Link>

    <Link href="/leaderboard" className="hover:text-[#00BFA5]">
      Leaderboard
    </Link>

  </div>
</nav>
      {/* Hero */}
      <section className="px-8 py-14">

        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-red-600/20 border border-red-500 rounded-2xl p-5 mb-10"
        >
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-red-400" />
            <p className="font-bold text-red-300 animate-pulse">
              ہیٹ الرٹ فعال ہے — Stay Hydrated Today
            </p>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Smarter Cities. <br />
          <span className="text-[#00BFA5]">
            Greener Future.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 mt-5 max-w-xl"
        >
          Climate intelligence platform for communities,
          live alerts, green action rewards, and city resilience.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#00BFA5] text-black px-7 py-4 rounded-xl font-bold shadow-lg"
        >
          Register Community
        </motion.button>
      </section>

      {/* Cards */}
      <section className="px-8 pb-16 grid md:grid-cols-4 gap-6">

        {cards.map((card, i) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl"
            >
              <Icon className="text-[#00BFA5] mb-4" size={30} />

              <p className="text-gray-400 text-sm">
                {card.title}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {card.value}
              </h3>
            </motion.div>
          );
        })}
      </section>

      {/* Footer */}
      <section className="px-8 pb-12">
        <div className="bg-white/5 rounded-3xl p-6 flex justify-between items-center">
          <div>
            <p className="text-gray-400">Weather Today</p>
            <h3 className="text-2xl font-bold">34°C Clear Sky</h3>
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            <CloudSun className="text-yellow-400" size={50} />
          </motion.div>
        </div>
      </section>

    </main>
  );
}