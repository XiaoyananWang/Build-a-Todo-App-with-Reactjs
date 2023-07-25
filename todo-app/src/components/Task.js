import Checkbox from "./Checkbox";

function Task({ name, done, onToggle }) {
  //the newDone will be the opposite of done, so !done
  return (
    //adding extra className to this div to add the crossing line to the task if it's done
    //To add an animation to the linn-through, you can add a span element first to the name
    <div className={"task " + (done ? "done" : "")}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      <span>{name}</span>
    </div>
  );
}
export default Task;
