import React, { useState, useMemo } from 'react';
import { HiMagnifyingGlass, HiOutlinePlayCircle, HiOutlineBookOpen } from 'react-icons/hi2';
import drone2 from '../assets/photo/drone2.jpg';
import poly1 from '../assets/photo/poly1.jpg';
import soil from '../assets/photo/soil.jpg';
import crop from '../assets/photo/crop.jpg';
import organic from '../assets/photo/organic.jpg';
import tractor from '../assets/photo/tractor.avif';

const droneImage = drone2;
const polyhouseImage = poly1;
const soilImage = soil;
const cropImage = crop;
const organicImage = organic;
const tractorImage = tractor;

// --- Dummy Data for Videos and Articles ---
const learningContent = [
  { id: 1, type: 'video', category: 'Irrigation', title: 'Mastering Drip Irrigation: A Step-by-Step Guide', duration: '2:35 min', imageUrl: cropImage, videoUrl: 'https://youtu.be/2dXUxMqxL0w' },
  { id: 2, type: 'article', category: 'Technology', title: 'How Drones Are Revolutionizing Modern Farming', readTime: '8 min read', imageUrl: droneImage },
  { id: 3, type: 'article', category: 'Soil Health', title: 'The Ultimate Guide to Composting for Rich Soil', readTime: '15 min read', imageUrl: soilImage },
  { id: 4, type: 'video', category: 'Pest Control', title: 'Identifying and Managing Common Pests Organically', duration: '18:20 min', imageUrl: organicImage},
  { id: 5, type: 'article', category: 'Machinery', title: 'Calibrating Your Tractor\'s GPS for Precision Planting', readTime: '10 min read', imageUrl: tractorImage },
  { id: 6, type: 'video', category: 'Advanced Farming', title: 'Introduction to Polyhouse Farming Techniques', duration: '22:10 min', imageUrl: polyhouseImage },
];

const categories = ['All', 'Irrigation', 'Technology', 'Soil Health', 'Pest Control', 'Machinery', 'Advanced Farming'];

// --- Reusable Content Card Component ---
const ContentCard = ({ item, onClick }) => {
  const isVideo = item.type === 'video';
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer" onClick={() => onClick(item)}>
      <div className="relative">
        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <HiOutlinePlayCircle className="h-16 w-16 text-white/80" />
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold uppercase text-emerald-600">{item.category}</p>
        <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3 truncate">{item.title}</h3>
        <div className="text-sm text-slate-500 flex items-center gap-2">
          {isVideo ? <HiOutlinePlayCircle className="h-5 w-5" /> : <HiOutlineBookOpen className="h-5 w-5" />}
          <span>{isVideo ? item.duration : item.readTime}</span>
        </div>
      </div>
    </div>
  );
};


// --- Main Learning Page Component ---
const LearningPage = () => {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'videos', 'articles'
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContent, setSelectedContent] = useState(null);

  const filteredContent = useMemo(() => {
    return learningContent
      .filter(item => activeTab === 'all' || item.type === activeTab.slice(0, -1))
      .filter(item => activeCategory === 'All' || item.category === activeCategory)
      .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [activeTab, activeCategory, searchTerm]);

  const handleCardClick = (item) => {
    setSelectedContent(item);
  };

  const handleCloseModal = () => {
    setSelectedContent(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Knowledge Hub</h1>
        <p className="text-emerald-100 text-lg mt-2">Your center for learning modern farming techniques.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16">
        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="relative w-full">
            <HiMagnifyingGlass className="absolute top-1/2 left-4 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for a topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-100 border-transparent rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-semibold rounded-full ${activeTab==='all' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'}`}>All</button>
            <button onClick={() => setActiveTab('videos')} className={`px-4 py-2 text-sm font-semibold rounded-full ${activeTab==='videos' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'}`}>Videos</button>
            <button onClick={() => setActiveTab('articles')} className={`px-4 py-2 text-sm font-semibold rounded-full ${activeTab==='articles' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'}`}>Articles</button>
          </div>
        </div>
        
        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${activeCategory === category ? 'bg-emerald-600 text-white shadow' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        {filteredContent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map(item => <ContentCard key={item.id} item={item} onClick={handleCardClick} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No content found. Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Modal for Content Details */}
        {selectedContent && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl">&times;</button>
              <img src={selectedContent.imageUrl} alt={selectedContent.title} className="w-full h-64 object-cover rounded-xl mb-6" />
              <h2 className="text-2xl font-bold mb-2 text-emerald-700">{selectedContent.title}</h2>
              <p className="text-sm font-semibold uppercase text-emerald-600 mb-2">{selectedContent.category}</p>
              {selectedContent.type === 'video' ? (
                <div className="mb-4">
                  {selectedContent.videoUrl ? (
                    <div className="w-full h-64 mb-2 flex items-center justify-center">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${selectedContent.videoUrl.split('youtu.be/')[1]}`}
                        title={selectedContent.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-xl"
                      ></iframe>
                    </div>
                  ) : (
                    <div className="bg-black text-white rounded-lg flex items-center justify-center h-40 mb-2">
                      <HiOutlinePlayCircle className="h-16 w-16" />
                    </div>
                  )}
                  <p className="text-slate-600">Duration: {selectedContent.duration}</p>
                </div>
              ) : (
                <div className="mb-4">
                  <p className="text-slate-600">Read Time: {selectedContent.readTime}</p>
                  <button
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition"
                    onClick={() => {
                      // Map article title to new learning-articles routes
                      const titleToRoute = {
                        'How Drones Are Revolutionizing Modern Farming': '/learning-articles/drones',
                        'The Ultimate Guide to Composting for Rich Soil': '/learning-articles/composting',
                        "Calibrating Your Tractor's GPS for Precision Planting": '/learning-articles/tractors',
                      };
                      let route = titleToRoute[selectedContent.title];
                      if (!route) {
                        // Fallback: use category or id if needed
                        if (selectedContent.category === 'Technology') route = '/learning-articles/drones';
                        else if (selectedContent.category === 'Soil Health') route = '/learning-articles/composting';
                        else if (selectedContent.category === 'Machinery') route = '/learning-articles/tractors';
                        else route = '/learning-articles/drones';
                      }
                      window.location.assign(route);
                    }}
                  >Read Full Article</button>
                </div>
              )}
              {/* Add more details here if needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPage;