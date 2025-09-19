import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Outlet } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import CalculatorPage from './pages/CalculatorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MissionPage from './pages/MissionPage';
import QuizPage from './pages/QuizPage';
import CommunityPage from './pages/CommunityPage';
import LearningPage from './pages/LearningPage';
import ProgressPage from './pages/ProgressPage';
import PestPatrolGame from './games/PestPatrolGame';
import TechBox from './pages/TechBox';

import Chatbot from './components/Chatbot'; // The new AI Chatbot
import MissionListPage from './pages/MissionList';
import MissionLeaderboardPage from './pages/MissionLeaderboard';
import MissionIncentivesPage from './pages/MissionIncentives';
import MissionProgress from './pages/MissionProgress';

import DronesArticle from './pages/articles/Drones';
import DronesLearningArticle from './pages/learning-articles/DronesLearningArticle';
import CompostingLearningArticle from './pages/learning-articles/CompostingLearningArticle';
import TractorLearningArticle from './pages/learning-articles/TractorLearningArticle';
import IrrigationArticle from './pages/articles/Irrigation';
import TractorArticle from './pages/articles/Tractor';
import PolyhouseArticle from './pages/articles/Polyhouse';
import FertilizerArticle from './pages/articles/Fertilizer';
import MountainArticle from './pages/articles/Mountain';
import DesertArticle from './pages/articles/Desert';

import DripIrrigationMission from './pages/mission-pages/DripIrrigationMission';
import SoilNutrientTestingMission from './pages/mission-pages/SoilNutrientTestingMission';
import PolyhouseVegetableMission from './pages/mission-pages/PolyhouseVegetableMission';
import DroneCropMonitoringMission from './pages/mission-pages/DroneCropMonitoringMission';
import TractorCalibrationMission from './pages/mission-pages/TractorCalibrationMission';

// --- NEW: Data for your article pages ---


// --- 2. UPDATED LAYOUT WITH CHATBOX ---
const MainAppLayout = ({ isLoggedIn, handleLogout }) => (
  <>
    <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    <main>
      <Outlet />
    </main>
  <Chatbot /> {/* Chatbot is now part of the main layout */}
  </>
);

// --- 3. MAIN APP LOGIC & ROUTING ---
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/');
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Routes>
      <Route element={<MainAppLayout isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/mission/list" element={<MissionListPage />} />
        <Route path="/mission/leaderboard" element={<MissionLeaderboardPage />} />
        <Route path="/mission/incentives" element={<MissionIncentivesPage />} />
        <Route path="/mission/progress" element={<MissionProgress />} />
  <Route path="/mission/Calculator" element={<CalculatorPage />} />
        <Route path="/mission/:missionId/quiz" element={<QuizPage />} />
        <Route path="/games/pest-patrol" element={<PestPatrolGame />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/profile" element={<div>Profile Page</div>} />
        <Route path="/techbox" element={<TechBox />} />
        <Route path="/rewards" element={<TechBox />} />
        {/* --- Home Page Article Routes --- */}
        <Route path="/articles/drones" element={<DronesArticle />} />
        <Route path="/articles/irrigation" element={<IrrigationArticle />} />
        <Route path="/articles/tractors" element={<TractorArticle />} />
        <Route path="/articles/polyhouse" element={<PolyhouseArticle />} />
        <Route path="/articles/fertilizers" element={<FertilizerArticle />} />
        <Route path="/articles/mountain-farming" element={<MountainArticle />} />
        <Route path="/articles/desert" element={<DesertArticle />} />
        {/* --- Learning Page Article Routes --- */}
        <Route path="/learning-articles/drones" element={<DronesLearningArticle />} />
        <Route path="/learning-articles/composting" element={<CompostingLearningArticle />} />
        <Route path="/learning-articles/tractors" element={<TractorLearningArticle />} />
        {/* --- Individual Mission Pages --- */}
        <Route path="/mission-pages/drip-irrigation" element={<DripIrrigationMission />} />
        <Route path="/mission-pages/soil-nutrient-testing" element={<SoilNutrientTestingMission />} />
        <Route path="/mission-pages/polyhouse-vegetable" element={<PolyhouseVegetableMission />} />
        <Route path="/mission-pages/drone-crop-monitoring" element={<DroneCropMonitoringMission />} />
        <Route path="/mission-pages/tractor-calibration" element={<TractorCalibrationMission />} />
      </Route>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

// --- 4. THE WRAPPER COMPONENT ---
const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
