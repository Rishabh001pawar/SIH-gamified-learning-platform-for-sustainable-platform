import React from "react";

const sampleLeaders = [
  { name: "Ravi Kumar", location: "Village A", points: 120 },
  { name: "Sita Devi", location: "Village B", points: 110 },
  { name: "Amit Singh", location: "Village C", points: 105 },
];

export default function Leaderboard({ leaders = sampleLeaders }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-8">
      <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Location</th>
            <th className="py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2 font-semibold">{leader.name}</td>
              <td className="py-2">{leader.location}</td>
              <td className="py-2 text-green-700 font-bold">{leader.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
