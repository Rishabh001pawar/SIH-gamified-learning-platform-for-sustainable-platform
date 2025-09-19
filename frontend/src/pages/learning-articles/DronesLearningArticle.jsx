import React from "react";

export default function DronesLearningArticle() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-700">How Drones Are Revolutionizing Modern Farming</h1>
      <img src="https://images.unsplash.com/photo-1623522204648-939023403a4e" alt="Drones" className="rounded-xl mb-6 w-full h-64 object-cover" />
      <p className="mb-4">Drones are revolutionizing agriculture by providing insights that were previously impossible to obtain. They help monitor crop health, optimize irrigation, and reduce costs.</p>
      <h2 className="text-2xl font-bold mb-2 mt-6">Key Benefits</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Real-time crop monitoring</li>
        <li>Efficient resource management</li>
        <li>Early detection of diseases</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2 mt-6">How They Work</h2>
      <p>Equipped with multispectral sensors, drones can capture data on crop health, soil conditions, and more.</p>
    </div>
  );
}
