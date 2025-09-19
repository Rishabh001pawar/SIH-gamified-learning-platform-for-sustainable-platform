import React from "react";

const missions = [
  {
    id: 1,
    title: "Use Organic Inputs",
    description: "Switch to organic fertilizers and bio-pesticides for improved soil health.",
    type: "Best Practice",
  },
  {
    id: 2,
    title: "Mixed Cropping",
    description: "Plant at least two different crops in the same field to boost biodiversity.",
    type: "Best Practice",
  },
  {
    id: 3,
    title: "Soil Health Management",
    description: "Test soil and apply compost to maintain fertility.",
    type: "Best Practice",
  },
];

export default function MissionList({ personalizedMissions = [] }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Missions</h2>
      <ul className="space-y-4">
        {missions.concat(personalizedMissions).map((mission) => (
          <li key={mission.id} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">{mission.title}</h3>
            <p className="text-gray-700">{mission.description}</p>
            <span className="text-xs text-green-600 font-bold">{mission.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
