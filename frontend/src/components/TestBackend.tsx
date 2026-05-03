"use client";

import { useEffect, useState } from "react";

export default function TestBackend() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:8000/stats")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-[#1B2838] p-6 rounded-2xl text-white mt-8">
      <h2 className="text-xl font-bold mb-3">
        Backend Connected
      </h2>

      {data ? (
        <p>CO2 Saved: {data.co2_saved}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}