import React from "react";

export default function CompostingLearningArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-green-700 text-center">
        The Ultimate Guide to Composting for Rich Soil
      </h1>
      <p className="text-gray-600 mb-6 text-center">Soil Health | Read Time: 15 min</p>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Composting"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-6">
        Healthy soil is the foundation of productive and sustainable farming. 
        One of the most effective ways to improve soil fertility, structure, and microbial life is composting. 
        Composting transforms organic waste into nutrient-rich “black gold” that nourishes plants and enhances the soil ecosystem.
      </p>

      {/* Why Composting Matters */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Why Composting Matters</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li><b>Nutrient-Rich Soil:</b> Packed with essential nutrients like nitrogen, phosphorus, and potassium.</li>
        <li><b>Improved Soil Structure:</b> Enhances aeration, water retention, and drainage.</li>
        <li><b>Microbial Health:</b> Encourages beneficial microorganisms that suppress disease and break down organic matter.</li>
        <li><b>Waste Reduction:</b> Turns organic waste into valuable soil amendment instead of landfill waste.</li>
      </ul>

      {/* Types of Composting */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Types of Composting</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
        <li><b>Traditional Pile Composting:</b> Layer organic waste in a pile and let it decompose naturally over months.</li>
        <li><b>Bin Composting:</b> Use compost bins for smaller spaces with better moisture and temperature control.</li>
        <li><b>Vermicomposting:</b> Use worms to produce nutrient-rich, fine-textured compost quickly.</li>
        <li><b>Bokashi Composting:</b> Fermentation-based method suitable for urban composting, including meat and dairy.</li>
      </ol>

      {/* Science of Composting */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">The Science of Composting</h2>
      <p className="text-gray-700 mb-4">
        Composting relies on microbes decomposing organic matter. Key components for efficient composting include:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li><b>Carbon-Rich Materials (Browns):</b> Dry leaves, straw, cardboard, wood chips.</li>
        <li><b>Nitrogen-Rich Materials (Greens):</b> Kitchen scraps, grass clippings, coffee grounds.</li>
        <li><b>Moisture & Aeration:</b> Keep damp like a wrung-out sponge and turn regularly for oxygen.</li>
      </ul>

      {/* Step-by-Step Composting */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Step-by-Step Composting Process</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Choose a well-drained, shaded site.</li>
        <li>Layer greens and browns for balance.</li>
        <li>Check moisture; add water or cover as needed.</li>
        <li>Turn the pile every 1–2 weeks for aeration.</li>
        <li>Monitor temperature (130–150°F / 55–65°C) to kill pathogens.</li>
        <li>Harvest when compost is dark, crumbly, and earthy-smelling.</li>
      </ul>

      {/* Tips & Troubleshooting */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Common Composting Tips & Troubleshooting</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Chop large materials for faster decomposition.</li>
        <li>Avoid meat, dairy, or oily foods unless using Bokashi or vermicomposting.</li>
        <li>Keep a variety of materials for balanced nutrients.</li>
        <li>Problem-solving table:
          <ul className="list-disc ml-6 mt-1">
            <li>Smelly pile → Too much nitrogen → Add browns, turn pile</li>
            <li>Slow decomposition → Pile too dry/dense → Add water, aerate</li>
            <li>Pests → Food scraps exposed → Cover with browns, use closed bin</li>
            <li>Excess heat → Pile too large → Turn to cool down</li>
          </ul>
        </li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Benefits of Using Compost</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Boosts plant growth and yield.</li>
        <li>Reduces dependence on chemical fertilizers.</li>
        <li>Increases water retention in sandy soils.</li>
        <li>Prevents soil erosion and promotes biodiversity.</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Conclusion</h2>
      <p className="text-gray-700 mb-6">
        Composting transforms organic waste into nutrient-rich soil, supporting healthy plants and sustainable agriculture. 
        Understanding the science and best practices helps you create thriving soil that nurtures crops season after season.
      </p>
    </div>
  );
}
