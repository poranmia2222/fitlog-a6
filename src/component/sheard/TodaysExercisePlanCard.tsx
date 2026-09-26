"use client";

import Image from "next/image";
import React, { useContext } from "react";
import {
    IoCheckmark,
    IoClose,
    IoTimeOutline,
} from "react-icons/io5";
import { FaFire, FaStar } from "react-icons/fa";
import { ExerciseType } from "@/types/exercise.type";
import Link from "next/link";

interface PlanExerciseCardProps {
    exercise: ExerciseType;
    onRemove: (id: number) => void
    onMarkDone: (id: number) => void

}
const TodaysExercisePlanCard = ({ exercise, onRemove, onMarkDone }: PlanExerciseCardProps) => {


    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 rounded-2xl border border-[#292E38] bg-[#14171E] p-3">
            <div className="flex gap-4 items-center" >
                {/* Image */}
            <div className="relative h-16 w-22 md:h-20 md:w-32 shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                />
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold uppercase tracking-wide text-white">
                    {exercise.name}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                    {exercise.equipment}
                </p>

                <div className="mt-2 flex items-center gap-4 text-[9px] md:text-xs text-gray-300">
                    {/* Duration */}
                    <span className="flex items-center gap-1.5">
                        <IoTimeOutline
                            size={15}
                            className="text-[#B6FF00]"
                        />
                        {exercise.duration} min
                    </span>

                    {/* Calories */}
                    <span className="flex items-center gap-1.5">
                        <FaFire
                            size={13}
                            className="text-[#B6FF00]"
                        />
                        {exercise.caloriesBurned} kcal
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-1.5">
                        <FaStar
                            size={13}
                            className="text-[#B6FF00]"
                        />
                        {exercise.rating}
                    </span>
                </div>
            </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-3">
                {/* View Details */}
                <Link href={`/exercises/${exercise.id}`}><button
                    type="button"
                    className="rounded-full border border-[#38404D] px-2 py-2 md:px-5 md:py-2 text-xs text-white transition hover:bg-[#20242C]"
                >
                    View Details
                </button></Link>

                {/* Mark as Done */}
                <button
                    type="button"
                    onClick={() => onMarkDone?.(exercise.id)}
                    className="flex items-center gap-1.5 rounded-full bg-[#B6FF00] px-2 py-2 md:px-5 md:py-2 text-xs font-semibold text-black transition hover:bg-[#c4ff33]"
                >
                    <IoCheckmark size={16} />
                    Mark as Done
                </button>

                {/* Remove */}
                <button
                    type="button"
                    onClick={() => onRemove(exercise.id)}
                    className="text-gray-500 transition hover:text-white"
                    aria-label="Remove exercise"
                >
                    <IoClose size={18} />
                </button>
            </div>
        </div>
    );
};

export default TodaysExercisePlanCard;