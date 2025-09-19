import React, { useState } from "react";

const ShareUpdateForm = () => {
	const [update, setUpdate] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setUpdate("");
		setTimeout(() => setSubmitted(false), 2000);
	};

	return (
		<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
			<h2 className="text-xl font-semibold mb-4">Share an Update</h2>
			<textarea
				className="w-full border border-gray-300 rounded-md p-2 mb-4"
				rows={4}
				placeholder="What's happening in your farm today?"
				value={update}
				onChange={(e) => setUpdate(e.target.value)}
				required
			/>
			<button
				type="submit"
				className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600"
			>
				Post Update
			</button>
			{submitted && (
				<div className="mt-3 text-green-600">Update posted!</div>
			)}
		</form>
	);
};

export default ShareUpdateForm;
