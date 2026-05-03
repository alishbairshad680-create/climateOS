"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Leaf, Sparkles, Zap } from "lucide-react";
<nav className="flex justify-between items-center mb-10">
  <Link href="/" className="text-2xl font-bold text-[#00BFA5]"
  >
    TerraGauge
  </Link>

  <div className="flex gap-6 text-gray-300">
    <Link href="/">Home</Link>
    <Link href="/register">Register</Link>
    <Link href="/leaderboard">Leaderboard</Link>
  </div>
</nav>

export default function LeaderboardPage() {
  const cities = [
    { name: "Lahore", score: 1280, reward: "Gold" },
    { name: "Karachi", score: 1120, reward: "Silver" },
    { name: "Islamabad", score: 980, reward: "Bronze" },
    { name: "Faisalabad", score: 840, reward: "Green Star" },
  ];

  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white p-6 md:p-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <div>
          <h1 className="text-5xl font-bold">Climate Leaderboard</h1>
          <p className="text-gray-400 mt-2">
            Cities competing for a greener future.
          </p>
        </div>

        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Trophy className="text-yellow-400" size={54} />
        </motion.div>
      </motion.div>

      {/* Top Stats */}
      <section className="grid md:grid-cols-3 gap-6 mb-10">

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white/5 p-6 rounded-3xl border border-white/10"
        >
          <Leaf className="text-[#00BFA5] mb-3" />
          <h3 className="text-gray-400">CO2 Saved</h3>
          <p className="text-4xl font-bold">8,240 kg</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white/5 p-6 rounded-3xl border border-white/10"
        >
          <Sparkles className="text-cyan-400 mb-3" />
          <h3 className="text-gray-400">Actions Logged</h3>
          <p className="text-4xl font-bold">2,981</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white/5 p-6 rounded-3xl border border-white/10"
        >
          <Zap className="text-yellow-300 mb-3" />
          <h3 className="text-gray-400">Communities</h3>
          <p className="text-4xl font-bold">114</p>
        </motion.div>

      </section>

      {/* Leaderboard */}
      <section className="bg-white/5 rounded-3xl border border-white/10 p-6 mb-10">

        <h2 className="text-2xl font-bold mb-6">Top Rankings</h2>

        <div className="space-y-4">
          {cities.map((city, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="flex justify-between items-center bg-[#1B2838] p-5 rounded-2xl"
            >
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#00BFA5] text-black flex items-center justify-center font-bold">
                  {i + 1}
                </div>

                <div>
                  <h3 className="font-bold text-xl">{city.name}</h3>
                  <p className="text-sm text-gray-400">
                    Reward: {city.reward}
                  </p>
                </div>
              </div>

              <p className="text-2xl font-bold">
                {city.score}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* AI Suggestions */}
      <section className="grid md:grid-cols-2 gap-6">

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white/5 rounded-3xl p-6 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-3">
            AI Climate Advice
          </h3>

          <p className="text-gray-400 leading-7">
            Lahore can improve ranking by promoting
            bicycle commuting and rooftop solar adoption.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#00BFA5] text-black rounded-3xl p-6"
        >
          <h3 className="text-2xl font-bold mb-3">
            Next Milestone
          </h3>

          <p className="font-semibold">
            Reach 10,000kg CO2 saved to unlock
            national green award.
          </p>
        </motion.div>

      </section>

    </main>
  );
}