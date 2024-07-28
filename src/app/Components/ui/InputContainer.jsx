import { Input } from "./input";
import InputField from "./InputField";

function InputContainer({ title, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <h3>{title}</h3>
      <Input placeholder={placeholder} />
    </div>
  );
}

export default InputContainer;
