"use client";
import PlanTabs from "@/component/sheard/myplane/PlanTabs";
import SortDropdown from "@/component/sheard/myplane/SortDropdown";
import React, { useState } from "react";

const MyPlan = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    return (
        <section>
            <div className="container mx-auto my-10 space-y-6">

                {/* ===================================================== */}
                {/* Header */}
                {/* ===================================================== */}

                <div>
                    <h2 className="text-2xl font-bold">
                        MY PLAN
                    </h2>
                    <p className="text-secondary">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* ===================================================== */}
                {/* Statistics */}
                {/* ===================================================== */}

                <div className="grid grid-cols-3 justify-between rounded-2xl border-2 border-[#1C1F26] bg-secondary p-8 py-10">

                    <div className="mr-8 space-y-2 border-r-2 border-[#1C1F26]">
                        <p>Exercises</p>
                        <h2 className="text-6xl font-bold text-primary">2</h2>
                    </div>

                    <div className="mr-8 space-y-2 border-r-2 border-[#1C1F26]">
                        <p>Minutes</p>
                        <h2 className="text-6xl font-bold">2</h2>
                    </div>

                    <div className="space-y-2">
                        <p>Calories</p>
                        <h2 className="text-6xl font-bold">2</h2>
                    </div>
                </div>

                {/* ===================================================== */}
                {/* Tabs + Dropdown */}
                {/* ===================================================== */}

                <div>
                    <div className="flex justify-between">
                        <PlanTabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <SortDropdown />
                    </div>
                    
                    {/* ===================================================== */}
                    {/* Content */}
                    {/* ===================================================== */}

                    <div className="my-10 h-100 rounded-2xl border-2 border-[#1C1F26] bg-secondary p-8 py-10">

                        {activeTab === "today" ? (
                            <p>Today's Plan</p>
                        ) : (
                            <p>Saved Exercises</p>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default MyPlan;