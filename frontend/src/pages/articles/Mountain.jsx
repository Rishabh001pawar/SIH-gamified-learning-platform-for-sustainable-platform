import React from "react";
import { Mountain, Droplet, CheckCircle, Cpu, Globe } from "lucide-react";

export default function MountainArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 text-pink-700 text-center">
        ⛰️ Mountain Terrain Farming
      </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">
        🌱 Farming on the Slopes
      </h2>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1598403306635-5bbd0384a226"
        alt="Mountain Farming"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6">
        Farming in hilly and mountainous regions presents unique challenges, from steep slopes to soil erosion. 
        Mountain terrain farming—especially terrace farming—helps farmers maximize land use, conserve soil, 
        and cultivate crops efficiently, even in the most challenging terrains.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center">
        ⚙️ How It Works
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li className="flex items-start">
          <Mountain className="mr-2 text-pink-600 mt-1" /> 
          <span><b>Terrace Construction:</b> Carve the slopes into a series of flat, step-like terraces to reduce runoff and soil loss.</span>
        </li>
        <li className="flex items-start">
          <Droplet className="mr-2 text-pink-600 mt-1" /> 
          <span><b>Water Management:</b> Use contour-based irrigation systems to retain water and prevent erosion.</span>
        </li>
        <li className="flex items-start">
          <Cpu className="mr-2 text-pink-600 mt-1" /> 
          <span><b>Crop Selection:</b> Choose crops suited to high-altitude and slope conditions for optimal growth.</span>
        </li>
        <li className="flex items-start">
          <Cpu className="mr-2 text-pink-600 mt-1" /> 
          <span><b>Soil Conservation Practices:</b> Implement mulching, cover crops, and retaining walls to maintain soil fertility.</span>
        </li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center">
        🌾 Benefits for Farmers
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-pink-600 mr-2 mt-1" /> 
          <span><b>Maximized Land Use:</b> Turn steep slopes into productive farmland with well-planned terraces.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-pink-600 mr-2 mt-1" /> 
          <span><b>Reduced Soil Erosion:</b> Terracing slows water flow, prevents landslides, and protects fertile topsoil.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-pink-600 mr-2 mt-1" /> 
          <span><b>Sustainable Water Usage:</b> Water retention techniques ensure crops receive sufficient irrigation even in challenging terrain.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-pink-600 mr-2 mt-1" /> 
          <span><b>Higher Crop Yields:</b> Carefully planned terraces and soil management lead to healthy crops and improved harvests.</span>
        </li>
      </ul>

      {/* Technology & Practices */}
      <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center">
        🛰️ Technology & Practices Behind Mountain Terrain Farming
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Contour Mapping: Plan terraces and irrigation based on slope and soil type</li>
        <li>Rainwater Harvesting & Drip Irrigation: Conserve water and deliver it efficiently to crops</li>
        <li>Soil Monitoring Sensors: Track moisture and nutrient levels for precise care</li>
        <li>Erosion Control Techniques: Retaining walls, mulching, and cover crops to protect soil</li>
      </ul>

      {/* Why It Matters */}
      <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center">
        <Globe className="mr-2" /> Why Mountain Terrain Farming Matters
      </h2>
      <p className="text-gray-700 mb-6">
        Without proper techniques, hilly farming can lead to land degradation, soil loss, and reduced productivity. 
        Mountain terrain farming transforms challenging slopes into profitable, sustainable farmland, 
        ensuring long-term food security and environmental protection.
      </p>

      {/* Closing */}
      <p className="text-center text-lg font-semibold mt-8 text-pink-700">
        Harness the slopes — cultivate efficiently, protect the soil, and make every terrace count.
      </p>
    </div>
  );
}
