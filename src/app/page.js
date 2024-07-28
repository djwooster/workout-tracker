"use client";

import React, { useEffect, useState } from "react";
import Calendar from "./Components/Calendar";
import InputContainer from "./Components/InputContainer";
import Button from "./Components/Button";
import Nav from "./Components/Nav";
import WorkoutForm from "./Components/WorkoutForm";
import WorkoutSummary from "./Components/WorkoutSummary";
import LeftNavMenu from "./Components/LeftNavMenu";

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
  }

  function addWorkout(workout) {
    setWorkOuts([...workouts, workout]);
    localStorage.setItem(`workout_${workout.id}`, JSON.stringify(workout));
  }

  const handleShowNav = () => {
    setShowNav(!showNav);
    console.log("test");
    console.log("test2");
  };

  return (
    <>
      <Nav
        showNav={showNav}
        setShowNav={setShowNav}
        handleShowNav={handleShowNav}
      />
      {showNav && <LeftNavMenu />}

      <main className="container">
        <Calendar />
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
