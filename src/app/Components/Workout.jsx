import { TrashIcon } from "@radix-ui/react-icons";

export default function Workout({ workout, onDelete }) {
  return (
    <div className="workout">
      <div className="small-container">
        <h5>Name</h5>
        <p>{workout.exercise}</p>
      </div>
      <div className="small-container">
        <h5>Weight</h5>
        <p>{workout.weight}</p>
      </div>
      <div className="small-container">
        <h5>Units</h5>
        <p>{workout.unit}</p>
      </div>
      <div className="small-container">
        <h5>Sets</h5>
        <p>{workout.sets}</p>
      </div>
      <div className="close-icon" onClick={() => onDelete(workout.id)}>
        <TrashIcon className="btn-icon" />
      </div>
    </div>
  );
}
