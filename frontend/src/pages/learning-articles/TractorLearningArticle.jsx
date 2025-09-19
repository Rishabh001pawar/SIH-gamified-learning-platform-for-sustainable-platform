import React from "react";

export default function TractorLearningArticle() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Calibrating Your Tractor's GPS for Precision Planting</h1>
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="Tractor" className="rounded-xl mb-6 w-full h-64 object-cover" />
      <p className="mb-4">Learn how to calibrate your tractor's GPS for accurate and efficient planting. Precision technology helps maximize yield and minimize waste.</p>
      <h2 className="text-2xl font-bold mb-2 mt-6">Calibration Steps</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Set up GPS hardware</li>
        <li>Configure software settings</li>
        <li>Test and adjust for accuracy</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2 mt-6">Why It Matters</h2>
      <p>Precision planting ensures optimal seed placement and resource use.</p>
    </div>
  );
}
