const getCommunityProgress = () => {
  const data = localStorage.getItem("communityProgress");
  return data ? JSON.parse(data) : [];
};
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineTrophy,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineQuestionMarkCircle,
  HiOutlinePencil,
  HiOutlineCamera,
  HiOutlineHeart,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineShare,
  HiArrowUp,
} from "react-icons/hi2";
  


const qaData = [
  {
    id: 1,
    question:
      "What is the best way to deal with leaf curl virus in chili plants?",
    tags: ["pests", "disease"],
  },
  {
    id: 2,
    question: "Can I use drip irrigation for my mango orchard?",
    tags: ["irrigation", "orchard"],
    
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1 },
};

// --- Tab Components ---

const FeedTab = () => {
  const [communityProgress, setCommunityProgress] = useState(getCommunityProgress());
  const [newActivity, setNewActivity] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [panchayat, setPanchayat] = useState("");
  const [progressValue, setProgressValue] = useState("");
  const [likes, setLikes] = useState({});

  React.useEffect(() => {
    const updateProgress = () => setCommunityProgress(getCommunityProgress());
    window.addEventListener("storage", updateProgress);
    return () => window.removeEventListener("storage", updateProgress);
  }, []);

  // Manual progress logging handler
  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!name.trim() || !location.trim() || !panchayat.trim() || !progressValue.trim()) return;
    let mediaUrl = "";
    if (mediaFile) {
      mediaUrl = URL.createObjectURL(mediaFile);
    }
    const entry = {
      name,
      location,
      panchayat,
      progress: progressValue,
      activity: newActivity,
      mediaUrl,
      mediaType
    };
    const updated = [entry, ...communityProgress];
    localStorage.setItem("communityProgress", JSON.stringify(updated));
    setCommunityProgress(updated);
    setName("");
    setLocation("");
    setPanchayat("");
    setProgressValue("");
    setNewActivity("");
    setMediaFile(null);
    setMediaType("");
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Manual Progress Logging Form */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-4 rounded-xl shadow-sm"
      >
        <form onSubmit={handleAddActivity}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name"
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Location"
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              value={panchayat}
              onChange={e => setPanchayat(e.target.value)}
              placeholder="Panchayat"
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              value={progressValue}
              onChange={e => setProgressValue(e.target.value)}
              placeholder="Progress (e.g., 70%)"
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="flex gap-4 items-center mb-4">
            <label className="flex flex-col items-center cursor-pointer">
              <HiOutlineCamera className="h-6 w-6 text-slate-500 hover:text-emerald-600" />
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={e => {
                  if (e.target.files && e.target.files[0]) {
                    setMediaFile(e.target.files[0]);
                    setMediaType(e.target.files[0].type.startsWith("image") ? "image" : "video");
                  }
                }}
              />
              <span className="text-xs text-slate-400">Photo/Video</span>
            </label>
            {mediaFile && (
              <span className="text-xs text-emerald-700">{mediaFile.name}</span>
            )}
          </div>
          <textarea
            value={newActivity}
            onChange={e => setNewActivity(e.target.value)}
            className="w-full p-3 border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-slate-50 mb-4"
            placeholder="Describe your achievement or story..."
            rows="3"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 shadow-sm w-full"
          >
            Post
          </motion.button>
        </form>
      </motion.div>
      {/* Show shared progress from MissionLeaderboard */}
      {communityProgress.length === 0 ? (
        <div className="text-gray-500">No progress shared from leaderboard yet.</div>
      ) : (
        <div className="flex flex-col items-center gap-8">
          {communityProgress.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 max-w-md w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-lg text-emerald-700">{item.name}</span>
                <span className="text-xs text-slate-500">{item.location}</span>
                <span className="text-xs text-slate-400">{item.panchayat}</span>
              </div>
              {item.mediaUrl && item.mediaType === "image" ? (
                <div className="w-full">
                  <img
                    src={item.mediaUrl}
                    alt={item.activity ? item.activity : "progress-media"}
                    className="rounded-xl border w-full max-h-[400px] object-cover"
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.insertAdjacentHTML('beforeend', '<div class="text-red-500 text-sm">Image could not be loaded.</div>'); }}
                  />
                </div>
              ) : item.mediaType === "image" ? (
                <div className="w-full text-red-500 text-sm">Image not available.</div>
              ) : null}
              {item.mediaUrl && item.mediaType === "video" && (
                <div className="w-full">
                  <video src={item.mediaUrl} controls className="rounded-xl border w-full max-h-[400px] object-cover" />
                </div>
              )}
              <div className="text-base text-slate-700 mb-1">Progress: <span className="font-semibold">{item.progress}</span></div>
              {item.activity && (
                <div className="text-sm text-slate-600 mb-2">{item.activity}</div>
              )}
              <div className="flex items-center gap-2 mt-auto">
                <button
                  onClick={() => setLikes(prev => ({ ...prev, [idx]: (prev?.[idx] || 0) + 1 }))}
                  className="text-pink-600 hover:text-pink-800 text-lg px-2 py-1 rounded-full border border-pink-200 bg-pink-50"
                  title="Like this post"
                >
                  ❤️
                </button>
                <span className="ml-1 font-bold text-pink-700">{likes?.[idx] || 0}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const QATab = () => {
  const [questions, setQuestions] = useState(qaData);
  const [newQuestion, setNewQuestion] = useState("");
  const [newTags, setNewTags] = useState("");
  const [answerText, setAnswerText] = useState({});

  // Add a new question
  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    setQuestions([
      {
        id: Date.now(),
        question: newQuestion,
        tags: newTags.split(",").map(t => t.trim()).filter(Boolean),
        answers: [],
        upvotes: 0,
      },
      ...questions,
    ]);
    setNewQuestion("");
    setNewTags("");
  };

  // Add an answer to a question
  const handleAnswer = (qid) => {
    if (!answerText[qid] || !answerText[qid].trim()) return;
    setQuestions(questions.map(q =>
      q.id === qid ? { ...q, answers: [...(q.answers || []), answerText[qid]] } : q
    ));
    setAnswerText({ ...answerText, [qid]: "" });
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <form onSubmit={handleAskQuestion} className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          value={newQuestion}
          onChange={e => setNewQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="border px-4 py-2 rounded-lg shadow focus:ring-emerald-500 focus:outline-none"
        />
        <input
          type="text"
          value={newTags}
          onChange={e => setNewTags(e.target.value)}
          placeholder="Tags (comma separated)"
          className="border px-4 py-2 rounded-lg shadow focus:ring-emerald-500 focus:outline-none"
        />
        <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 shadow">Ask Question</button>
      </form>
      <div className="space-y-4">
        {questions.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="bg-white p-5 rounded-xl shadow-sm flex flex-col gap-3 transition-all hover:shadow-lg hover:border-emerald-500 border-l-4 border-transparent"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="font-bold text-slate-800 text-lg">{item.question}</span>
              <span className="text-xs text-slate-500">Upvotes: {item.upvotes}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Answers:</span>
              <ul className="list-disc ml-6 mt-1">
                  {(Array.isArray(item.answers) && item.answers.length === 0) && <li className="text-slate-400">No answers yet.</li>}
                  {(Array.isArray(item.answers) ? item.answers : []).map((ans, i) => (
                  <li key={i} className="text-slate-700">{ans}</li>
                ))}
              </ul>
            </div>
            <form onSubmit={e => { e.preventDefault(); handleAnswer(item.id); }} className="flex gap-2 mt-2">
              <input
                type="text"
                value={answerText[item.id] || ""}
                onChange={e => setAnswerText({ ...answerText, [item.id]: e.target.value })}
                placeholder="Write your answer..."
                className="border px-3 py-1 rounded flex-grow shadow focus:ring-emerald-500 focus:outline-none"
              />
              <button type="submit" className="bg-emerald-500 text-white px-4 py-1 rounded shadow hover:bg-emerald-700">Answer</button>
            </form>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Main Community Page Component ---
// --- Group Chat Demo Components ---
const GroupChatTab = () => {
  const [selectedMsgIdx, setSelectedMsgIdx] = useState(null);
  // Confirmation state
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmPayload, setConfirmPayload] = useState(null);

  // Delete a message for yourself (only 'You')
  const handleDeleteOwnMessage = (msgIdx) => {
    setConfirmAction('deleteOwnMsg');
    setConfirmPayload(msgIdx);
  };
  const doDeleteOwnMessage = (msgIdx) => {
    if (selectedGroup === null) return;
    setGroups(groups.map((g, idx) =>
      idx === selectedGroup
        ? { ...g, chat: g.chat.filter((_, i) => i !== msgIdx || g.chat[msgIdx].sender !== 'You') }
        : g
    ));
    setConfirmAction(null);
    setConfirmPayload(null);
  };

  // Delete a message for all users (any message)
  const handleDeleteForAll = (msgIdx) => {
    setConfirmAction('deleteAllMsg');
    setConfirmPayload(msgIdx);
  };
  const doDeleteForAll = (msgIdx) => {
    if (selectedGroup === null) return;
    setGroups(groups.map((g, idx) =>
      idx === selectedGroup
        ? { ...g, chat: g.chat.filter((_, i) => i !== msgIdx) }
        : g
    ));
    setConfirmAction(null);
    setConfirmPayload(null);
  };

  // Remove group (except Community)
  const handleRemoveGroup = (idx) => {
    if (groups[idx].name === "Community") return;
    setConfirmAction('deleteGroup');
    setConfirmPayload(idx);
  };
  const doRemoveGroup = (idx) => {
    setGroups(groups.filter((_, i) => i !== idx));
    if (selectedGroup === idx) setSelectedGroup(null);
    setConfirmAction(null);
    setConfirmPayload(null);
  };

  // Leave Community group
  const handleLeaveCommunity = () => {
    setConfirmAction('leaveCommunity');
  };
  const doLeaveCommunity = () => {
    if (communityIdx === -1) return;
    setGroups(groups.map((g, idx) =>
      idx === communityIdx ? { ...g, members: g.members.filter(m => m !== "You") } : g
    ));
    setConfirmAction(null);
  };

  const [groups, setGroups] = useState(() => {
    const saved = localStorage.getItem("communityGroups");
    let initialGroups = saved ? JSON.parse(saved) : [];
    // Ensure a default public group exists
    if (!initialGroups.some(g => g.name === "Community")) {
      initialGroups = [{ name: "Community", members: [], chat: [] }, ...initialGroups];
    }
    return initialGroups;
  });
  const [groupName, setGroupName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [chatMessage, setChatMessage] = useState("");

  // Save groups to localStorage
  useEffect(() => {
    localStorage.setItem("communityGroups", JSON.stringify(groups));
  }, [groups]);

  // Create new group
  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (!groupName.trim()) return;
    // Prevent duplicate group names
    if (groups.some(g => g.name.toLowerCase() === groupName.trim().toLowerCase())) {
      setGroupName("");
      return;
    }
    setGroups([{ name: groupName.trim(), members: [], chat: [] }, ...groups]);
    setGroupName("");
  };

  // Add member to group
  const handleAddMember = (e) => {
    e.preventDefault();
    if (!memberName.trim() || selectedGroup === null) return;
    setGroups(groups.map((g, idx) =>
      idx === selectedGroup ? { ...g, members: [...g.members, memberName] } : g
    ));
    setMemberName("");
  };

  // Send chat message with timestamp and sender
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim() || selectedGroup === null) return;
    const newMsg = {
      text: chatMessage,
      sender: "You",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setGroups(groups.map((g, idx) =>
      idx === selectedGroup ? { ...g, chat: [...g.chat, newMsg] } : g
    ));
    setChatMessage("");
    setTimeout(() => {
      const chatBox = document.getElementById('chat-box');
      if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    }, 100);
  };

  // Find the public Community group
  const communityIdx = groups.findIndex(g => g.name === "Community");
  const isCommunityMember = communityIdx !== -1 && groups[communityIdx].members.includes("You");

  // Handler to join Community group
  const handleJoinCommunity = () => {
    if (communityIdx === -1) return;
    if (!isCommunityMember) {
      setGroups(groups.map((g, idx) =>
        idx === communityIdx ? { ...g, members: [...g.members, "You"] } : g
      ));
    }
    setSelectedGroup(communityIdx);
  };

  // Confirm dialog component
  const ConfirmDialog = ({ message, onConfirm, onCancel }) => (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 min-w-[300px] text-center">
        <div className="mb-4 text-lg font-semibold text-slate-800">{message}</div>
        <div className="flex gap-4 justify-center">
          <button onClick={onConfirm} className="bg-red-600 text-white px-4 py-2 rounded font-bold shadow hover:bg-red-700">Yes</button>
          <button onClick={onCancel} className="bg-slate-200 text-slate-700 px-4 py-2 rounded font-bold shadow hover:bg-slate-300">No</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Confirmation Dialogs */}
      {confirmAction === 'deleteGroup' && (
        <ConfirmDialog
          message="Are you sure you want to delete this group?"
          onConfirm={() => doRemoveGroup(confirmPayload)}
          onCancel={() => { setConfirmAction(null); setConfirmPayload(null); }}
        />
      )}
      {confirmAction === 'leaveCommunity' && (
        <ConfirmDialog
          message="Are you sure you want to leave the Community group?"
          onConfirm={doLeaveCommunity}
          onCancel={() => { setConfirmAction(null); setConfirmPayload(null); }}
        />
      )}
      {confirmAction === 'deleteOwnMsg' && (
        <ConfirmDialog
          message="Are you sure you want to delete this message for yourself?"
          onConfirm={() => doDeleteOwnMessage(confirmPayload)}
          onCancel={() => { setConfirmAction(null); setConfirmPayload(null); }}
        />
      )}
      {confirmAction === 'deleteAllMsg' && (
        <ConfirmDialog
          message="Are you sure you want to delete this message for everyone?"
          onConfirm={() => doDeleteForAll(confirmPayload)}
          onCancel={() => { setConfirmAction(null); setConfirmPayload(null); }}
        />
      )}
      {/* Centered Community group card */}
      <div className="flex justify-center mb-8">
        <div className="max-w-xl w-full bg-gradient-to-br from-emerald-400 to-teal-300 rounded-2xl shadow-lg p-6 text-center border-4 border-emerald-600">
          <h2 className="text-3xl font-extrabold text-white mb-2">FarmQuest Community</h2>
          <p className="text-white/90 mb-4">This is the main public group for all FarmQuest users. Anyone can join, chat, and connect here!</p>
          <div className="flex justify-center mb-2">
            <span className="bg-white/80 text-emerald-700 font-bold px-4 py-1 rounded-full shadow">{groups[communityIdx]?.members.length || 0} members</span>
          </div>
          {!isCommunityMember ? (
            <button onClick={handleJoinCommunity} className="bg-white text-emerald-700 font-bold px-6 py-2 rounded-full shadow hover:bg-emerald-100 transition">Join Community</button>
          ) : (
            <button onClick={handleLeaveCommunity} className="bg-red-600 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-red-700 transition">Leave Community</button>
          )}
        </div>
      </div>
      {/* Group creation and list */}
      <form onSubmit={handleCreateGroup} className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          value={groupName}
          onChange={e => setGroupName(e.target.value)}
          placeholder="New Group Name"
          className="border px-3 py-2 rounded shadow focus:ring-emerald-500 focus:outline-none"
        />
        <button type="submit" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded shadow hover:scale-105 transition">Create Group</button>
      </form>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 w-full">
          <h3 className="font-bold mb-2 text-lg text-emerald-700">Groups</h3>
          <ul className="space-y-3">
            {groups.length === 0 && <li className="text-slate-400">No groups yet.</li>}
            {groups.map((g, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <button
                  className={`w-full text-left px-4 py-3 rounded-xl shadow flex items-center gap-2 border-2 transition-all duration-200 ${selectedGroup === idx ? "bg-emerald-100 border-emerald-400" : "bg-white border-slate-200 hover:border-emerald-300"}`}
                  onClick={() => setSelectedGroup(idx)}
                >
                  <span className="font-bold text-emerald-700 text-base">{g.name}</span>
                  <span className="ml-auto text-xs text-slate-500">{g.members.length} members</span>
                </button>
                {g.name !== "Community" && (
                  <button onClick={() => handleRemoveGroup(idx)} className="bg-red-500 text-white px-2 py-1 rounded shadow hover:bg-red-700 transition text-xs">Delete</button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/3 w-full">
          {selectedGroup !== null && groups[selectedGroup] && (
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-emerald-700 mb-2">{groups[selectedGroup].name}</h3>
              <form onSubmit={handleAddMember} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={memberName}
                  onChange={e => setMemberName(e.target.value)}
                  placeholder="Add Member"
                  className="border px-2 py-1 rounded shadow focus:ring-emerald-500 focus:outline-none"
                />
                <button type="submit" className="bg-emerald-500 text-white px-3 py-1 rounded shadow hover:scale-105 transition">Add</button>
              </form>
              <div>
                <span className="font-semibold">Members:</span>
                <ul className="list-disc ml-6">
                  {groups[selectedGroup].members.length === 0 && <li className="text-slate-400">No members yet.</li>}
                  {groups[selectedGroup].members.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold">Chat:</span>
                <div id="chat-box" className="border rounded-xl p-3 h-64 overflow-y-auto bg-white mb-2 shadow flex flex-col gap-2">
                  {groups[selectedGroup].chat.length === 0 && <div className="text-slate-400">No messages yet.</div>}
                  {groups[selectedGroup].chat.map((msg, i) => (
                    <div key={i} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                      <div className="flex items-center gap-2 max-w-[80%]">
                        <div
                          className={`px-4 py-2 rounded-2xl shadow text-sm flex flex-col relative cursor-pointer ${msg.sender === 'You' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-800'}`}
                          onClick={() => msg.sender === 'You' ? setSelectedMsgIdx(i) : null}
                          onBlur={() => setSelectedMsgIdx(null)}
                          tabIndex={msg.sender === 'You' ? 0 : -1}
                        >
                          <span>{msg.text}</span>
                          <span className="text-xs text-right mt-1 opacity-70">{msg.time}</span>
                          {msg.sender === 'You' && selectedMsgIdx === i && (
                            <div className="absolute top-1 right-1 flex flex-col gap-1 z-10">
                              <button
                                title="Delete for me"
                                onClick={() => { handleDeleteOwnMessage(i); setSelectedMsgIdx(null); }}
                                className="bg-white text-red-500 px-2 py-1 rounded text-xs shadow hover:bg-red-100"
                              >Delete for me</button>
                              <button
                                title="Delete for all"
                                onClick={() => { handleDeleteForAll(i); setSelectedMsgIdx(null); }}
                                className="bg-white text-gray-700 px-2 py-1 rounded text-xs shadow hover:bg-red-200"
                              >Delete for all</button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendMessage} className="flex gap-2 items-center bg-white rounded-xl shadow px-3 py-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={e => setChatMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="border px-3 py-2 rounded-xl flex-grow shadow focus:ring-emerald-500 focus:outline-none"
                  />
                  <button type="submit" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition font-bold">Send</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [loading, setLoading] = useState(false); // Example loading state
  const tabs = [
    { id: "feed", label: "Feed", icon: HiOutlineChatBubbleOvalLeftEllipsis },
    { id: "qa", label: "Q&A", icon: HiOutlineQuestionMarkCircle },
    { id: "groups", label: "Groups", icon: HiOutlineChatBubbleBottomCenterText },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, [activeTab]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full flex justify-center items-center flex-col py-10 z-10 bg-gradient-to-br from-emerald-500 to-teal-600"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">Community Hub</h1>
        <p className="text-emerald-100 text-lg mt-2 max-w-2xl mx-auto">
          Compete, share, and learn with fellow farmers.
        </p>
      </motion.div>
      <div className="w-full max-w-5xl mx-auto">
        <div className="min-h-screen bg-slate-50" role="main" aria-label="Community Page">
          {/* Gradient Header with accessibility improvements */}
          <div className="relative text-white py px-4 sm:px-6 lg:px-8 text-center overflow-hidden" aria-label="Community Hub Header">
            <div className="absolute top-0 left-0 w-full h-full bg-black/20" aria-hidden="true"></div>
            {/* Decorative Shapes */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full filter blur-xl" aria-hidden="true"></div>
            <div className="absolute -bottom-12 -right-10 w-48 h-48 bg-white/10 rounded-full filter blur-2xl" aria-hidden="true"></div>
            {/* Animated Title */}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
            {/* Tabs with aria-label */}
            <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide" aria-label="Community Tabs">
              <div className="bg-white/80 backdrop-blur-md p-1.5 !z-[50] rounded-full flex space-x-2 shadow-lg min-w-[320px] md:min-w-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={activeTab === tab.id}
                    aria-label={tab.label}
                    className={`relative flex-1 py-2.5 px-6 rounded-full text-sm font-semibold transition capitalize whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-emerald-700" : "text-slate-600 hover:text-black/60"
                    }`}
                    style={{ minWidth: "100px" }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-emerald-300 rounded-full"
                        style={{ borderRadius: 9999 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <tab.icon /> {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Loading State Example */}
            {loading ? (
              <div className="flex justify-center items-center py-12" aria-live="polite">
                <span className="text-emerald-600 text-lg font-semibold">Loading...</span>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Render tab content */}
                  {activeTab === "feed" && <FeedTab />}
                  {activeTab === "qa" && <QATab />}
                  {activeTab === "groups" && <GroupChatTab />}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
