import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


const ProfilePage = () => {
	const { user, language, toggleLanguage } = useContext(AppContext);

	// Texts for both languages
	const texts = {
		en: {
			title: "Profile Page",
			translate: "Translate to Hindi",
			name: "Name",
			email: "Email",
			created: "Account Created",
			noUser: "No user data found. Please login.",
			progress: "Your Progress",
			missions: "Your Missions",
		},
		hi: {
			title: "प्रोफ़ाइल पृष्ठ",
			translate: "अंग्रेज़ी में बदलें",
			name: "नाम",
			email: "ईमेल",
			created: "खाता बनाया गया",
			noUser: "कोई उपयोगकर्ता डेटा नहीं मिला। कृपया लॉगिन करें।",
			progress: "आपकी प्रगति",
			missions: "आपके मिशन",
		},
	};

	// Format date
	const formatDate = (dateStr) => {
		if (!dateStr) return "-";
		const date = new Date(dateStr);
		return date.toLocaleDateString(language === "hi" ? "hi-IN" : "en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div style={{ maxWidth: 600, margin: "40px auto", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #ccc", background: "#fff" }}>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
				<h1 style={{ fontSize: 32 }}>{texts[language].title}</h1>
				<button
					onClick={toggleLanguage}
					style={{ padding: "10px 20px", fontSize: 16, borderRadius: 8, background: "#4f46e5", color: "#fff", border: "none", cursor: "pointer" }}
				>
					{texts[language].translate}
				</button>
			</div>
			{user ? (
				<>
					<div style={{ marginBottom: 32 }}>
						<div style={{ fontSize: 20, marginBottom: 8 }}><strong>{texts[language].name}:</strong> {user.name}</div>
						<div style={{ fontSize: 18, marginBottom: 8 }}><strong>{texts[language].email}:</strong> {user.email}</div>
						<div style={{ fontSize: 16, marginBottom: 8 }}><strong>{texts[language].created}:</strong> {formatDate(user.createdAt)}</div>
					</div>
					<div style={{ marginBottom: 32 }}>
						<h2 style={{ fontSize: 22, marginBottom: 12 }}>{texts[language].progress}</h2>
						<div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16 }}>
							{/* Placeholder for progress, replace with real data */}
							<p>{language === "hi" ? "प्रगति डेटा यहाँ दिखेगा।" : "Progress data will appear here."}</p>
						</div>
					</div>
					<div>
						<h2 style={{ fontSize: 22, marginBottom: 12 }}>{texts[language].missions}</h2>
						<div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16 }}>
							{/* Placeholder for missions, replace with real data */}
							<p>{language === "hi" ? "मिशन डेटा यहाँ दिखेगा।" : "Mission data will appear here."}</p>
						</div>
					</div>
				</>
			) : (
				<div style={{ fontSize: 18, color: "#ef4444" }}>{texts[language].noUser}</div>
			)}
		</div>
	);
};

export default ProfilePage;
