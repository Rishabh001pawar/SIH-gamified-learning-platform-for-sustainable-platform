import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiOutlineQuestionMarkCircle, HiOutlinePuzzlePiece } from 'react-icons/hi2';

// --- THIS DATA OBJECT IS NOW COMPLETE ---
const missionContentData = {
  '1': { 
    title: 'Drip Irrigation Mission', 
    quiz: { questions: [{ q: 'Benefit of drip irrigation?', options: ['Saves water', 'Increases pests'] }] },
    games: [
      { id: 'g1', title: 'Pipe Layer Challenge', description: 'Lay the virtual pipes to efficiently water the crops.', imageUrl: 'https://images.unsplash.com/photo-1587590227214-82a197a936a2?q=80&w=1974&auto=format&fit=crop', gameUrl: '/games/pest-patrol' },
    ]
  },
  '2': { 
    title: 'Drone Monitoring Mission',
    quiz: { questions: [{ q: 'What does NDVI stand for?', options: ['Normalized Difference Vegetation Index', 'New Drone Vehicle Information'] }] },
    games: [
      { id: 'g3', title: 'Pest Patrol', description: 'Fly a virtual drone and identify pest-infected areas on a map.', imageUrl: 'https://images.unsplash.com/photo-1690987979149-639535838048?q=80&w=2070&auto=format&fit=crop', gameUrl: '/games/pest-patrol' },
    ]
  },
  '3': { // Added data for mission 3
    title: 'Soil Nutrient Mission',
    quiz: { questions: [{ q: 'Which nutrient is "N" in NPK?', options: ['Nitrogen', 'Nickel'] }] },
    games: [
      { id: 'g4', title: 'Nutrient Match-Up', description: 'Match the soil deficiency symptom with the correct nutrient.', imageUrl: 'https://images.unsplash.com/photo-1563851086435-022212260f9b?q=80&w=2070&auto=format&fit=crop', gameUrl: '/games/pest-patrol' },
    ]
  },
  '5': { // Added data for mission 5
    title: 'Polyhouse Cultivation Mission',
    quiz: { questions: [{ q: 'What does a polyhouse protect crops from?', options: ['Weather', 'Internet outages'] }] },
    games: [
      { id: 'g5', title: 'Greenhouse Manager', description: 'Manage the temperature and humidity to grow perfect vegetables.', imageUrl: 'https://images.unsplash.com/photo-1590393278948-00511e4836e5?q=80&w=2070&auto=format&fit=crop', gameUrl: '/games/pest-patrol' },
    ]
  },
  // You can add more for any other missions
};

// ... THE REST OF THE QuizPage.jsx FILE IS THE SAME AS BEFORE ...

const GameCard = ({ game }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <img src={game.imageUrl} alt={game.title} className="w-full h-48 object-cover"/>
    <div className="p-5">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{game.title}</h3>
      <p className="text-slate-600 text-sm mb-4">{game.description}</p>
      <Link to={game.gameUrl}>
        <button className="w-full bg-emerald-500 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-600 transition">
          Start Game
        </button>
      </Link>
    </div>
  </div>
);

const QuizPage = () => {
  const [activeTab, setActiveTab] = useState('games'); // Default to 'games' to see them easily
  const { missionId } = useParams();
  const content = missionContentData[missionId] || { title: 'Unknown Mission', quiz: { questions: [] }, games: [] };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">{content.title}</h1>
          <p className="text-slate-500 text-lg mt-2">Complete an activity to earn your points!</p>
        </div>
        
        <div className="bg-slate-200/60 p-1.5 rounded-full flex space-x-2 w-full md:w-auto md:max-w-xs mx-auto mb-12">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 flex justify-center items-center gap-2 py-2.5 px-4 rounded-full text-sm font-semibold transition-colors
              ${activeTab === 'quiz' ? 'bg-white shadow text-emerald-600' : 'text-slate-600 hover:bg-slate-300/50'}`}
          >
            <HiOutlineQuestionMarkCircle className="h-5 w-5" /> Quiz
          </button>
          <button
            onClick={() => setActiveTab('games')}
            className={`flex-1 flex justify-center items-center gap-2 py-2.5 px-4 rounded-full text-sm font-semibold transition-colors
              ${activeTab === 'games' ? 'bg-white shadow text-emerald-600' : 'text-slate-600 hover:bg-slate-300/50'}`}
          >
            <HiOutlinePuzzlePiece className="h-5 w-5" /> Games
          </button>
        </div>

        <div>
          {activeTab === 'quiz' && (
             <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              {/* Quiz content here */}
             </div>
          )}
          {activeTab === 'games' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.games.length > 0 ? (
                content.games.map(game => <GameCard key={game.id} game={game} />)
              ) : (
                <p className="col-span-full text-center text-slate-500">No games available for this mission yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;