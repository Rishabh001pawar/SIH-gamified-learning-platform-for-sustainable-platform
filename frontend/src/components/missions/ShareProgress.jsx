import React, { useState } from "react";

export default function ShareProgress({ onShare }) {
  const [update, setUpdate] = useState("");

  function handleShare(e) {
    e.preventDefault();
    if (update) {
      onShare(update);
      setUpdate("");
    }
  }

  return (
    <form className="bg-white rounded-lg shadow p-4 mb-8" onSubmit={handleShare}>
      <h2 className="text-xl font-bold mb-2">Share Progress</h2>
      <textarea
        className="border rounded p-2 w-full mb-2"
        rows={2}
        placeholder="Describe your recent achievement or update..."
        value={update}
        onChange={e => setUpdate(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-bold">Share</button>
    </form>
  );
}
