import React from "react";
import { Tractor, Cpu, CheckCircle, Globe, Navigation } from "lucide-react";

export default function TractorArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 text-yellow-700 text-center">
        🚜 Modern Tractor Power
      </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">
        🌾 Farming Meets Technology
      </h2>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1594745560942-0545a536f0a3"
        alt="Modern Tractor in field"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6">
        The modern tractor is no longer just a machine—it’s a smart, automated powerhouse. 
        Equipped with GPS, automation, and advanced sensors, today’s tractors enable farmers 
        to cultivate larger fields faster, with pinpoint accuracy and minimal waste.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
        ⚙️ How It Works
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li className="flex items-start">
          <Navigation className="mr-2 text-yellow-600 mt-1" /> 
          <span><b>GPS-Guided Navigation:</b> Tractors follow precise routes, reducing overlaps and missed areas.</span>
        </li>
        <li className="flex items-start">
          <Cpu className="mr-2 text-yellow-600 mt-1" /> 
          <span><b>Automated Operations:</b> Plowing, seeding, and harvesting can be automated for consistent results.</span>
        </li>
        <li className="flex items-start">
          <Cpu className="mr-2 text-yellow-600 mt-1" /> 
          <span><b>Real-Time Monitoring:</b> Sensors track soil conditions, crop density, and fuel usage, helping farmers make informed decisions.</span>
        </li>
        <li className="flex items-start">
          <Cpu className="mr-2 text-yellow-600 mt-1" /> 
          <span><b>Adaptive Farming:</b> Adjust tractor operations based on field conditions, crop type, and slope for optimal efficiency.</span>
        </li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
        🌱 Benefits for Farmers
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-yellow-600 mr-2 mt-1" /> 
          <span><b>Higher Efficiency & Productivity:</b> Cover more land in less time while maintaining consistent soil preparation and crop planting.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-yellow-600 mr-2 mt-1" /> 
          <span><b>Reduced Resource Waste:</b> Minimize fuel consumption, reduce overlapping operations, and save seeds and fertilizers.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-yellow-600 mr-2 mt-1" /> 
          <span><b>Precision Farming:</b> GPS and automation ensure exact row spacing and planting depth, improving crop health and yield.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-yellow-600 mr-2 mt-1" /> 
          <span><b>Lower Labor Costs:</b> Automation reduces dependence on manual labor and enables better farm management.</span>
        </li>
      </ul>

      {/* Technology */}
      <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
        🛰️ Technology Behind Modern Tractors
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>GPS & RTK Systems for centimeter-level precision</li>
        <li>Autonomous Driving Features for automated plowing, seeding, and harvesting</li>
        <li>IoT Sensors for soil monitoring and machine health</li>
        <li>Telematics & Analytics to track performance and optimize farm operations</li>
      </ul>

      {/* Why It Matters */}
      <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
        <Globe className="mr-2" /> Why Modern Tractors Matter
      </h2>
      <p className="text-gray-700 mb-6">
        Farming with traditional equipment often leads to inefficiencies, wasted resources, and uneven crop growth. 
        Modern tractors combine power with intelligence, allowing farmers to:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
        <li>Maximize output with minimal effort</li>
        <li>Maintain consistent crop quality</li>
        <li>Reduce environmental impact through efficient operations</li>
      </ul>

      {/* Closing */}
      <p className="text-center text-lg font-semibold mt-8 text-yellow-700">
        Empower your farm with modern tractor technology — precision, efficiency, and productivity, all in one machine.
      </p>
    </div>
  );
}
