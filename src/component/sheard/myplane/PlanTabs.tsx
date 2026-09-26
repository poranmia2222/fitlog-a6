"use client";
import React, { SetStateAction } from "react";

interface PlanTabsProps {
  activeTab: "today" | "saved";
  setActiveTab: React.Dispatch<SetStateAction<"today" | "saved">
  >;
}

const PlanTabs = ({
  activeTab,
  setActiveTab,
}: PlanTabsProps) => {
  return (
    <div className="flex w-30 md:w-60 rounded-xl border-2 border-[#252A35] bg-[#151820] p-1">
      <button
        onClick={() => setActiveTab("today")}
        className={`flex-1 rounded-lg p-1 transition-all duration-200 ${
          activeTab === "today"
            ? "bg-[#20252F] font-medium text-primary"
            : "text-gray-400"
        }`}
      >
        Today's Plan
      </button>

      <button
        onClick={() => setActiveTab("saved")}
        className={`flex-1 rounded-lg p-1 transition-all duration-200 ${
          activeTab === "saved"
            ? "bg-[#20252F] font-medium text-primary"
            : "text-gray-400"
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;