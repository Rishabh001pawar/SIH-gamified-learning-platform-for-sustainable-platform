import React from 'react';

// --- MAIN MISSION PAGE COMPONENT ---

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">Missions</h1>
            <p className="text-slate-500 text-lg mt-1">Choose your sustainable farming challenges.</p>
          </div>
        </div>

        {/* Mission content will be shown in MissionList component */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-center text-gray-500 py-6">Select a mission section from the navigation above.</p>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;