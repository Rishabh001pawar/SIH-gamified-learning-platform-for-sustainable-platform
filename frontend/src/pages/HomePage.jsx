import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { HiOutlineLightBulb, HiOutlineChartPie, HiOutlineCog, HiArrowRight } from 'react-icons/hi2';
import field from '../assets/photo/field.jpg';
import field2 from '../assets/photo/field2.jpg';
import drone1 from '../assets/photo/drone1.jpg';
import irrigation1 from '../assets/photo/irrigation1.jpg';
import plants from '../assets/photo/plants.jpg';
import tractor1 from '../assets/photo/tractor1.jpg';
import fertilisation from '../assets/photo/fertilisation.jpg';


// --- STABLE IMAGES ---
const heroImage = field;
const droneImage = drone1;
const irrigationImage = irrigation1;
const tractorImage = tractor1;
const polyhouseImage = plants;
const fertilizerImage = fertilisation;
const mountainImage = field2;
// const desertImage = undefined; // desert.jpg does not exist

// --- Enhanced Feature Section Component ---
const FeatureSection = ({ imageUrl, title, description, imageSide = "left", linkTo }) => {
  const textOrderClass = imageSide === "left" ? "md:order-last" : "md:order-first";
  const textVariants = {
    hidden: { opacity: 0, x: imageSide === "left" ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <motion.div
      className="flex flex-col md:flex-row min-h-[70vh]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className="w-full md:w-1/2 bg-cover bg-center min-h-[50vh] md:min-h-full relative group"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />
      </div>
      <motion.div
        variants={textVariants}
        className={`w-full md:w-1/2 flex items-center justify-center p-12 md:p-16 ${textOrderClass} bg-gradient-to-br from-white to-gray-50`}
      >
        <div className="max-w-md">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{description}</p>
          <Link to={linkTo || "#"}>
            <button className="group font-bold text-green-700 border-2 border-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2">
              Read Article
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServiceCard = ({ icon, title, description, gradient, iconBg }) => (
  <motion.div
    className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer ${gradient}`}
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm" />
    <div className="relative p-8 text-left flex flex-col h-full">
      <div
        className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <div className="text-white text-2xl">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-700 flex-grow leading-relaxed">{description}</p>
      {/* Navigation buttons for ServiceCard */}
      {title === "Learning & Gaming Mode" ? (
        <div className="mt-6 flex gap-3">
          <Link to="/learning" className="flex items-center text-green-600 font-semibold group-hover:text-green-700 ">
            Learning
            <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <Link to="/games/pest-patrol" className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 ">
            Game Mode
            <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      ) : title === "Automation & Setup" ? (
        <div className="mt-6">
          <Link to="/techbox" className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700  ">
             TechBox
            <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      ) : title === "Agri-Tech Consulting" ? (
        <div className="mt-6 flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 transition-colors duration-300">
          <span>Learn More</span>
          <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      ) : (
        <div className="mt-6 flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">
          <span>Learn More</span>
          <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      )}
    </div>
    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
  </motion.div>
);

// --- MAIN HOMEPAGE COMPONENT ---
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-gray-50 font-sans overflow-x-hidden">
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white p-6 relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
        <div className="relative z-10 w-full max-w-screen-lg">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-white"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cultivating the Future
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to FarmQuest, where technology meets tradition to help you grow smarter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/signup">
              <button className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 mx-auto">
                Start Your journey
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="text-center py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-green-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent mb-6">
            The Next Generation of Farming is Here
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 my-8 mx-auto rounded-full"></div>
          <p className="max-w-4xl mx-auto text-xl text-gray-700 leading-relaxed">
            Explore the technologies shaping the future of farming around the world.
          </p>
        </motion.div>
      </section>

      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent mb-6">
              What We Provide
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 my-8 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Cutting-edge solutions for modern agriculture</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ServiceCard
              icon={<HiOutlineLightBulb />}
              title="Agri-Tech Consulting"
              description="Expert guidance to help you integrate the best technology for your specific farming needs and maximize your agricultural potential."
              gradient="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400"
              iconBg="bg-gradient-to-br from-yellow-500 to-orange-500"
            />
            <ServiceCard
              icon={<HiOutlineChartPie />}
             title="Learning & Gaming Mode"
description="Make farming education fun and interactive! Learn step by step with our guided lessons in Learning Mode or challenge yourself with quizzes, crop selection games, and simulations in Gaming Mode."
              gradient="bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400"
              iconBg="bg-gradient-to-br from-blue-500 to-purple-500"
            />
            <ServiceCard
              icon={<HiOutlineCog />}
              title="Automation & Setup"
              description="Full-service implementation of smart irrigation, drones, and other automated systems to revolutionize your farming operations."
              gradient="bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400"
              iconBg="bg-gradient-to-br from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* --- Enhanced Feature Sections --- */}
      <div className="bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
        <FeatureSection
          imageSide="right"
          imageUrl={droneImage}
          title="Precision From Drones"
          description="Utilize advanced drones for crop monitoring, health analysis, and targeted spraying to improve yields and reduce resource waste."
          linkTo="/articles/drones"
        />
      </div>
      <div className="bg-gradient-to-br from-white to-green-50 overflow-x-hidden">
        <FeatureSection
          imageSide="left"
          imageUrl={irrigationImage}
          title="Smart Irrigation"
          description="Implement intelligent drip irrigation systems that deliver water directly to plant roots, conserving precious water resources."
          linkTo="/articles/irrigation"
        />
      </div>
      <div className="bg-gradient-to-br from-green-50 to-blue-50 overflow-x-hidden">
        <FeatureSection
          imageSide="right"
          imageUrl={tractorImage}
          title="Modern Tractor Power"
          description="Today's tractors use GPS and automation to cultivate larger areas with unparalleled precision and efficiency."
          linkTo="/articles/tractors"
        />
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 overflow-x-hidden">
        <FeatureSection
          imageSide="left"
          imageUrl={polyhouseImage}
          title="Polyhouse Farming"
          description="Create a controlled environment to protect crops from weather extremes and extend the growing season year-round."
          linkTo="/articles/polyhouse"
        />
      </div>
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 overflow-x-hidden">
        <FeatureSection
          imageSide="right"
          imageUrl={fertilizerImage}
          title="Optimized Fertilization"
          description="Use data-driven techniques to apply the precise amount of nutrients, reducing waste, cost, and environmental impact."
          linkTo="/articles/fertilizers"
        />
      </div>
      <div className="bg-gradient-to-br from-pink-50 to-orange-50 overflow-x-hidden">
        <FeatureSection
          imageSide="left"
          imageUrl={mountainImage}
          title="Mountain Terrain Farming"
          description="Terrace farming on slopes maximizes land use and prevents soil erosion in challenging hilly regions."
          linkTo="/articles/mountain-farming"
        />
      </div>
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 overflow-x-hidden">
        {/* Desert Agriculture section removed due to missing image */}
      </div>

      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 py-24 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-6xl">🚜</div>
            </div>
            <h2 className="text-5xl font-extrabold mb-6">Ready to Grow Smarter?</h2>
            <p className="max-w-3xl mx-auto text-xl text-white/90 mb-10 leading-relaxed">
              Join our community of forward-thinking farmers. Start your journey with our interactive missions and gain
              valuable skills for the future of agriculture.
            </p>
            <Link to="/signup">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-12 py-5 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl hover:shadow-yellow-400/25 flex items-center gap-3 mx-auto">
                Create Your Account
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join FarmQuest</h2>
            <p className="mb-8 text-gray-700 leading-relaxed">
              Sign up to get access to our learning platform, track your progress, and connect with other modern
              farmers.
            </p>
            <Link to="/signup">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-full py-4 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Create Account
              </button>
            </Link>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 w-full py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

