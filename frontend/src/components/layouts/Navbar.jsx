import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { 
  HiOutlineHome, HiOutlineAcademicCap, HiOutlineBolt, HiOutlineChartBar, HiOutlineGift, HiOutlineUserGroup,
  HiOutlineUserCircle, HiOutlineArrowRightOnRectangle, HiBars3, HiXMark 
} from 'react-icons/hi2';

function Navbar({ isLoggedIn, handleLogout }) {
  const [isMissionDropdownOpen, setMissionDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isLearningDropdownOpen, setLearningDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const { user } = useContext(AppContext);
  // const rewardCount = 3;

  const handleLinkClick = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileRef]);

  return (
    <nav className="sticky top-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative flex items-center justify-between h-full">
          
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2 text-xl font-bold text-emerald-600">
              <HiOutlineHome />
              <span>FarmQuest</span>
            </Link>
          </div>

          {/* Center: Main Navigation */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-baseline space-x-2">
              <Link to="/" className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              {/* Learning Dropdown */}
              <div className="relative" tabIndex={0}>
                <button
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                  onClick={() => setLearningDropdownOpen((open) => !open)}
                >
                  Learning
                </button>
                <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-44 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20 ${isLearningDropdownOpen ? '' : 'hidden'}`}
                  onMouseEnter={() => setLearningDropdownOpen(true)}
                  onMouseLeave={() => setLearningDropdownOpen(false)}
                >
                  <Link to="/learning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setLearningDropdownOpen(false)}>Learning</Link>
                  <Link to="/games/pest-patrol" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setLearningDropdownOpen(false)}>Game Mode</Link>
                </div>
              </div>
              {/* Mission Dropdown */}
              <div className="relative" tabIndex={0}>
                <button
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                  onClick={() => setMissionDropdownOpen((open) => !open)}
                >
                  Mission
                </button>
                <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20 ${isMissionDropdownOpen ? '' : 'hidden'}`}
                  onMouseEnter={() => setMissionDropdownOpen(true)}
                  onMouseLeave={() => setMissionDropdownOpen(false)}
                >
                  <Link to="/mission/list" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMissionDropdownOpen(false)}>Mission List</Link>
                  <Link to="/mission/leaderboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMissionDropdownOpen(false)}>Leaderboard</Link>
                  <Link to="/mission/incentives" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMissionDropdownOpen(false)}>Incentives</Link>
                  <Link to="/mission/Calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMissionDropdownOpen(false)}>Calculator</Link>
                </div>
              </div>
              <Link to="/progress" className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Progress</Link>
              <Link to="/techbox" className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">TechBox</Link>
              <Link to="/community" className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Community</Link>
            </div>
          </div>

          {/* Right Side: Rewards & Profile/Login */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <div className="relative" ref={profileRef}>
                  <button onClick={() => setProfileOpen(!isProfileOpen)} className="flex items-center gap-2 rounded-full text-left p-1 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                    <HiOutlineUserCircle className="h-8 w-8" />
                  </button>
                  {isProfileOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">Signed in as <br/><strong className="font-medium">{user?.name || 'User'}</strong></div>
                      <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><HiOutlineUserCircle/> My Profile</Link>
                      <button onClick={handleLogout} className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><HiOutlineArrowRightOnRectangle/> Logout</button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link to="/login" className="py-2 px-4 font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors text-sm">Login</Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-gray-600">
              {isMobileMenuOpen ? <HiXMark /> : <HiBars3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-slate-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-gray-600"><HiOutlineHome/> Home</Link>
          {/* Learning Mobile Submenu */}
          <div className="">
            <details>
              <summary className="flex items-center gap-3 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-gray-600 cursor-pointer"><HiOutlineAcademicCap/> Learning</summary>
              <div className="ml-6 mt-1 space-y-1">
                <Link to="/learning" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">Learning</Link>
                <Link to="/games/pest-patrol" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">Game Mode</Link>
              </div>
            </details>
          </div>
          {/* Mission Mobile Submenu */}
          <div className="">
            <details>
              <summary className="flex items-center gap-3 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-gray-600 cursor-pointer"><HiOutlineBolt/> Mission</summary>
              <div className="ml-6 mt-1 space-y-1">
                <Link to="/mission/list" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">Mission List</Link>
                <Link to="/mission/leaderboard" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">Leaderboard</Link>
                <Link to="/mission/incentives" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">Incentives</Link>
                <Link to="/mission/Calculator" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">Calculator</Link>
              </div>
            </details>
          </div>
          <Link to="/progress" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-gray-600"><HiOutlineChartBar/> Progress</Link>
          <Link to="/community" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-gray-600"><HiOutlineUserGroup/> Community</Link>
          <div className="border-t border-gray-200 my-2"></div>
          {isLoggedIn ? (
            <>
              <Link to="/rewards" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-gray-600"><HiOutlineGift/> Rewards</Link>
              <Link to="/profile" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-gray-600"><HiOutlineUserCircle/> My Profile</Link>
              <button onClick={() => { handleLogout(); handleLinkClick(); }} className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-gray-600"><HiOutlineArrowRightOnRectangle/> Logout</button>
            </>
          ) : (
            <Link to="/login" onClick={handleLinkClick} className="block w-full text-left px-3 py-2 rounded-md font-medium bg-emerald-500 text-white text-center">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;