import React from "react";
import { Sprout, Camera, BarChart3, Crosshair, CheckCircle, Cpu, Globe } from "lucide-react";

export default function DronesArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-2 text-green-700 text-center">
        🌾 Precision From Drones
      </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">
        🚀 Transform Your Farm with Smart Aerial Insights
      </h2>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1623522204648-939023403a4e"
        alt="Drones flying over farm"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6">
        Agriculture is no longer about guesswork — it’s about data-driven decisions.
        Precision drones combine AI, high-resolution cameras, and GPS technology to monitor crops,
        detect problems early, and deliver inputs exactly where they are needed.
        This means higher yields, healthier soil, and sustainable farming for the future.
      </p>

      {/* Drone Solutions */}
      <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
        <Sprout className="mr-2" /> Our Drone Solutions Include:
      </h2>

      {/* Solution Sections */}
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold flex items-center mb-2">
            <Camera className="mr-2 text-green-600" /> Aerial Crop Monitoring
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Capture high-definition images of your entire farm within minutes.</li>
            <li>Identify stressed areas due to pests, diseases, drought, or poor nutrition.</li>
            <li>Monitor crop growth stages and compare with historical data.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold flex items-center mb-2">
            <BarChart3 className="mr-2 text-green-600" /> AI-Powered Health Analysis
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Use NDVI (Normalized Difference Vegetation Index) to evaluate plant health.</li>
            <li>Get easy-to-read reports highlighting problem zones with recommendations.</li>
            <li>Predict yield potential and plan interventions accordingly.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold flex items-center mb-2">
            <Crosshair className="mr-2 text-green-600" /> Precision Spraying & Seeding
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Target pesticides, herbicides, and fertilizers only where needed.</li>
            <li>Perform variable rate application for maximum efficiency.</li>
            <li>Reduce human exposure to harmful chemicals.</li>
          </ul>
        </section>
      </div>

      {/* Key Benefits */}
      <h2 className="text-2xl font-bold text-green-700 mt-8 mb-4">
        🌱 Key Benefits of Drone Precision
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start">
          <CheckCircle className="text-green-600 mr-2 mt-1" /> <span><b>Early Detection, Better Action:</b> Find problems before they spread — saving entire crops from damage.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-green-600 mr-2 mt-1" /> <span><b>Optimized Input Usage:</b> Use up to 50% less water, fertilizers, and pesticides, lowering costs and environmental impact.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-green-600 mr-2 mt-1" /> <span><b>Data-Backed Decisions:</b> Turn aerial insights into smart, actionable strategies for each crop stage.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-green-600 mr-2 mt-1" /> <span><b>Higher Profits & Sustainability:</b> Produce more with fewer resources, reduce waste, and maintain soil health.</span>
        </li>
      </ul>

      {/* Technology */}
      <h2 className="text-2xl font-bold text-green-700 mt-8 mb-4 flex items-center">
        <Cpu className="mr-2" /> Technology That Works for You
      </h2>
      <p className="text-gray-700 mb-4">
        Our drones are equipped with:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Multispectral and thermal cameras for detailed crop analysis</li>
        <li>AI and machine learning algorithms for instant data processing</li>
        <li>GPS precision mapping for exact treatment zones</li>
        <li>Automated flight planning to cover large farms quickly</li>
      </ul>

      {/* Real-World Impact */}
      <h2 className="text-2xl font-bold text-green-700 mt-8 mb-4">💡 Real-World Impact</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>20-30% increase in yields through early problem detection</li>
        <li>30-50% reduction in chemical and water usage</li>
        <li>Faster decision-making thanks to same-day data reports</li>
      </ul>

      {/* Sustainability */}
      <h2 className="text-2xl font-bold text-green-700 mt-8 mb-4 flex items-center">
        <Globe className="mr-2" /> A Step Toward Sustainable Farming
      </h2>
      <p className="text-gray-700">
        By using drones, you are not just improving your farm — you are helping protect the
        environment. Less chemical waste means cleaner water, healthier soil, and a safer
        ecosystem for future generations.
      </p>

      {/* Closing */}
      <p className="text-center text-lg font-semibold mt-8 text-green-700">
        🌟 Your farm deserves precision. Your crops deserve care.<br />
        Let drones help you farm smarter, not harder.
      </p>
    </div>
  );
}
