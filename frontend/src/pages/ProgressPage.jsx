import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineTrophy, HiOutlinePlayCircle, HiOutlineBookOpen, HiPlusCircle, HiCheckBadge } from 'react-icons/hi2';

// --- Dummy Data ---
const userData = {
    name: 'Prashant',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    title: 'Level 5: Crop Cultivator',
};

const initialActivities = [
  { id: 3, type: 'video', title: 'Watched: Mastering Drip Irrigation', date: '2025-09-17', points: 20 },
  { id: 2, type: 'mission', title: 'Completed: Tractor Calibration Basics', date: '2025-09-15', points: 70 },
  { id: 1, type: 'custom', title: 'Successfully implemented soil testing on my west field.', date: '2025-09-12', points: 50 },
];

const skillsData = [
  { name: 'Irrigation', level: 80 },
  { name: 'Technology', level: 65 },
  { name: 'Soil Health', level: 90 },
  { name: 'Pest Control', level: 55 },
  { name: 'Machinery', level: 70 },
  { name: 'Planning', level: 75 },
];

const badgesData = [
    { name: 'Water Saver', icon: '💧', color: 'from-blue-400 to-cyan-500' },
    { name: 'Tech Pioneer', icon: '🚀', color: 'from-slate-500 to-slate-700' },
    { name: 'Soil Expert', icon: '🌱', color: 'from-amber-500 to-orange-600' },
    { name: 'First Mission', icon: '🥇', color: 'from-yellow-400 to-amber-500' },
];

// --- Reusable Components for the new UI ---

const ActivityIcon = ({ type }) => {
    // ... same as before
};

const SkillsRadarChart = ({ skills }) => {
    const size = 280;
    const center = size / 2;
    const points = skills.map((skill, i, arr) => {
        const angle = (i / arr.length) * 2 * Math.PI - Math.PI / 2;
        const x = center + (center * 0.8) * (skill.level / 100) * Math.cos(angle);
        const y = center + (center * 0.8) * (skill.level / 100) * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');

    const axisPoints = skills.map((skill, i, arr) => {
        const angle = (i / arr.length) * 2 * Math.PI - Math.PI / 2;
        const x = center + center * 0.95 * Math.cos(angle);
        const y = center + center * 0.95 * Math.sin(angle);
        return { x, y, name: skill.name };
    });

    return (
        <div className="flex justify-center items-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Background grid lines */}
                {[0.25, 0.5, 0.75, 1].map(r => (
                    <polygon
                        key={r}
                        points={skills.map((s, i, a) => `${center + center * 0.8 * r * Math.cos((i / a.length) * 2 * Math.PI - Math.PI / 2)},${center + center * 0.8 * r * Math.sin((i / a.length) * 2 * Math.PI - Math.PI / 2)}`).join(' ')}
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                    />
                ))}
                {/* Skill polygon */}
                <motion.polygon
                    points={points}
                    fill="rgba(16, 185, 129, 0.4)"
                    stroke="#10b981"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Skill labels */}
                {axisPoints.map(p => (
                    <text key={p.name} x={p.x} y={p.y} textAnchor="middle" dy="0.3em" fill="#475569" fontSize="12" fontWeight="600">{p.name}</text>
                ))}
            </svg>
        </div>
    );
};

// --- Main Progress Page Component ---
const ProgressPage = () => {
    const [activities] = useState(initialActivities);

    // Example data (replace with real context/store)
    const totalPoints = activities.reduce((sum, act) => sum + act.points, 0);
    const missionsCompleted = activities.filter(a => a.type === 'mission').length;
    const leaderboardRank = 3; // Example static rank
    const incentivesUnlocked = [
      { title: 'Bronze Badge', unlocked: missionsCompleted >= 1 },
      { title: 'Silver Badge', unlocked: missionsCompleted >= 3 },
      { title: 'Gold Badge', unlocked: missionsCompleted >= 5 },
      { title: 'Free Seeds Pack', unlocked: totalPoints >= 300 },
    ];

        // Manual progress logging moved to CommunityPage Feed tab

  return (
    <div className="min-h-screen bg-slate-100">
        {/* Personalized Header */}
        <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 rounded-b-3xl shadow-lg">
            <div className="flex items-center gap-4">
                <img src={userData.avatar} alt="User Avatar" className="w-20 h-20 rounded-full border-4 border-white/50" />
                <div>
                    <h1 className="text-3xl font-bold">{userData.name}</h1>
                    <p className="text-emerald-100">{userData.title}</p>
                </div>
            </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Progress Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                        <HiOutlineTrophy className="text-emerald-500 w-10 h-10 mb-2" />
                        <div className="text-lg font-bold text-slate-800">Leaderboard Rank</div>
                        <div className="text-2xl font-extrabold text-green-700">#{leaderboardRank}</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                        <HiCheckBadge className="text-yellow-500 w-10 h-10 mb-2" />
                        <div className="text-lg font-bold text-slate-800">Missions Completed</div>
                        <div className="text-2xl font-extrabold text-green-700">{missionsCompleted}</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                        <HiOutlinePlayCircle className="text-blue-500 w-10 h-10 mb-2" />
                        <div className="text-lg font-bold text-slate-800">Incentives Unlocked</div>
                        <ul className="mt-2 text-green-700 font-semibold text-sm">
                            {incentivesUnlocked.filter(i => i.unlocked).map(i => (
                                <li key={i.title}>{i.title}</li>
                            ))}
                            {incentivesUnlocked.filter(i => i.unlocked).length === 0 && <li className="text-slate-400">None yet</li>}
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Activity Timeline (manual logging moved to CommunityPage) */}
            <div className="lg:col-span-2 space-y-8">
                {/* Activity Timeline */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                        {activities.map((activity, index) => (
                             <motion.div 
                                key={activity.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-emerald-500 rounded-full p-3 flex-shrink-0 mt-1 shadow-sm">
                                    <ActivityIcon type={activity.type} />
                                </div>
                                <div className="flex-grow bg-white p-4 rounded-xl shadow-sm">
                                    <p className="font-semibold text-slate-800">{activity.title}</p>
                                    <div className="flex justify-between items-center mt-2 text-sm">
                                        <p className="text-slate-500">{new Date(activity.date).toLocaleDateString()}</p>
                                        <p className="font-bold text-emerald-600">+{activity.points} PTS</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Skills & Achievements */}
            <div className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">My Skills</h2>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <SkillsRadarChart skills={skillsData} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Achievements</h2>
                    <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-3 gap-4">
                        {badgesData.map(badge => (
                            <div key={badge.name} className="flex flex-col items-center text-center group">
                                <div className={`relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${badge.color} shadow-lg transition-transform group-hover:scale-110`}>
                                    <span className="text-4xl">{badge.icon}</span>
                                </div>
                                <p className="text-xs font-semibold text-slate-600 mt-2">{badge.name}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;