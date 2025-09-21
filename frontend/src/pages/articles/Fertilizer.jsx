import React from "react";
import { Leaf, Cpu, Droplet, CheckCircle, Globe } from "lucide-react";

export default function FertilizationArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 text-green-600 text-center">
        🌿 Optimized Fertilization
      </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">
        🌱 Feed Your Crops, Not the Soil
      </h2>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1593032457862-c5d2c3b0a473" // Example fertilizer image
        alt="Optimized Fertilization"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6">
        Optimized fertilization leverages data-driven insights to deliver the exact nutrients your crops need, 
        at the right time and in the right amount. By applying fertilizers precisely, farmers can maximize yield, 
        reduce costs, and protect the environment.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
        ⚙️ How It Works
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li className="flex items-start">
          <Cpu className="mr-2 text-green-500 mt-1" /> 
          <span><b>Soil & Crop Analysis:</b> Assess soil nutrient levels and crop health using sensors and lab tests.</span>
        </li>
        <li className="flex items-start">
          <Leaf className="mr-2 text-green-500 mt-1" /> 
          <span><b>Data-Driven Recommendations:</b> AI and analytics determine the optimal type and quantity of fertilizers for each section of the field.</span>
        </li>
        <li className="flex items-start">
          <Droplet className="mr-2 text-green-500 mt-1" /> 
          <span><b>Precision Application:</b> Fertilizers are applied only where needed, using drones, tractors, or automated systems.</span>
        </li>
        <li className="flex items-start">
          <Cpu className="mr-2 text-green-500 mt-1" /> 
          <span><b>Continuous Monitoring:</b> Track crop response and adjust nutrient delivery for maximum efficiency.</span>
        </li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
        🌾 Benefits for Farmers
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-green-500 mr-2 mt-1" /> 
          <span><b>Higher Crop Yields:</b> Provide crops with exactly what they need, promoting healthy growth and abundant harvests.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-green-500 mr-2 mt-1" /> 
          <span><b>Reduced Input Costs:</b> Avoid over-fertilization and save money on expensive fertilizers.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-green-500 mr-2 mt-1" /> 
          <span><b>Environmentally Responsible:</b> Minimize chemical runoff, soil degradation, and pollution of water sources.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-green-500 mr-2 mt-1" /> 
          <span><b>Smarter Farming Decisions:</b> Use real-time insights to make informed choices, improving farm management and planning.</span>
        </li>
      </ul>

      {/* Technology */}
      <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
        🛰️ Technology Behind Optimized Fertilization
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Soil Sensors & Lab Analysis: Identify nutrient deficiencies and imbalances</li>
        <li>AI & Machine Learning Algorithms: Predict nutrient requirements based on crop type, growth stage, and weather</li>
        <li>Precision Sprayers & Fertigation Systems: Deliver fertilizers efficiently and accurately</li>
        <li>Data Dashboards: Monitor nutrient application and crop performance</li>
      </ul>

      {/* Why It Matters */}
      <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
        <Globe className="mr-2" /> Why Optimized Fertilization Matters
      </h2>
      <p className="text-gray-700 mb-6">
        Traditional blanket fertilization leads to wasted resources, higher costs, and environmental harm. 
        Optimized fertilization ensures every gram of fertilizer counts, increasing productivity and sustainability while reducing your ecological footprint.
      </p>

      {/* Closing */}
      <p className="text-center text-lg font-semibold mt-8 text-green-600">
        Grow smarter, spend less, and protect the environment — let data-driven fertilization work for your farm.
      </p>
    </div>
  );
}
