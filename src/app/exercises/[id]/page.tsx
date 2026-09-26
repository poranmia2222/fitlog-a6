
import ExerciseInfoTable from '@/component/ExerciseDetails/ExerciseInfoTable';
import SavePlanButton from '@/component/ExerciseDetails/SavePlanButton';
import TodysPlanButton from '@/component/ExerciseDetails/TodysPlanButton';
import { ExerciseType } from '@/types/exercise.type';
import Image from 'next/image';
import React from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';
import { MdOutlineBookmarkBorder } from 'react-icons/md';

interface ExerciseDetailsPageProps {
    params: Promise<{
        id: string
    }>;
}

const getExercises = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    if (!res.ok) {
        throw new Error("Failed to fetch workout data");
    }
    const data = await res.json()
    // console.log(data)
    return data
}

const ExerciseDetailsPage = async ({ params }: ExerciseDetailsPageProps) => {
    const { id } = await params
    const exercises: ExerciseType[] = await getExercises();
    const exercise = exercises.find(exercise => String(exercise.id) === String(id))
    if (!exercise) {
        return <div>Exercise not found</div>;
    }
    // console.log(exercise)

    return (
        <section className='my-12'>
            <div className='container mx-auto grid md:grid-cols-2 gap-6 p-2'>
                <div className="relative h-60 md:h-200 w-full overflow-hidden rounded-3xl">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <h2 className='text-2xl md:text-4xl font-bold'>{exercise.name.toUpperCase()}</h2>
                        <p className='text-secondary'>{exercise.description}</p>
                    </div>
                    <div className='flex gap-4 '>{exercise.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-lime-400 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-black"
                        >
                            {muscle}
                        </span>
                    ))}</div>
                    <ExerciseInfoTable exercise={exercise}></ExerciseInfoTable>
                    <div className='space-y-2'>
                        <p className='text-xl font-bold'>INSTRUCTIONS</p>
                        <ul className="list-decimal space-y-3 pl-5 text-secondary">
                            {exercise.instructions.map((instruction, index) => (
                                <li key={index} className="text-gray-300 text-sm">
                                    {instruction}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <TodysPlanButton exercise={exercise}></TodysPlanButton>
                        <SavePlanButton exercise={exercise}></SavePlanButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExerciseDetailsPage;