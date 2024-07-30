import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "./Button";

export default function Workout({ workout, onDelete }) {
  return (
    <div className="flex flex-col w-full gap-4 p-3 border rounded-md shadow-sm bg-white ">
      <div className="flex flex-row h-full gap-8 justify-between">
        <div className="flex flex-col">
          <h4 className="scroll-m-20 text-base font-semibold tracking-tight">
            Name
          </h4>
          <p className="text-sm text-muted-foreground">{workout.exercise}</p>
        </div>
        <div className="small-container">
          <h4 className="scroll-m-20 text-base font-semibold tracking-tight">
            Weight
          </h4>
          <p className="text-sm text-muted-foreground">{workout.weight}</p>
        </div>
        <div className="small-container">
          <h4 className="scroll-m-20 text-base font-semibold tracking-tight">
            Units
          </h4>
          <p className="text-sm text-muted-foreground">{workout.unit}</p>
        </div>
        <div className="small-container">
          <h4 className="scroll-m-20 text-base font-semibold tracking-tight">
            Sets
          </h4>
          <p className="text-sm text-muted-foreground">{workout.sets}</p>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="outline" className="gap-2 flex-grow">
          Edit
        </Button>
        <Button
          variant="destructive"
          className="gap-2 flex-grow"
          onClick={() => onDelete(workout.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
