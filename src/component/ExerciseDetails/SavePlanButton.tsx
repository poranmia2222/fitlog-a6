'use client'
import { ExercisesContext } from '@/context/ExercisesContext';
import { ExerciseType } from '@/types/exercise.type';
import React, { useContext } from 'react';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { toast } from 'react-toastify';

const SavePlanButton = ({ exercise }: { exercise: ExerciseType }) => {

    const { savePlan, setSavePlan } = useContext(ExercisesContext)

    const handleSavePlan = (exercise: ExerciseType) => {
        const alreadySaved = savePlan.some(
            (item) => item.id === exercise.id
        );
        if (alreadySaved) {
            toast.info(`${exercise.name} is already saved!`);
            return;
        }
        setSavePlan([...savePlan, exercise]);
        toast.success(`${exercise.name} added to saved!`);
    }
    return (
        <>
            <button onClick={() => handleSavePlan(exercise)} className='btn btn-secondary rounded-xl text-sm sm:w-auto sm:text-base md:text-lg w-full'><MdOutlineBookmarkBorder /> Save for later</button>

        </>
    )
};

export default SavePlanButton;