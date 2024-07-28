import Workout from "./Workout";

export default function WorkoutSummary({ workouts, onDelete }) {
  return (
    <ul>
      {workouts.map((workout) => (
        <li key={workout.id}>
          <Workout workout={workout} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
