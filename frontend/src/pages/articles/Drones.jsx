import React from "react";

export default function DronesArticle() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Precision Drones</h1>
      <img src="https://images.unsplash.com/photo-1623522204648-939023403a4e" alt="Drones" className="rounded-xl mb-6 w-full h-64 object-cover" />
      <p className="mb-4">Drones are revolutionizing agriculture by providing insights that were previously impossible to obtain...</p>
      <h2 className="text-2xl font-bold mb-2 mt-6">How They Work</h2>
      <p>Equipped with multispectral sensors, drones can capture data on crop health, soil conditions, and more.</p>
    </div>
  );
}
