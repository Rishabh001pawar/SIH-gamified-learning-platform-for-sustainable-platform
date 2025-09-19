import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChatBubbleOvalLeftEllipsis, HiXMark, HiPaperAirplane } from 'react-icons/hi2';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hello! How can I help you with your farming questions today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      // --- GEMINI API CALL IMPLEMENTED ---
      const apiKey = "AIzaSyCH9ukhasx_2UB1P3LaDgNVIP74cX_K3GQ"; // For Vite: API key is handled by the environment
      // If using Create React App, use: const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ parts: [{ text: currentInput }] }],
        systemInstruction: {
          parts: [{ text: "You are FarmQuest AI, a helpful and knowledgeable assistant specializing in all aspects of farming, agriculture, and ag-tech. Provide concise, accurate, and practical answers." }]
        },
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();
      const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (aiText) {
        const aiResponse = { from: 'ai', text: aiText };
        setMessages(prev => [...prev, aiResponse]);
      } else {
        const errorResponse = { from: 'ai', text: "Sorry, I couldn't get a response. Please try again." };
        setMessages(prev => [...prev, errorResponse]);
      }

    } catch {
      const errorResponse = { from: 'ai', text: "Sorry, something went wrong. Please check the console for details." };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }

  };

  // Clear chat when closing
  const handleToggleChat = () => {
    if (!isOpen) {
      setMessages([{ from: 'ai', text: 'Hello! How can I help you with your farming questions today?' }]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleToggleChat} 
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
          aria-label="Toggle Chat"
        >
          <AnimatePresence>
            {isOpen ? <HiXMark size={28} /> : <HiOutlineChatBubbleOvalLeftEllipsis size={28} />}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-xl shadow-2xl flex flex-col z-50 origin-bottom-right"
          >
            <header className="bg-slate-800 text-white p-4 rounded-t-xl">
              <h3 className="font-bold text-lg">FarmQuest AI Assistant</h3>
            </header>
            <main className="flex-1 p-4 overflow-y-auto bg-slate-50">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <p className={`max-w-xs p-3 rounded-2xl ${msg.from === 'user' ? 'bg-green-500 text-white rounded-br-none' : 'bg-slate-200 text-slate-800 rounded-bl-none'}`}>
                      {msg.text}
                    </p>
                  </div>
                ))}
                {isLoading && <div className="flex justify-start"><p className="p-3 rounded-2xl bg-slate-200 text-slate-800 rounded-bl-none">Thinking...</p></div>}
              </div>
            </main>
            <footer className="p-4 border-t bg-white">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about farming..."
                  className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button type="submit" className="bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition-colors disabled:bg-slate-400" disabled={isLoading}>
                  <HiPaperAirplane size={24} />
                </button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

