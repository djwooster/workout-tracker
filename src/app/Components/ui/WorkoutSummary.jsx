import Workout from "./Workout";

export default function WorkoutSummary({ workouts, onDelete }) {
  return (
    <div className="flex flex-col h-full w-full gap-1 mt-4 m-auto border rounded-md justify-center p-3 ">
      <h4 className="text-lg font-semibold">
        {workouts.length} {workouts.length === 1 ? "Exercise" : "Exercises"}
      </h4>
      <ul className="flex flex-col h-full w-full gap-4 mt-4 justify-center ">
        {workouts.map((workout) => (
          <li key={workout.id} className="w-full">
            <Workout workout={workout} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
