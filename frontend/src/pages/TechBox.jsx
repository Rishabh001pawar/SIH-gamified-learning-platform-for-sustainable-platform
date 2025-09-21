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
  },
  {
    name: "Automated Tractor",
    image: "https://images.unsplash.com/photo-1579370318447-dbcf29092e0f?q=80&w=2070&auto=format&fit=crop",
    description: "Self-driving tractors equipped with GPS for precision planting, tilling, and harvesting.",
    useCase: "Use for large-scale field operations to save time and fuel."
  },
  {
    name: "Weather Station",
    image: "https://images.unsplash.com/photo-1581091012184-9c0f914c4252?q=80&w=2070&auto=format&fit=crop",
    description: "Monitors temperature, humidity, rainfall, and wind speed to inform farm decisions.",
    useCase: "Install in the field to get accurate microclimate data for irrigation and planting."
  },
  {
    name: "Crop Health Camera",
    image: "https://images.unsplash.com/photo-1610286360878-21a7b8d4d64b?q=80&w=2070&auto=format&fit=crop",
    description: "High-resolution cameras detect crop diseases and nutrient deficiencies early.",
    useCase: "Mount on drones or tractors to scan crops and receive alerts for interventions."
  },
  {
    name: "Livestock Tracker",
    image: "https://images.unsplash.com/photo-1604335399101-92fdf72c6b69?q=80&w=2070&auto=format&fit=crop",
    description: "Wearable sensors track the health, location, and activity of livestock in real time.",
    useCase: "Use for grazing management, early disease detection, and herd monitoring."
  },
  {
    name: "Automated Greenhouse Controller",
    image: "https://images.unsplash.com/photo-1602711971673-bda7e8a8e2b7?q=80&w=2070&auto=format&fit=crop",
    description: "Manages temperature, humidity, and lighting to optimize greenhouse plant growth.",
    useCase: "Connect sensors and controls to maintain ideal growing conditions automatically."
  },
  {
    name: "Robotic Harvester",
    image: "https://images.unsplash.com/photo-1576186720062-64b7c1e12a4c?q=80&w=2070&auto=format&fit=crop",
    description: "Autonomous machines that harvest fruits, vegetables, and grains with minimal human labor.",
    useCase: "Deploy during harvest season to improve efficiency and reduce crop loss."
  },
  {
    name: "AI Pest Detector",
    image: "https://images.unsplash.com/photo-1581093448795-9b4e7ef3f1d5?q=80&w=2070&auto=format&fit=crop",
    description: "Uses AI and image recognition to detect pests and plant diseases early.",
    useCase: "Install in fields or on drones to monitor crops and alert farmers instantly."
  },
  {
    name: "Hydroponic Nutrient Monitor",
    image: "https://images.unsplash.com/photo-1581092795365-91b4d44d1714?q=80&w=2070&auto=format&fit=crop",
    description: "Measures nutrient concentration in hydroponic systems to maintain optimal plant growth.",
    useCase: "Connect to hydroponic setups for automated nutrient adjustments."
  },
  {
    name: "Precision Seeder",
    image: "https://images.unsplash.com/photo-1579370329873-5e48ef2371c6?q=80&w=2070&auto=format&fit=crop",
    description: "Plants seeds at precise depths and spacing for uniform crop growth.",
    useCase: "Attach to tractors for highly accurate sowing in large fields."
  },
  {
    name: "Automated Weeding Robot",
    image: "https://images.unsplash.com/photo-1581091011923-3f7b9e2e2b5b?q=80&w=2070&auto=format&fit=crop",
    description: "Identifies and removes weeds mechanically or with targeted herbicide application.",
    useCase: "Use in row crops to reduce labor and chemical use."
  },
  {
    name: "Smart Fertilizer Spreader",
    image: "https://images.unsplash.com/photo-1581091028227-7d4b8a0f16ab?q=80&w=2070&auto=format&fit=crop",
    description: "Distributes fertilizer based on soil and crop data for precise nutrient delivery.",
    useCase: "Mount on tractors for variable-rate fertilization."
  },
  {
    name: "Field Mapping Drone",
    image: "https://images.unsplash.com/photo-1581091038871-d1cfae0e8d6c?q=80&w=2070&auto=format&fit=crop",
    description: "Creates accurate field maps for planning irrigation, planting, and fertilization.",
    useCase: "Fly over fields to generate GPS-based maps and soil health insights."
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
