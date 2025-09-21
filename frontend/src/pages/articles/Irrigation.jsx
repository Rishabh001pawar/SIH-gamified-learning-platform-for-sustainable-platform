import React from "react";
import { Droplet, Thermometer, Cpu, Cloud, CheckCircle, Globe } from "lucide-react";

export default function IrrigationArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 text-blue-700 text-center">
        💧 Smart Irrigation
      </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">
        🌱 Water Smarter, Grow Better
      </h2>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
        alt="Irrigation system in farm"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6">
        Water is one of the most valuable resources in farming — and wasting it means wasting money and potential yields.
        Our Smart Irrigation solutions use intelligent drip systems to deliver the right amount of water directly to plant roots,
        reducing waste and ensuring optimal growth.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
        ⚙️ How It Works
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li className="flex items-start">
          <Thermometer className="mr-2 text-blue-600 mt-1" /> 
          <span><b>Soil & Weather Sensors:</b> Monitor soil moisture, temperature, and weather forecasts in real time.</span>
        </li>
        <li className="flex items-start">
          <Droplet className="mr-2 text-blue-600 mt-1" /> 
          <span><b>Automated Drip Irrigation:</b> Water is released only when and where crops need it, avoiding over- or under-irrigation.</span>
        </li>
        <li className="flex items-start">
          <Droplet className="mr-2 text-blue-600 mt-1" /> 
          <span><b>Precision Delivery:</b> Drips are placed at plant root zones, ensuring maximum water absorption with minimal loss.</span>
        </li>
        <li className="flex items-start">
          <Cpu className="mr-2 text-blue-600 mt-1" /> 
          <span><b>Remote Control & Monitoring:</b> Manage your irrigation schedule via mobile or web apps from anywhere.</span>
        </li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
        🌾 Benefits for Farmers
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-blue-600 mr-2 mt-1" /> 
          <span><b>Up to 50% Water Savings:</b> Prevent over-irrigation and reduce evaporation losses significantly.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-blue-600 mr-2 mt-1" /> 
          <span><b>Healthier Crops, Better Yields:</b> Consistent watering leads to stronger root systems and higher productivity.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-blue-600 mr-2 mt-1" /> 
          <span><b>Lower Costs:</b> Reduce electricity and pumping expenses by running irrigation systems only when necessary.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-blue-600 mr-2 mt-1" /> 
          <span><b>Eco-Friendly Farming:</b> Minimize water runoff, prevent soil erosion, and contribute to sustainable agriculture.</span>
        </li>
      </ul>

      {/* Technology */}
      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
        🛰️ Technology Behind Smart Irrigation
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>IoT Sensors for soil moisture, humidity, and temperature</li>
        <li>AI Algorithms to predict irrigation needs based on crop type and weather</li>
        <li>Cloud-Based Dashboard for analytics and alerts</li>
        <li>Drip & Sprinkler System Automation for maximum efficiency</li>
      </ul>

      {/* Why Choose It */}
      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
        <Globe className="mr-2" /> Why Choose Smart Irrigation?
      </h2>
      <p className="text-gray-700 mb-6">
        Traditional irrigation methods often lead to overwatering, leaching of nutrients, and higher energy bills. 
        Smart irrigation ensures that every drop counts, helping you:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
        <li>Save resources</li>
        <li>Improve soil fertility</li>
        <li>Increase profitability</li>
        <li>Contribute to water conservation efforts</li>
      </ul>

      {/* Closing */}
      <p className="text-center text-lg font-semibold mt-8 text-blue-700">
        Grow more with less. Smart irrigation turns every drop into an investment for a greener, more sustainable future.
      </p>
    </div>
  );
}
