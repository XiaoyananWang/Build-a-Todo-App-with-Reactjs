import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  //To monitor changes on the variable or on a state inside react, we use useEffect()
  //useEffect() allows you to perform side effects in functional components. Side effects refer to actions that are not directly related to rendering UI components, such as data fetching, subscriptions, or manually interacting with the DOM.
  //In this case, what should happen when the tasks change.
  //We want to save tasks to local storage.
  //Inside the useEffect hook, you provide a function that contains the side effect code. This function will be executed after the component has been rendered or updated.
  //In this case, the dependency is the tasks only.
  //We cannot just put a JS object in localStorage, the value needs to be a string, so serialize it with JSON.stringify.
  //We don't want to render and update local storage when tasks is an empty array.
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //Will run only when we first render our app, it will not run again if we update our tasks.
  //Since we stringify the JS object, we need to un stringify here.
  //When we have our tasks, we just need to setTasks
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  //(prev) => { ... }:
  //It uses a callback function, taking prev as an argument. The prev represents the previous state value of tasks.
  //return [...prev, { name: name, done: false }];:
  //Inside the callback function, a new array is constructed using the spread operator (...) on the prev array. This spread operation copies the elements of the previous array into a new array.
  //Then, a new object is appended to the end of the new array using an object literal syntax ({ name: name, done: false }). The name parameter passed to the handleAddTask function is used as the value for the name property in the new object, and done: false sets the done property to false.
  //Finally, the new array with the appended object is returned from the callback function.
  //Optionally, you can provide a dependency array as the second argument to useEffect. The dependency array is an array of variables that the effect depends on. When any of the variables in the dependency array change, the effect function will run again. If the dependency array is empty, the effect will only run once.
  function handleAddTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function handleTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      //inside newTasks we want to update the task with taskIndex to newDone
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  //every information we got in task, we pass it to the <Task />
  return (
    <main>
      <TaskForm onAdd={handleAddTask} />
      {tasks.map((task, index) => (
        <Task {...task} onToggle={(done) => handleTaskDone(index, done)} />
      ))}
    </main>
  );
}

export default App;
