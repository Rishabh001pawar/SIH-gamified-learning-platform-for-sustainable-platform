import React, { useState } from "react";
import { HiMagnifyingGlass, HiFunnel, HiCheckCircle } from "react-icons/hi2";
import MissionList from "../components/missions/MissionList";
import PersonalizedQuestForm from "../components/missions/PersonalizedQuestForm";

const bestPracticeMissions = [
  {
    id: 1,
    title: "Use Organic Inputs",
    description: "Switch to organic fertilizers and bio-pesticides for improved soil health.",
    type: "Best Practice",
  },
  {
    id: 2,
    title: "Mixed Cropping",
    description: "Plant at least two different crops in the same field to boost biodiversity.",
    type: "Best Practice",
  },
  {
    id: 3,
    title: "Soil Health Management",
    description: "Test soil and apply compost to maintain fertility.",
    type: "Best Practice",
  },
];

// Dummy data with more details like tags and progress
const initialMissions = {
  active: [],
  available: [
    {
      id: 1,
      featured: true,
      title: "Drip Irrigation Setup",
      category: "Water Conservation",
      description: "Learn to install and optimize a drip irrigation system for efficient water use and higher yields.",
      points: 100,
      difficulty: "Easy",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Drone Crop Monitoring",
      category: "Technology",
      description: "Monitor crops using drone technology for better yield and efficiency.",
      points: 150,
      difficulty: "Medium",
      imageUrl: "https://images.unsplash.com/photo-1572295596956-23490334515a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Soil Nutrient Testing",
      category: "Soil Health",
      description: "Perform soil tests and understand how to interpret results for optimal fertilization.",
      points: 80,
      difficulty: "Easy",
      imageUrl: "https://images.unsplash.com/photo-1563851086435-022212260f9b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Tractor Calibration Basics",
      category: "Machinery",
      description: "Learn the basics of calibrating your tractor for optimal performance.",
      points: 70,
      difficulty: "Easy",
      imageUrl: "https://images.unsplash.com/photo-1619719826894-89d6c4fd5739?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      title: "Polyhouse Vegetable Cultivation",
      category: "Advanced Farming",
      description: "Master the art of growing vegetables in a controlled polyhouse environment for year-round production.",
      points: 200,
      difficulty: "Hard",
      imageUrl: "https://images.unsplash.com/photo-1590393278948-00511e4836e5?q=80&w=2070&auto=format&fit=crop",
    },
  ],
  completed: [],
};

const DifficultyTag = ({ difficulty }) => {
  const colorClasses = {
    Easy: "bg-emerald-100 text-emerald-800",
    Medium: "bg-blue-100 text-blue-800",
    Hard: "bg-red-100 text-red-800",
  };
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${colorClasses[difficulty] || "bg-gray-100 text-gray-800"}`}>
      {difficulty}
    </span>
  );
};

const MissionCard = ({ mission }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <img src={mission.imageUrl} alt={mission.title} className="w-full h-40 object-cover" />
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <p className="text-xs font-semibold uppercase text-emerald-600">{mission.category}</p>
        <DifficultyTag difficulty={mission.difficulty} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 truncate">{mission.title}</h3>
      <div className="text-sm font-medium text-slate-600 mb-4">
        <span className="font-bold text-emerald-500">{mission.points}</span> Points
      </div>
      {mission.progress >= 0 && (
        <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
          <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${mission.progress}%` }}></div>
        </div>
      )}
      {mission.status === "completed" && (
        <div className="flex items-center gap-2 text-emerald-600 font-semibold"><HiCheckCircle /> Completed</div>
      )}
    </div>
  </div>
);

export default function MissionListPage() {
  const [personalizedMissions, setPersonalizedMissions] = useState([]);
  const [missions, setMissions] = useState(initialMissions);
  const [selectedMission, setSelectedMission] = useState(null);
  const [missionImage, setMissionImage] = useState(null);
  const [missionVideo, setMissionVideo] = useState(null);
  const [points, setPoints] = useState(0);

  function handleAddPersonalizedQuest(quest) {
    setPersonalizedMissions(prev => [...prev, quest]);
  }


  function handleMissionClick(mission, type) {
    setSelectedMission({ ...mission, type });
  }

  function handleStartMission() {
    if (!selectedMission) return;
    // Remove from available, add to active
    setMissions(prev => {
      let updated = { ...prev };
      updated.available = updated.available.filter(m => m.id !== selectedMission.id);
      updated.active = [
        ...updated.active,
        { ...selectedMission, type: 'active' }
      ];
      return updated;
    });
    // Navigate to mission page
    const titleToRoute = {
      'Drip Irrigation Setup': '/mission-pages/drip-irrigation',
      'Drone Crop Monitoring': '/mission-pages/drone-crop-monitoring',
      'Soil Nutrient Testing': '/mission-pages/soil-nutrient-testing',
      'Tractor Calibration Basics': '/mission-pages/tractor-calibration',
      'Polyhouse Vegetable Cultivation': '/mission-pages/polyhouse-vegetable',
    };
    let route = titleToRoute[selectedMission.title];
    if (route) {
      window.location.assign(route);
    }
    setSelectedMission(null);
  }

  function handleCompleteMission() {
    if (!selectedMission) return;
    // Remove from active, add to completed, save uploads
    setMissions(prev => {
      let updated = { ...prev };
      updated.active = updated.active.filter(m => m.id !== selectedMission.id);
      updated.completed = [
        ...updated.completed,
        {
          ...selectedMission,
          status: 'completed',
          submittedImage: missionImage,
          submittedVideo: missionVideo
        }
      ];
      return updated;
    });
    setPoints(p => p + (selectedMission.points || 0));
    setSelectedMission(null);
    setMissionImage(null);
    setMissionVideo(null);
  }

  function handleCloseModal() {
    setSelectedMission(null);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">Mission List</h1>
            <p className="text-slate-500 text-lg mt-1">Choose your sustainable farming challenges.</p>
            <div className="mt-2 text-emerald-700 font-bold">Total Points: {points}</div>
          </div>
          <div className="flex gap-3">
            <button className="p-3 bg-white hover:bg-slate-200 rounded-full shadow-sm transition-colors border border-slate-200">
              <HiMagnifyingGlass className="h-5 w-5 text-slate-600" />
            </button>
            <button className="p-3 bg-white hover:bg-slate-200 rounded-full shadow-sm transition-colors border border-slate-200">
              <HiFunnel className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.available.map(mission => (
            <div key={mission.id} onClick={() => handleMissionClick(mission, 'available')} className="cursor-pointer">
              <MissionCard mission={mission} />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Active Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.active.map(mission => (
              <div key={mission.id} onClick={() => handleMissionClick(mission, 'active')} className="cursor-pointer">
                <MissionCard mission={mission} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Completed Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.completed.map(mission => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        </div>

        {/* Modal for Mission Details & Completion */}
        {selectedMission && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl">&times;</button>
              <img src={selectedMission.imageUrl} alt={selectedMission.title} className="w-full h-48 object-cover rounded-xl mb-6" />
              <h2 className="text-2xl font-bold mb-2 text-emerald-700">{selectedMission.title}</h2>
              <p className="text-sm font-semibold uppercase text-emerald-600 mb-2">{selectedMission.category}</p>
              <div className="mb-4 text-slate-700">{selectedMission.description}</div>
              <div className="mb-4 font-bold text-emerald-600">Points: {selectedMission.points}</div>
              {selectedMission.type === 'available' ? (
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                  onClick={handleStartMission}
                >Start Mission</button>
              ) : selectedMission.type === 'active' ? (
                <div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Upload Image:</label>
                    <input type="file" accept="image/*" onChange={e => setMissionImage(e.target.files[0])} className="mb-2" />
                    {missionImage && <span className="text-xs text-emerald-700">{missionImage.name}</span>}
                  </div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Upload Video:</label>
                    <input type="file" accept="video/*" onChange={e => setMissionVideo(e.target.files[0])} className="mb-2" />
                    {missionVideo && <span className="text-xs text-emerald-700">{missionVideo.name}</span>}
                  </div>
                  <button
                    className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition"
                    onClick={handleCompleteMission}
                  >Submit & Complete Mission</button>
                </div>
              ) : (
                <div className="text-emerald-600 font-bold flex items-center gap-2"><HiCheckCircle /> Completed</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
