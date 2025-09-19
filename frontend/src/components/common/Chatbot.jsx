// // src/components/Chatbox.jsx
// import React, { useState } from 'react';
// import { HiOutlineChatBubbleOvalLeftEllipsis, HiXMark, HiPaperAirplane } from 'react-icons/hi2';

// export default function Chatbox() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { from: 'ai', text: 'Hello! How can I help you with your farming questions today?' }
//   ]);
//   const [input, setInput] = useState('');

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { from: 'user', text: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');

//     // --- GEMINI API CALL YAHAN AAYEGA ---
//     // Abhi ke liye, hum ek fake reply use kar rahe hain.
//     // Aap yahan apni backend API ko call karenge jo Gemini se baat karegi.
//     setTimeout(() => {
//       const aiResponse = { from: 'ai', text: `This is a simulated response for: "${userMessage.text}". Replace this with a real Gemini API call.` };
//       setMessages(prev => [...prev, aiResponse]);
//     }, 1000);
//     // ------------------------------------
//   };

//   return (
//     <>
//       {/* Chat Bubble Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button 
//           onClick={() => setIsOpen(!isOpen)} 
//           className="bg-farm-green-base text-white rounded-full p-4 shadow-lg hover:bg-farm-green-dark transition-all transform hover:scale-110"
//         >
//           {isOpen ? <HiXMark size={28} /> : <HiOutlineChatBubbleOvalLeftEllipsis size={28} />}
//         </button>
//       </div>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-xl shadow-2xl flex flex-col z-50">
//           <header className="bg-farm-green-dark text-white p-4 rounded-t-xl">
//             <h3 className="font-bold text-lg">FarmQuest AI Assistant</h3>
//           </header>
//           <main className="flex-1 p-4 overflow-y-auto bg-farm-bg">
//             <div className="space-y-4">
//               {messages.map((msg, index) => (
//                 <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
//                   <p className={`max-w-xs p-3 rounded-2xl ${msg.from === 'user' ? 'bg-farm-green-base text-white rounded-br-none' : 'bg-slate-200 text-farm-brown-dark rounded-bl-none'}`}>
//                     {msg.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </main>
//           <footer className="p-4 border-t bg-white">
//             <form onSubmit={handleSendMessage} className="flex gap-2">
//               <input 
//                 type="text" 
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask anything about farming..."
//                 className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-farm-green-base"
//               />
//               <button type="submit" className="bg-farm-green-base text-white rounded-full p-3 hover:bg-farm-green-dark transition-colors">
//                 <HiPaperAirplane size={24} />
//               </button>
//             </form>
//           </footer>
//         </div>
//       )}
//     </>
//   );
// }