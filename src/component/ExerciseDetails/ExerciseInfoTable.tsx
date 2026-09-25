import { ExerciseType } from '@/types/exercise.type';
import React from 'react';

interface ExerciseInfoTableData{
   exercise: ExerciseType
}

const ExerciseInfoTable = ({exercise}:ExerciseInfoTableData) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#272C36] bg-[#151922]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#272C36] px-5 py-4">
                <span className="text-xs font-bold tracking-wider text-gray-400">
                    EQUIPMENT
                </span>

                <span className="text-sm text-gray-200">
                    {exercise.equipment}
                </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#272C36] px-5 py-4">
                <span className="text-xs font-bold tracking-wider text-gray-400">
                    DIFFICULTY
                </span>

                <span className="text-sm text-gray-200">
                   {exercise.difficulty}
                </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#272C36] px-5 py-4">
                <span className="text-xs font-bold tracking-wider text-gray-400">
                    SETS
                </span>

                <span className="text-sm text-gray-200">
                    {exercise.sets}
                </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#272C36] px-5 py-4">
                <span className="text-xs font-bold tracking-wider text-gray-400">
                    REPS
                </span>

                <span className="text-sm text-gray-200">
                    {exercise.reps}
                </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#272C36] px-5 py-4">
                <span className="text-xs font-bold tracking-wider text-gray-400">
                    DURATION
                </span>

                <span className="text-sm text-gray-200">
                    {exercise.duration} min
                </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#272C36] px-5 py-4">
                <span className="text-xs font-bold tracking-wider text-gray-400">
                    CALORIES
                </span>

                <span className="text-sm text-gray-200">
                    {exercise.caloriesBurned} kcal
                </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-bold tracking-wider text-gray-400">
                    RATING
                </span>

                <span className="text-sm text-gray-200">
                   {exercise.rating}
                </span>
            </div>
        </div>
    );
};

export default ExerciseInfoTable;