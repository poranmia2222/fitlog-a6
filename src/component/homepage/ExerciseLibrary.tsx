import { ExerciseType } from '@/types/exercise.type';
import React from 'react';
import ExerciseCard from '@/component/sheard/ExerciseCard';

const getExercises = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    if (!res.ok) {
        throw new Error("Failed to fetch workout data");
    }
    const data = await res.json()
    // console.log(data)
    return data
}


const ExerciseLibrary = async () => {
    const exercises: ExerciseType[] = await getExercises()
    return (
        <section className='container mx-auto p-2'>
            <div className='my-10 space-y-2'>
                <h2 className='text-2xl lg:text-4xl font-bold'>THE LIBRARY</h2>
                <p className='text-sm md:text-xl text-secondary'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
                {
                    exercises.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise}></ExerciseCard>)
                }
            </div>
        </section>
    );
};

export default ExerciseLibrary;