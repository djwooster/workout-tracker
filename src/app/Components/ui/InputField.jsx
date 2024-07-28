import { useState } from "react";
import { Input } from "./Input";

function InputField({ placeholder }) {
  const [inputName, setInputName] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    const newWorkout = { inputName };
    console.log(newWorkout);
  };

  return (
    <Input
      type="text"
      className="text-input"
      placeholder={placeholder}
      value={inputName}
      onChange={(e) => setInputName(e.target.value)}
      onSubmit={handleSubmit}
    />
  );
}

export default InputField;
