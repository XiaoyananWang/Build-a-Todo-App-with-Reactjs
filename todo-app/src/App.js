import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  //(prev) => { ... }:
  //It uses a callback function, taking prev as an argument. The prev represents the previous state value of tasks.
  //return [...prev, { name: name, done: false }];:
  //Inside the callback function, a new array is constructed using the spread operator (...) on the prev array. This spread operation copies the elements of the previous array into a new array.
  //Then, a new object is appended to the end of the new array using an object literal syntax ({ name: name, done: false }). The name parameter passed to the handleAddTask function is used as the value for the name property in the new object, and done: false sets the done property to false.
  //Finally, the new array with the appended object is returned from the callback function.
  function handleAddTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }
  //every information we got in task, we pass it to the <Task />
  return (
    <main>
      <TaskForm onAdd={handleAddTask} />
      {tasks.map(task=>(
        <Task {...task}/>
      ))}
    </main>
  );
}

export default App;
