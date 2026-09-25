"use client";
import Image from "next/image";
import React from "react";
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
    onRemove?: (id: number) => void;
}
const SaveExercisePlanCard = ({ exercise, onRemove }: PlanExerciseCardProps) => {

    return (
        <div className="flex items-center gap-4 rounded-2xl border border-[#292E38] bg-[#14171E] p-3">
            {/* Image */}
            <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl">
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

                <div className="mt-2 flex items-center gap-4 text-xs text-gray-300">
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

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-3">
                {/* View Details */}
                <Link href={`/exercises/${exercise.id}`}><button
                    type="button"
                    className="rounded-full border border-[#38404D] px-5 py-2 text-xs text-white transition hover:bg-[#20242C]"
                >
                    View Details
                </button></Link>

                {/* Remove */}
                <button
                    type="button"
                    onClick={() => onRemove?.(exercise.id)}
                    className="text-gray-500 transition hover:text-white"
                    aria-label="Remove exercise"
                >
                    <IoClose size={18} />
                </button>
            </div>
        </div>
    );
};
export default SaveExercisePlanCard