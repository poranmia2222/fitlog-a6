'use client'
import { ExerciseType } from '@/types/exercise.type';
import React, { Children, createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ExercisesContextType {
    todaysPlan: ExerciseType[],
    setTodaysPlan: Dispatch<SetStateAction<ExerciseType[]>>,
    savePlan: ExerciseType[],
    setSavePlan: Dispatch<SetStateAction<ExerciseType[]>>,

}

export const ExercisesContext = createContext<ExercisesContextType>({
    todaysPlan: [],
    setTodaysPlan: () => { },
    savePlan: [],
    setSavePlan: () => { }
})

const ExercisesProvider = ({ children }: { children: ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<ExerciseType[]>([])
    const [savePlan, setSavePlan] = useState<ExerciseType[]>([])

    const sharedData = {
        todaysPlan, setTodaysPlan,
        savePlan, setSavePlan
    }
    return (

        <ExercisesContext.Provider value={sharedData}>
            {children}
        </ExercisesContext.Provider>
    );
};

export default ExercisesProvider;