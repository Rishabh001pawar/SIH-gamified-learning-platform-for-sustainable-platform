import React from "react";

export default function ProgressDashboard({ progress = 0, score = 0, badges = [] }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-8">
      <h2 className="text-xl font-bold mb-2">Progress Tracker</h2>
      <div className="mb-4">
        <div className="text-gray-700 mb-1">Mission Progress</div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1">{progress}% completed</div>
      </div>
      <div className="mb-2">Sustainability Score: <span className="font-bold text-green-700">{score}</span></div>
      <div className="mb-2">Badges:</div>
      <div className="flex gap-2 flex-wrap">
        {badges.length === 0 ? (
          <span className="text-gray-400">No badges yet</span>
        ) : (
          badges.map((badge, idx) => (
            <span key={idx} className="bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">{badge}</span>
          ))
        )}
      </div>
    </div>
  );
}
