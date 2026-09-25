'use client'
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const MyPlan = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("saved");
    return (
        <section>
            <div className='container mx-auto my-10 space-y-6'>
                <div>
                    <h2 className='text-2xl font-bold'>MY PLAN</h2>
                    <p className='text-secondary'>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div className='bg-secondary border-2 border-[#1C1F26] py-10 p-8 grid grid-cols-3 justify-between rounded-2xl'>
                    <div className='space-y-2 border-r-2 border-[#1C1F26] mr-8'>
                        <p>Exercises</p>
                        <h2 className='text-6xl font-bold text-primary'>2</h2>
                    </div>

                    <div className='space-y-2 border-r-2 border-[#1C1F26] mr-8'>
                        <p>Minutes</p>
                        <h2 className='text-6xl font-bold'>2</h2>
                    </div>
                    <div className='space-y-2'>
                        <p>Calories</p>
                        <h2 className='text-6xl font-bold'>2</h2>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className="flex w-60 rounded-xl border-2 border-[#252A35] bg-[#151820] p-1">
                            <button
                                onClick={() => setActiveTab("today")}
                                className={`flex-1 rounded-lg p-1 transition-all duration-200 ${activeTab === "today"
                                    ? "bg-[#20252F] text-white font-medium "
                                    : "text-gray-400"
                                    }`}
                            >
                                Today's Plan
                            </button>
                            <button
                                onClick={() => setActiveTab("saved")}
                                className={`flex-1  rounded-lg p-1 transition-all duration-200 ${activeTab === "saved"
                                    ? "bg-[#20252F] text-white font-medium"
                                    : "text-gray-400"
                                    }`}
                            >
                                Saved
                            </button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-secondary'>Sort By</p>
                            <div className="">
                                <select defaultValue={`Duration `} className="border-2 border-[#252A35] p-2 rounded-xl border-amber-50select bg-secondary">
                                    <option defaultChecked disabled={true}>Duration</option>
                                    <option>Crimson</option>
                                    <option>Amber</option>
                                    <option>Velvet</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='bg-secondary my-10 h-100 border-2 border-[#1C1F26] py-10 p-8 rounded-2xl'>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPlan;