import React, { useState } from "react";

const initialLeaders = [
  { name: "Ravi Kumar", location: "Village A", panchayat: "Panchayat 1", progress: "80%", badge: "Gold" },
  { name: "Sita Devi", location: "Village B", panchayat: "Panchayat 2", progress: "65%", badge: "Silver" },
  { name: "Amit Singh", location: "Village C", panchayat: "Panchayat 1", progress: "50%", badge: "Bronze" },
];

export default function MissionLeaderboardPage() {


  const getBadgeClass = (badge) => {
    switch (badge) {
      case "Gold":
        return "bg-amber-500";
      case "Silver":
        return "bg-zinc-400";
      case "Bronze":
        return "bg-orange-600";
      default:
        return "bg-green-600";
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 font-sans text-gray-800 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-4 text-green-700 text-center">🏆 Mission Leaderboard</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Top performers in your area and panchayat!
      </p>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-green-200">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Top Performers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-bold text-green-800 uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 text-left text-xs font-bold text-green-800 uppercase tracking-wider">Location</th>
                <th className="py-3 px-6 text-left text-xs font-bold text-green-800 uppercase tracking-wider">Panchayat</th>
                <th className="py-3 px-6 text-left text-xs font-bold text-green-800 uppercase tracking-wider">Progress</th>
                <th className="py-3 px-6 text-left text-xs font-bold text-green-800 uppercase tracking-wider">Recognition</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {initialLeaders.map((leader, idx) => (
                <tr key={idx} className="hover:bg-green-50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap">{leader.name}</td>
                  <td className="py-4 px-6 whitespace-nowrap">{leader.location}</td>
                  <td className="py-4 px-6 whitespace-nowrap">{leader.panchayat}</td>
                  <td className="py-4 px-6 whitespace-nowrap">{leader.progress}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${getBadgeClass(leader.badge)}`}>
                      {leader.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}