import React from "react";
import { House, Thermometer, Droplet, Sun, CheckCircle, Cpu, Globe } from "lucide-react";

export default function PolyhouseArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 text-purple-700 text-center">
        🏠 Polyhouse Farming
      </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">
        🌱 Grow Crops in Any Season
      </h2>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1590393278948-00511e4836e5"
        alt="Polyhouse Farming"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6">
        Polyhouse farming allows you to create a controlled environment where crops are protected from harsh weather, pests, and diseases. 
        By regulating temperature, humidity, and light, farmers can extend growing seasons, increase productivity, and achieve higher-quality yields.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
        ⚙️ How It Works
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li className="flex items-start">
          <Thermometer className="mr-2 text-purple-600 mt-1" /> 
          <span><b>Temperature & Humidity Control:</b> Maintain optimal conditions for crop growth regardless of external weather.</span>
        </li>
        <li className="flex items-start">
          <Cpu className="mr-2 text-purple-600 mt-1" /> 
          <span><b>Pest & Disease Management:</b> Minimize exposure to pests and diseases, reducing the need for chemicals.</span>
        </li>
        <li className="flex items-start">
          <Droplet className="mr-2 text-purple-600 mt-1" /> 
          <span><b>Efficient Watering Systems:</b> Integrate drip irrigation and misting systems to ensure precise water delivery.</span>
        </li>
        <li className="flex items-start">
          <Sun className="mr-2 text-purple-600 mt-1" /> 
          <span><b>Light Regulation:</b> Use shading nets or artificial lighting to optimize photosynthesis and growth.</span>
        </li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
        🌾 Benefits for Farmers
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-purple-600 mr-2 mt-1" /> 
          <span><b>Year-Round Production:</b> Grow vegetables, fruits, and flowers outside of the normal season to meet market demand.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-purple-600 mr-2 mt-1" /> 
          <span><b>Higher Yield & Quality:</b> Controlled conditions lead to healthier plants, bigger fruits, and better market prices.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-purple-600 mr-2 mt-1" /> 
          <span><b>Reduced Crop Loss:</b> Protect crops from extreme heat, cold, heavy rain, and hail.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-purple-600 mr-2 mt-1" /> 
          <span><b>Efficient Resource Use:</b> Save water and nutrients with integrated irrigation and fertigation systems.</span>
        </li>
      </ul>

      {/* Technology */}
      <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
        🛰️ Technology Behind Polyhouse Farming
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Climate Control Systems: Fans, heaters, and humidifiers for stable conditions</li>
        <li>Integrated Irrigation & Fertigation: Automated water and nutrient delivery</li>
        <li>Sensors & Monitoring: Track temperature, humidity, and soil moisture in real-time</li>
        <li>Shading & Lighting Solutions: Optimize sunlight exposure for maximum growth</li>
      </ul>

      {/* Why It Matters */}
      <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
        <Globe className="mr-2" /> Why Polyhouse Farming Matters
      </h2>
      <p className="text-gray-700 mb-6">
        Traditional open-field farming is vulnerable to unpredictable weather and pests, often resulting in crop loss. 
        Polyhouse farming mitigates these risks, providing farmers with stable, predictable, and profitable yields.
      </p>

      {/* Closing */}
      <p className="text-center text-lg font-semibold mt-8 text-purple-700">
        Step into controlled farming — protect your crops, increase your yields, and grow smarter with polyhouse technology.
      </p>
    </div>
  );
}
