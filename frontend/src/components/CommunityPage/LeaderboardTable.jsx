import React from "react";

const leaderboardData = [
	{ name: "Prashant", score: 1200 },
	{ name: "Amit", score: 1100 },
	{ name: "Sneha", score: 950 },
	{ name: "Ravi", score: 900 },
	{ name: "Priya", score: 850 },
];

const LeaderboardTable = () => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
			<h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
			<table className="w-full border-collapse">
				<thead>
					<tr className="bg-emerald-100">
						<th className="py-2 px-4 border-b text-left">Rank</th>
						<th className="py-2 px-4 border-b text-left">Name</th>
						<th className="py-2 px-4 border-b text-left">Score</th>
					</tr>
				</thead>
				<tbody>
					{leaderboardData.map((user, idx) => (
						<tr key={user.name} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
							<td className="py-2 px-4 border-b">{idx + 1}</td>
							<td className="py-2 px-4 border-b">{user.name}</td>
							<td className="py-2 px-4 border-b">{user.score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default LeaderboardTable;
