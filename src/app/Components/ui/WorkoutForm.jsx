import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function WorkoutForm({ onAddWorkout }) {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [unit, setUnit] = useState("lbs");

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!exercise || !weight || !unit || !reps || !sets) return;

    const newWorkout = {
      id: Date.now(),
      exercise,
      weight,
      unit,
      reps,
      sets,
    };
    onAddWorkout(newWorkout);
    setExercise("");
    setWeight("");
    setUnit("lbs");
    setReps("");
    setSets("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="input-box">
        <label htmlFor="exercise">Exercise</label>
        <input
          id="exercise"
          className="text-input"
          type="text"
          placeholder="Bicep Curls"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        ></input>
      </div>
      <div className="input-box">
        <label htmlFor="weight">Weight</label>
        <input
          id="weight"
          className="text-input"
          type="text"
          placeholder="125"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option>lbs</option>
          <option>kg</option>
        </select>
      </div>
      <div className="input-box">
        <label htmlFor="reps">Reps</label>
        <input
          id="reps"
          className="text-input"
          type="text"
          placeholder="12"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        ></input>
      </div>
      <div className="input-box">
        <label htmlFor="sets">Sets</label>
        <input
          id="sets"
          className="text-input"
          type="text"
          placeholder="3"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        ></input>
      </div>
      <button className="primary">
        <PlusIcon />
        Add to Workout
      </button>
    </form>
  );
}
