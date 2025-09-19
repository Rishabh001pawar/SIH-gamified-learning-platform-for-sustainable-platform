import React from "react";

export default function CompostingLearningArticle() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-700">The Ultimate Guide to Composting for Rich Soil</h1>
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Composting" className="rounded-xl mb-6 w-full h-64 object-cover" />
      <p className="mb-4">Composting transforms organic waste into nutrient-rich soil. Learn the best practices for creating and maintaining a compost pile.</p>
      <h2 className="text-2xl font-bold mb-2 mt-6">Steps to Compost</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Collect green and brown materials</li>
        <li>Maintain moisture and aeration</li>
        <li>Turn the pile regularly</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2 mt-6">Benefits</h2>
      <p>Improves soil structure, increases water retention, and reduces landfill waste.</p>
    </div>
  );
}
