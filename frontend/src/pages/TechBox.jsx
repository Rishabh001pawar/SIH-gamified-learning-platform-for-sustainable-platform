import React from "react";

const gadgets = [
  {
    name: "Smart Drone",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=2070&auto=format&fit=crop",
    description: "Drones help monitor crops, spray pesticides, and analyze field health from above.",
    useCase: "Use for aerial crop monitoring and precision spraying."
  },
  {
    name: "Soil Sensor",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    description: "Sensors measure soil moisture and nutrients, helping optimize irrigation and fertilization.",
    useCase: "Place in fields to get real-time soil data and automate irrigation."
  },
  {
    name: "Smart Irrigation Controller",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2070&auto=format&fit=crop",
    description: "Automates water delivery based on weather and soil data, saving water and boosting yields.",
    useCase: "Connect to drip systems for efficient water management."
  }
];

const TechBox = () => (
  <div className="min-h-screen bg-slate-50 py-12 px-4">
    <h1 className="text-4xl font-bold text-emerald-700 text-center mb-8">TechBox: Smart Farming Gadgets</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {gadgets.map((gadget) => (
        <div key={gadget.name} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={gadget.image} alt={gadget.name} className="w-full h-48 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-bold text-emerald-700 mb-2">{gadget.name}</h2>
            <p className="text-slate-700 mb-2">{gadget.description}</p>
            <div className="bg-emerald-50 text-emerald-800 rounded-lg px-3 py-2 text-sm font-medium">How to use: {gadget.useCase}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TechBox;
