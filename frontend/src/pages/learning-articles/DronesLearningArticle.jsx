import React from "react";

export default function DronesLearningArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-green-700 text-center">
        How Drones Are Revolutionizing Modern Farming
      </h1>
      <p className="text-gray-600 mb-6 text-center">Technology | Read Time: 8 min</p>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1623522204648-939023403a4e"
        alt="Drones"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-6">
        Farming has always been at the forefront of human innovation, from the invention of the plow to the Green Revolution. 
        Today, modern agriculture is being transformed once again—this time by drones. 
        These unmanned aerial vehicles (UAVs) are changing the way farmers manage crops, monitor fields, and optimize yields.
      </p>

      {/* Precision Agriculture */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Precision Agriculture Takes Flight</h2>
      <p className="text-gray-700 mb-6">
        Drones are a cornerstone of precision agriculture, a farming approach that uses data and technology to make every input count. 
        Equipped with cameras, sensors, and GPS systems, drones can monitor crop health, assess soil conditions, and detect pest infestations—all from the sky. 
        This allows farmers to make informed decisions quickly, saving time, money, and resources.
      </p>

      {/* Key Applications */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Key Applications of Drones in Farming</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
        <li>
          <b>Crop Monitoring and Health Assessment:</b> High-resolution aerial imagery enables farmers to spot early signs of disease, nutrient deficiencies, or water stress. 
          Multispectral and thermal sensors can detect changes invisible to the naked eye, helping farmers act before small problems become major losses.
        </li>
        <li>
          <b>Soil and Field Analysis:</b> Drones can survey large tracts of land to generate detailed maps of soil quality, moisture levels, and topography, optimizing planting, irrigation, and fertilizer application.
        </li>
        <li>
          <b>Precision Spraying and Fertilization:</b> Some drones spray crops with fertilizers, pesticides, or herbicides accurately, reducing chemical use, minimizing human exposure, and targeting only affected areas.
        </li>
        <li>
          <b>Irrigation Management:</b> Thermal cameras detect dry or overwatered areas, allowing farmers to adjust irrigation systems for optimal water usage.
        </li>
        <li>
          <b>Planting and Seeding:</b> Emerging drone technology enables aerial planting by shooting pods containing seeds and nutrients directly into the soil, especially useful for hard-to-reach areas.
        </li>
      </ol>

      {/* Benefits Beyond the Field */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Benefits Beyond the Field</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Increased Efficiency: Tasks that once took hours or days can now be completed in minutes.</li>
        <li>Cost Savings: Optimized use of water, fertilizers, and pesticides reduces expenses.</li>
        <li>Sustainability: Targeted interventions help minimize environmental impact.</li>
        <li>Data-Driven Decisions: Continuous monitoring generates actionable insights for long-term farm management.</li>
      </ul>

      {/* Challenges */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Challenges and the Road Ahead</h2>
      <p className="text-gray-700 mb-6">
        While drones offer immense potential, there are challenges to adoption. High upfront costs, regulatory hurdles, and the need for specialized training can slow integration. 
        However, as technology becomes more affordable and accessible, drones are expected to become a standard tool in every modern farm’s arsenal.
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Conclusion</h2>
      <p className="text-gray-700 mb-6">
        Drones are not just a high-tech novelty—they are rapidly reshaping agriculture. 
        From enhancing crop health monitoring to precision spraying and irrigation, these flying machines help farmers increase efficiency, reduce costs, and adopt sustainable practices. 
        As drone technology continues to evolve, the future of farming looks smarter, faster, and greener than ever.
      </p>
    </div>
  );
}
