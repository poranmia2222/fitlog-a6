"use client";

import Image from "next/image";
import Link from 'next/link';
import { ExerciseType } from "@/types/exercise.type";
import { FaFireAlt, FaRegClock, FaRegStar } from "react-icons/fa";


interface ExerciseCardProps {
  exercise: ExerciseType;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link href={`/exercises/${exercise.id}`}>
      <div className="w-full rounded-3xl border-2 border-[#1C1F26] overflow-hidden">
        {/* Image */}
        <div className="relative h-75 w-full">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-2">
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-3">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <h2 className="text-2xl font-extrabold uppercase tracking-wide">
            {exercise.name}
          </h2>

          {/* Equipment */}
          <p className="text-lg text-gray-400">
            {exercise.equipment}
          </p>

          {/* Divider */}
          <div className="my-6 h-px bg-[#1C1F26]" />

          {/* Exercise Stats */}
          <div className="flex items-center gap-14 text-gray-400">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <FaRegClock />
              <span>{exercise.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <FaFireAlt />
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <FaRegStar />
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;