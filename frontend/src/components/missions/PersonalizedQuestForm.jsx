import React, { useState } from "react";

export default function PersonalizedQuestForm({ onAddQuest }) {
  const [crop, setCrop] = useState("");
  const [location, setLocation] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [quest, setQuest] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (crop && location && farmSize && quest) {
      onAddQuest({
        id: Date.now(),
        title: quest,
        description: `For ${crop} in ${location} (${farmSize} acres)`,
        type: "Personalized",
      });
      setCrop("");
      setLocation("");
      setFarmSize("");
      setQuest("");
    }
  }

  return (
    <form className="bg-white rounded-lg shadow p-4 mb-8" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2">Add Personalized Quest</h2>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <input
          type="text"
          placeholder="Crop (e.g. Banana)"
          value={crop}
          onChange={e => setCrop(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Location (e.g. Village)"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="border rounded p-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <input
          type="text"
          placeholder="Farm Size (acres)"
          value={farmSize}
          onChange={e => setFarmSize(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Quest (e.g. Mulching for 3 weeks)"
          value={quest}
          onChange={e => setQuest(e.target.value)}
          className="border rounded p-2"
        />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded font-bold">Add Quest</button>
    </form>
  );
}
