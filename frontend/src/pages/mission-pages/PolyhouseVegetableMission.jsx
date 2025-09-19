import React from "react";

export default function PolyhouseVegetableMission() {
  const [image, setImage] = React.useState(null);
  const [video, setVideo] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!image || !video) return;
    setSubmitted(true);
    setTimeout(() => {
      window.location.assign('/mission/list');
    }, 1200);
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Polyhouse Vegetable Cultivation</h1>
      <img src="https://images.unsplash.com/photo-1590393278948-00511e4836e5?q=80&w=2070&auto=format&fit=crop" alt="Polyhouse" className="rounded-xl mb-6 w-full h-64 object-cover" />
      <p className="mb-4">Master the art of growing vegetables in a controlled polyhouse environment for year-round production.</p>
      <h2 className="text-2xl font-bold mb-2 mt-6">Mission Steps</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Prepare the polyhouse structure</li>
        <li>Select suitable vegetable crops</li>
        <li>Plant and manage crops</li>
        <li>Monitor climate and irrigation</li>
      </ul>
      <div className="mt-8 text-emerald-700 font-bold">Complete this mission to earn 200 points!</div>

      <form className="mt-8 bg-slate-100 p-6 rounded-xl" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Upload Image:</label>
          <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
          {image && <span className="text-xs text-emerald-700 ml-2">{image.name}</span>}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Upload Video:</label>
          <input type="file" accept="video/*" onChange={e => setVideo(e.target.files[0])} />
          {video && <span className="text-xs text-emerald-700 ml-2">{video.name}</span>}
        </div>
        <button
          type="submit"
          className={`px-4 py-2 rounded-full font-semibold transition ${image && video ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
          disabled={!image || !video}
        >Submit & Complete Mission</button>
        {(!image || !video) && <div className="mt-2 text-red-600 text-sm">Please upload both image and video to submit.</div>}
        {submitted && <div className="mt-4 text-green-700 font-bold">Mission Submitted! Redirecting...</div>}
      </form>
    </div>
  );
}
