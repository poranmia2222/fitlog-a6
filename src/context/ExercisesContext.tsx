"use client";

import { ExerciseType } from "@/types/exercise.type";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ExercisesContextType {
  todaysPlan: ExerciseType[];
  setTodaysPlan: Dispatch<SetStateAction<ExerciseType[]>>;
  savePlan: ExerciseType[];
  setSavePlan: Dispatch<SetStateAction<ExerciseType[]>>;
}

export const ExercisesContext = createContext<ExercisesContextType>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savePlan: [],
  setSavePlan: () => {}
});

const ExercisesProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<ExerciseType[]>([]);
  const [savePlan, setSavePlan] = useState<ExerciseType[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    try {
      const storedTodaysPlan = localStorage.getItem("todaysPlan");
      const storedSavePlan = localStorage.getItem("savePlan");

      if (storedTodaysPlan) {
        setTodaysPlan(JSON.parse(storedTodaysPlan));
      }

      if (storedSavePlan) {
        setSavePlan(JSON.parse(storedSavePlan));
      }
    } catch (error) {
      console.error("Error loading localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "todaysPlan",
      JSON.stringify(todaysPlan)
    );
  }, [todaysPlan, isLoaded]);

  // Save saved plan
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "savePlan",
      JSON.stringify(savePlan)
    );
  }, [savePlan, isLoaded]);

  const sharedData: ExercisesContextType = {
    todaysPlan,
    setTodaysPlan,
    savePlan,
    setSavePlan,
  };

  
  return (
    <ExercisesContext.Provider value={sharedData}>
      {children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesProvider;