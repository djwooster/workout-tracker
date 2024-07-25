import InputField from "./InputField";

function InputContainer({ title, placeholder }) {
  return (
    <div className="input-container">
      <h3>{title}</h3>
      <InputField placeholder={placeholder} />
    </div>
  );
}

export default InputContainer;
