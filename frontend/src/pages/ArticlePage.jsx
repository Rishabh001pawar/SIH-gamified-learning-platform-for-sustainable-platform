// src/pages/ArticlePage.jsx
import React from 'react';

export default function ArticlePage({ title, imageUrl, content }) {
  return (
    <main className="bg-white font-sans pt-20"> {/* pt-20 navbar ke liye jagah chhodne ke liye */}
      <header 
        className="h-96 w-full bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold">{title}</h1>
        </div>
      </header>
      <div className="container mx-auto max-w-4xl py-16 px-6">
        <div className="prose lg:prose-xl text-farm-brown-base">
          {content}
        </div>
      </div>
    </main>
  );
}