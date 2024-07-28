"use client";

import React, { useEffect, useState } from "react";

import WorkoutForm from "./Components/ui/WorkoutForm";
import WorkoutSummary from "./Components/ui/WorkoutSummary";

export default function Home() {
  const [workouts, setWorkOuts] = useState([]);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const workouts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.includes("workout_")) {
        const workout = JSON.parse(localStorage.getItem(key));
        workouts.push(workout);
      }
    }
    setWorkOuts(workouts);
  }, []);

  function handleDelete(id) {
    setWorkOuts(workouts.filter((workout) => workout.id != id));
    localStorage.removeItem(`workout_${id}`);
  }

  function addWorkout(workout) {
    setWorkOuts([...workouts, workout]);
    localStorage.setItem(`workout_${workout.id}`, JSON.stringify(workout));
  }

  return (
    <>
      <main className="flex flex-col max-w-2xl mx-auto pt-10">
        <WorkoutForm onAddWorkout={addWorkout} />
      </main>
      <div className="summary-container">
        <WorkoutSummary
          workouts={workouts}
          onAddWorkout={addWorkout}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}
