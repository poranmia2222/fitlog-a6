'use client'
import { ExercisesContext } from '@/context/ExercisesContext';
import { ExerciseType } from '@/types/exercise.type';
import React, { useContext } from 'react';
import { MdOutlineBookmarkBorder } from 'react-icons/md';

const SavePlanButton = ({ exercise }: { exercise: ExerciseType }) => {

    const { savePlan, setSavePlan } = useContext(ExercisesContext)

    const handleSavePlan = (exercise:ExerciseType) => {
        setSavePlan([...savePlan, exercise])
    }
    return (
        <button onClick={() => handleSavePlan(exercise)} className='btn btn-secondary rounded-xl text-lg'><MdOutlineBookmarkBorder /> Save for later</button>
    );
};

export default SavePlanButton;