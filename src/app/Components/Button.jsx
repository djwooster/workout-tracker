const alert = () => alert('It works!');

export default function Button({ action }) {
  return (
    <button onClick={alert} className="primary">
      {action}
    </button>
  );
}
