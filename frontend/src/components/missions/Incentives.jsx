import React from "react";

const sampleIncentives = [
  { type: "Scheme Points", value: 20 },
  { type: "Training Credits", value: 3 },
  { type: "Public Recognition", value: "Featured Farmer" },
];

export default function Incentives({ incentives = sampleIncentives }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-8">
      <h2 className="text-xl font-bold mb-2">Incentives & Rewards</h2>
      <ul className="space-y-2">
        {incentives.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">{item.type}</span>
            <span className="text-green-700 font-bold">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
