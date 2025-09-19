import React from "react";
import ProgressDashboard from "../components/missions/ProgressDashboard";

export default function MissionProgress() {
  // Example props, replace with real data as needed
  return <ProgressDashboard progress={60} score={90} badges={["Starter", "Water Saver", "Expert"]} />;
}
