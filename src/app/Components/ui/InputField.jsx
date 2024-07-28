import { useState } from "react";

function InputField({ placeholder }) {
  const [inputName, setInputName] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    const newWorkout = { inputName };
    console.log(newWorkout);
  };

  return (
    <input
      type="text"
      className="text-input"
      placeholder={placeholder}
      value={inputName}
      onChange={(e) => setInputName(e.target.value)}
      onSubmit={handleSubmit}
    ></input>
  );
}

export default InputField;
