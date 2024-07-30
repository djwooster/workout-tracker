import { useState } from "react";
import { Button } from "@/app/Components/ui/Button";
import { Input } from "@/app/Components/ui/Input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/Components/ui/Tabs";

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
    <form
      className="flex flex-col gap-4 p-4 border rounded-md shadow-sm bg-white "
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="exercise">Exercise</label>
        <Input
          id="exercise"
          type="text"
          placeholder="Bicep Curls"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        ></Input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="weight">Weight</label>
        <Input
          id="weight"
          type="number"
          placeholder="125"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></Input>
        <Tabs
          defaultValue="lbs"
          value={unit}
          onValueChange={(value) => setUnit(value)}
        >
          <TabsList>
            <TabsTrigger value="lbs">lbs</TabsTrigger>
            <TabsTrigger value="kg">kg</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="reps">Reps</label>
        <Input
          id="reps"
          type="number"
          placeholder="12"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        ></Input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="sets">Sets</label>
        <Input
          id="sets"
          type="number"
          placeholder="3"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        ></Input>
      </div>
      <Button variant="default" type="submit" onClick={handleSubmit}>
        Add to Workout
      </Button>
    </form>
  );
}
