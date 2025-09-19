import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './App.jsx';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppProvider } from './context/AppContext.jsx'; // Import the provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the entire app in AppProvider */}
    <AppProvider>
      <ParallaxProvider>
        <AppWrapper />
      </ParallaxProvider>
    </AppProvider>
  </React.StrictMode>,
);