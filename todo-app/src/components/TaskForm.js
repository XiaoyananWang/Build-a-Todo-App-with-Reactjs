import { useState } from "react";

function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  //Declare as arrow function using const, same as declare a regular function
  //   const handleTaskNameChange = (event) => {
  //     setTaskName(event.target.value);
  //   };
  //The handleTaskNameChange function is called whenever the onChange event occurs on the input element.
  //When the user types or changes the input value, this event will be triggered.
  //Inside the handleTaskNameChange function, the event object is passed as an argument.
  //This object contains information about the event, and the target property of the event object refers to the DOM element that triggered the event - in this case, the <input> element.
  //By accessing event.target.value, you are extracting the current value of the input field.
  //Since the onChange event is triggered whenever the input value changes, reading event.target.value gives you the most up-to-date value of the input element.
  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
        placeholder="Your next task..."
      />
    </form>
  );
}
export default TaskForm;
