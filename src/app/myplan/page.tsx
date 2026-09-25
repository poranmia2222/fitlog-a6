"use client";
import PlanTabs from "@/component/sheard/myplane/PlanTabs";
import SortDropdown from "@/component/sheard/myplane/SortDropdown";
import SaveExercisePlanCard from "@/component/sheard/SaveExercisePlanCard";
import TodaysExercisePlanCard from "@/component/sheard/TodaysExercisePlanCard";
import { ExercisesContext } from "@/context/ExercisesContext";
import React, { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

const MyPlan = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    const { todaysPlan, setTodaysPlan, savePlan, setSavePlan } = useContext(ExercisesContext)

    const handleRemoveFromToday = (id: number) => {

        const removeditem = todaysPlan.find(item => item.id === id)

        setTodaysPlan((prev) =>
            prev.filter((exercise) => exercise.id !== id)
        );

        toast.warn(`${removeditem?.name} has been removed!`);
    };
    
    const handleRemoveFromSaved = (id: number) => {

        const removeditem = savePlan.find(item => item.id === id)

        setSavePlan((prev) =>
            prev.filter((exercise) => exercise.id !== id)
        );

        toast.warn(`${removeditem?.name} has been removed!`);
    };

    const handleMarkAsDone = (id: number) => {
        setTodaysPlan((prev) =>
            prev.filter((exercise) => exercise.id !== id)
        );
        toast.success(' Wow you did it!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

    }


    return (
        <section className="min-h-screen">
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
                        <h2 className="text-6xl font-bold text-primary">
                            {
                                activeTab === 'today' ? todaysPlan.length : savePlan.length
                            }
                        </h2>
                    </div>

                    <div className="mr-8 space-y-2 border-r-2 border-[#1C1F26]">
                        <p>Minutes</p>
                        <h2 className="text-6xl font-bold">
                            {
                                activeTab === 'today' ? todaysPlan.reduce((total, item) => total + item.duration, 0) : savePlan.reduce((total, item) => total + item.duration, 0)
                            }
                        </h2>
                    </div>

                    <div className="space-y-2">
                        <p>Calories</p>
                        <h2 className="text-6xl font-bold">
                            {
                                activeTab === 'today' ? todaysPlan.reduce((total, item) => total + item.caloriesBurned, 0) : savePlan.reduce((total, item) => total + item.caloriesBurned, 0)
                            }
                        </h2>
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

                    <div>
                        {(todaysPlan.length === 0 && activeTab === 'today') ?
                            <div className="my-10 h-100 rounded-2xl border-2 border-[#1C1F26] bg-secondary p-8 py-10 text-center flex justify-center items-center">

                                <div className="space-y-4">
                                    <h1 className="text-2xl font-bold">NOTHING HERE YET</h1>
                                    <p className="text-secondary">Browse the library and add a lift to get today moving.</p>
                                    <button className="btn btn-primary rounded-4xl">Go to workouts</button>
                                </div>

                            </div> : ''
                        }
                        {(savePlan.length === 0 && activeTab === 'saved') ?
                            <div className="my-10 h-100 rounded-2xl border-2 border-[#1C1F26] bg-secondary p-8 py-10 text-center flex justify-center items-center">

                                <div className="space-y-4">
                                    <h1 className="text-2xl font-bold">NOTHING HERE YET</h1>
                                    <p className="text-secondary">Browse the library and add a lift to get today moving.</p>
                                    <button className="btn btn-primary rounded-4xl">Go to workouts</button>
                                </div>

                            </div> : ''
                        }
                    </div>


                    {
                        activeTab === 'today' ? <div className="grid grid-cols-1 gap-4 my-10">
                            {
                                todaysPlan &&
                                todaysPlan.map(exercise => <TodaysExercisePlanCard
                                    key={exercise.id}
                                    exercise={exercise}
                                    onMarkDone={handleMarkAsDone}
                                    onRemove={handleRemoveFromToday}></TodaysExercisePlanCard>)
                            }
                        </div> : <div className="grid grid-cols-1 gap-4 my-10">
                            {
                                savePlan &&
                                savePlan.map(exercise => <SaveExercisePlanCard
                                    key={exercise.id}
                                    exercise={exercise}
                                    onRemove={handleRemoveFromSaved}></SaveExercisePlanCard>)
                            }
                        </div>
                    }
                </div>

            </div>
        </section>
    );
};

export default MyPlan;