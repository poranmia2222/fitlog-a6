'use client'
import { ExercisesContext } from '@/context/ExercisesContext';
import { ExerciseType } from '@/types/exercise.type';
import React, { useContext } from 'react';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const SavePlanButton = ({ exercise }: { exercise: ExerciseType }) => {

    const { savePlan, setSavePlan } = useContext(ExercisesContext)

    const handleSavePlan = (exercise: ExerciseType) => {
        setSavePlan([...savePlan, exercise])
        toast.success(`${exercise.name} added to saved!`);
    }
    return (
        <>
            <button onClick={() => handleSavePlan(exercise)} className='btn btn-secondary rounded-xl text-lg'><MdOutlineBookmarkBorder /> Save for later</button>
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
    )
};

export default SavePlanButton;