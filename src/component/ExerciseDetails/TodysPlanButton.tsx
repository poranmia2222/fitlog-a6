'use client'
import { ExercisesContext } from '@/context/ExercisesContext';
import { ExerciseType } from '@/types/exercise.type';
import React, { useContext } from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const TodysPlanButton = ({ exercise }: { exercise: ExerciseType }) => {

    const { todaysPlan, setTodaysPlan } = useContext(ExercisesContext)

    const handleTodaysPlan = (exercise: ExerciseType) => {
        const alreadySaved = todaysPlan.some(
            (item) => item.id === exercise.id
        );
        if (alreadySaved) {
            toast.info(`${exercise.name} is already in plan!`);
            return;
        }
        setTodaysPlan([...todaysPlan, exercise]);
        toast.success(`${exercise.name} added to today's plan!`);
    }
    return (
        <button onClick={() => handleTodaysPlan(exercise)} className='btn btn-primary rounded-xl text-sm sm:w-auto sm:text-base md:text-lg w-full'><LuCalendarPlus2 /> Add to today's plan</button>
    );
};

export default TodysPlanButton;