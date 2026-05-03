"use client";

type Location = {
  id: number;
  city: string;
  lat: number;
  lng: number;
  temp: number;
};

export default function ClimateMap() {
  const locations: Location[] = [
    {
      id: 1,
      city: "Lahore",
      lat: 31.5,
      lng: 74.3,
      temp: 39,
    },
    {
      id: 2,
      city: "Karachi",
      lat: 24.8,
      lng: 67.0,
      temp: 34,
    },
    {
      id: 3,
      city: "Islamabad",
      lat: 33.7,
      lng: 73.1,
      temp: 30,
    },
  ];

  return (
    <div className="bg-[#1B2838] p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Climate Map
      </h2>

      {locations.map((loc) => (
        <div
          key={loc.id}
          className="bg-[#0D1B2A] p-4 rounded-xl mb-3 text-white"
        >
          <h3 className="font-bold">{loc.city}</h3>
          <p>Temp: {loc.temp}°C</p>
          <p>
            {loc.lat}, {loc.lng}
          </p>
        </div>
      ))}
    </div>
  );
}