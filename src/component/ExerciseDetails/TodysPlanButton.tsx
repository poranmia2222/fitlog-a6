'use client'
import { ExercisesContext } from '@/context/ExercisesContext';
import { ExerciseType } from '@/types/exercise.type';
import React, { useContext } from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const TodysPlanButton = ({ exercise }: { exercise: ExerciseType }) => {

    const { todaysPlan, setTodaysPlan } = useContext(ExercisesContext)

    const handleTodaysPlan = (exercise: ExerciseType) => {
        setTodaysPlan([...todaysPlan, exercise])
        toast.success(`${exercise.name} added to plan!`);
    }
    return (
        <>
            <button onClick={() => handleTodaysPlan(exercise)} className='btn btn-primary rounded-xl text-lg'><LuCalendarPlus2 /> Add to today's plan</button>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}></ToastContainer>
        </>
    );
};

export default TodysPlanButton;