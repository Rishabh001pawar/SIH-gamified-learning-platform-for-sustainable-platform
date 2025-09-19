import React from "react";

export default function MissionIncentivesPage() {
  // Example user progress (replace with real data from context/store)
  const userPoints = 350;
  const userMissionsCompleted = 4;

  const incentives = [
    {
      title: "Bronze Badge",
      description: "Awarded for completing your first mission.",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828961.png",
      required: 1,
    },
    {
      title: "Water Conservation Kit",
      description: "Redeemable after earning 200 points.",
      image: "https://cdn-icons-png.flaticon.com/512/2909/2909762.png",
      required: 200,
    },
    {
      title: "Organic Farming Guidebook",
      description: "Unlock after completing 7 missions.",
      image: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
      required: 7,
    },
    {
      title: "Crop Insurance Discount",
      description: "Redeemable after earning 800 points.",
      image: "https://cdn-icons-png.flaticon.com/512/3081/3081557.png",
      required: 800,
    },
    {
      title: "Gold Badge",
      description: "Awarded for completing 5 missions.",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      required: 5,
    },
    {
      title: "Free Seeds Pack",
      description: "Redeemable after earning 300 points.",
      image: "https://cdn-icons-png.flaticon.com/512/2909/2909763.png",
      required: 300,
    },
    {
      title: "Silver Badge",
      description: "Awarded for completing 3 missions.",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png",
      required: 3,
    },
    {
      title: "Fertilizer Discount Coupon",
      description: "Redeemable after earning 500 points.",
      image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
      required: 500,
    },
  ];

  function canRedeem(item) {
    if (item.title.includes('Badge') || item.title.includes('Guidebook')) {
      return userMissionsCompleted >= item.required;
    }
    return userPoints >= item.required;
  }

  function handleRedeem(item) {
    if (!canRedeem(item)) return;
    alert(`You have redeemed: ${item.title}`);
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-700">🎁 Mission Incentives</h1>
      <p className="text-gray-700 mb-8 text-lg">Complete missions and earn rewards! Unlock badges and redeem special items as you progress.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {incentives.map((item, idx) => {
          const eligible = canRedeem(item);
          return (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-green-100">
              <img src={item.image} alt={item.title} className="w-20 h-20 mb-4" />
              <h2 className="text-2xl font-bold text-emerald-700 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="mt-2 px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
                {item.required} {item.title.includes('Badge') || item.title.includes('Guidebook') ? 'Missions' : 'Points'} Required
              </div>
              <button
                className={`mt-4 px-4 py-2 rounded-full font-semibold transition ${eligible ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                disabled={!eligible}
                onClick={() => handleRedeem(item)}
              >Redeem</button>
              {!eligible && (
                <div className="mt-2 text-red-600 text-sm">You need {item.required} {item.title.includes('Badge') || item.title.includes('Guidebook') ? 'missions' : 'points'} to redeem.</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-right text-emerald-700 font-bold">
        Your Points: {userPoints} | Missions Completed: {userMissionsCompleted}
      </div>
    </div>
  );
}
