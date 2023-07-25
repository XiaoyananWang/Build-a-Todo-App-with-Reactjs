import Checkbox from "./Checkbox";

function Task({ name, done, onToggle }) {
  //the newDone will be the opposite of done, so !done
  return (
    <div className="task">
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {name}
    </div>
  );
}
export default Task;
