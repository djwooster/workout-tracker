import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/Components/ui/Card";
import Workout from "./Workout";
import { Button } from "./Button";

export default function WorkoutSummary({ workouts, onDelete }) {
  return (
    <div className="flex flex-col h-full w-full gap-1 mt-4 m-auto justify-center ">
      <h4 className="text-lg font-semibold">
        {workouts.length} {workouts.length === 1 ? "Exercise" : "Exercises"}
      </h4>
      <div className="flex flex-col h-full w-full gap-4 mt-2 justify-center ">
        {workouts.map((workout, index) => (
          <Card key={workout.id} className="flex flex-col w-full p-4 gap-2">
            <CardHeader className="flex flex-row items-center gap-2 p-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-600" />
              <CardTitle className="flex flex-row items-center gap-2">
                <h3 className="text-lg font-semibold text-primary">
                  {"Set " + (index + 1) + ":"}
                </h3>
              </CardTitle>
            </CardHeader>
            <CardDescription></CardDescription>

            <CardContent className="p-0 mb-4">
              <div key={index} className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-light text-muted-foreground">
                    Exercise
                  </p>
                  <p className="text-md font-medium leading-none">
                    {workout.exercise}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-light text-muted-foreground">
                    Reps
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {workout.reps}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-light text-muted-foreground">
                    Weight
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {workout.weight}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0">
              <div className="flex flex-row gap-2 w-full">
                <Button variant="outline" className="w-full text-sky-600">
                  Edit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onDelete(workout.id)}
                  className="w-full text-red-500"
                >
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
