import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Game Data ---
// In a real app, this would come from a database or API
const levels = [
  {
    pest: { name: 'Aphids', imageUrl: 'https://images.unsplash.com/photo-1620589124393-0e1a8b13997f?q=80&w=1974&auto=format&fit=crop' },
    solutions: [
      { name: 'Ladybug', isCorrect: true, emoji: '🐞', feedback: 'Correct! Ladybugs are natural predators of aphids.' },
      { name: 'Harsh Chemical', isCorrect: false, emoji: '☠️', feedback: 'Incorrect. Harsh chemicals can harm the plant and soil.' },
      { name: 'Overwatering', isCorrect: false, emoji: '💧', feedback: 'Incorrect. Overwatering can cause root rot, not solve pests.' },
    ]
  },
  {
    pest: { name: 'Spider Mites', imageUrl: 'https://images.unsplash.com/photo-1619803395958-3d2b0f2a7a53?q=80&w=2070&auto=format&fit=crop' },
    solutions: [
      { name: 'Salt', isCorrect: false, emoji: '🧂', feedback: 'Incorrect. Salt will dehydrate and kill the plant.' },
      { name: 'Shouting', isCorrect: false, emoji: '🗣️', feedback: 'That won\'t scare them away!' },
       { name: 'Neem Oil Spray', isCorrect: true, emoji: '🌿', feedback: 'Great choice! Neem oil is a natural and effective miticide.' },
    ]
  },
  {
    pest: { name: 'Fungal Gnats', imageUrl: 'https://images.unsplash.com/photo-1594918732850-8b22a07c080b?q=80&w=2070&auto=format&fit=crop' },
    solutions: [
      { name: 'Ant Spray', isCorrect: false, emoji: '🐜', feedback: 'Incorrect. Ant spray is not effective against fungal gnats and can be harmful to your plant.' },
      { name: 'Yellow Sticky Traps', isCorrect: true, emoji: '🟡', feedback: 'Perfect! The gnats are attracted to the yellow color and get stuck.' },
      { name: 'Adding more water', isCorrect: false, emoji: '💦', feedback: 'Incorrect. Fungal gnats thrive in moist soil, so adding more water would make the problem worse!' },
    ]
  },
  {
    pest: { name: 'Mealybugs', imageUrl: 'https://images.unsplash.com/photo-1621213233866-932f943a41b2?q=80&w=1935&auto=format&fit=crop' },
    solutions: [
      { name: 'Rubbing Alcohol on Swab', isCorrect: true, emoji: ' swabs', feedback: 'Yes! The alcohol dissolves their waxy coating, killing them on contact.' },
      { name: 'Dish Soap', isCorrect: false, emoji: '🧼', feedback: 'Not the best solution. While it can help, rubbing alcohol is more effective.' },
      { name: 'Coffee Grounds', isCorrect: false, emoji: '☕', feedback: 'Incorrect. Coffee grounds don\'t affect mealybugs and can attract other pests.' },
    ]
  },
  {
    pest: { name: 'Cabbage Worms', imageUrl: 'https://images.unsplash.com/photo-1599370003058-29402512f451?q=80&w=2070&auto=format&fit=crop' },
    solutions: [
      { name: 'Vinegar Spray', isCorrect: false, emoji: '🍶', feedback: 'Incorrect. Vinegar can burn plant leaves and is not a reliable pest control method.' },
      { name: 'BT (Bacillus thuringiensis)', isCorrect: true, emoji: '🐛', feedback: 'Correct! BT is a natural bacteria that specifically targets and kills caterpillars without harming other insects.' },
      { name: 'Diatomaceous Earth', isCorrect: false, emoji: '🧂', feedback: 'Incorrect. While it works on some pests, it is not very effective against larger cabbage worms.' },
    ]
  }
];

const PestPatrolGame = () => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [draggedSolution, setDraggedSolution] = useState(null);

  const currentLevel = levels[currentLevelIndex];
  const isGameOver = currentLevelIndex >= levels.length;

  const handleDragStart = (solution) => {
    setDraggedSolution(solution);
  };

  const handleDrop = () => {
    if (!draggedSolution) return;
    setIsRoundOver(true);
    if (draggedSolution.isCorrect) {
      setScore(score + 10);
      setFeedback({ message: draggedSolution.feedback, type: 'success' });
    } else {
      setFeedback({ message: draggedSolution.feedback, type: 'error' });
    }
  };

  const handleNextLevel = () => {
    setCurrentLevelIndex(currentLevelIndex + 1);
    setFeedback({ message: '', type: '' });
    setIsRoundOver(false);
    setDraggedSolution(null);
  };

  const handleRestart = () => {
    setCurrentLevelIndex(0);
    setScore(0);
    setFeedback({ message: '', type: '' });
    setIsRoundOver(false);
    setDraggedSolution(null);
  };

  if (isGameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-50 text-center p-4">
        <h1 className="text-4xl font-bold text-emerald-700">Game Over!</h1>
        <p className="text-2xl mt-4 text-slate-600">Your final score is: <span className="font-bold">{score}</span></p>
        <button onClick={handleRestart} className="mt-8 flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-emerald-600 transition shadow-md">
          <span className="text-2xl">🔄</span> Play Again
        </button>
        <p className="mt-4">
          <Link to="/mission/list" className="text-emerald-600 hover:underline">Back to Missions</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-100 p-4 pt-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Pest Patrol</h1>
          <p className="text-slate-500 text-lg mt-1">Drag the correct solution to the plant to get rid of the pests!</p>
          <p className="text-xl font-bold text-emerald-600 mt-2">Score: {score}</p>
        </div>

        {/* Game Area */}
        <div 
          className="relative w-full h-80 md:h-96 rounded-2xl bg-cover bg-center shadow-lg border-4 border-dashed border-slate-300 transition-colors"
          style={{ backgroundImage: `url(${currentLevel.pest.imageUrl})` }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          <div className="absolute top-4 left-4 bg-white/80 px-4 py-2 rounded-full font-semibold text-slate-800 shadow-md">
            Pest: {currentLevel.pest.name}
          </div>
        </div>

        {/* Solutions Area */}
        <div className="mt-8">
          <h2 className="text-center text-xl font-semibold text-slate-700 mb-4">Choose your solution:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentLevel.solutions.map((solution, index) => (
              <div
                key={index}
                draggable={!isRoundOver}
                onDragStart={() => handleDragStart(solution)}
                className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-md cursor-grab transition ${isRoundOver ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:-translate-y-1'}`}
              >
                <span className="text-6xl">{solution.emoji}</span>
                <p className="mt-4 text-lg font-bold text-slate-800">{solution.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Feedback Modal */}
        {isRoundOver && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 text-center shadow-2xl max-w-sm">
              {feedback.type === 'success' ? (
                <span className="text-6xl mx-auto block">✅</span>
              ) : (
                <span className="text-6xl mx-auto block">❌</span>
              )}
              <p className="text-xl font-semibold mt-4 text-slate-800">{feedback.message}</p>
              <button onClick={handleNextLevel} className="mt-6 bg-emerald-500 text-white px-8 py-2 rounded-full font-semibold hover:bg-emerald-600 transition">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PestPatrolGame;
