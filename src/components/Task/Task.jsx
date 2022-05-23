import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
  // import data from " ../src/data/tasks.json"


// import Counter from "./Counter.jsx"
const Task = () => {
  // console.log(data)


  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    <div className="task">
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text"></div>
   
      <Counter/>
      {/* Counter here */}
      <button data-cy="task-remove-button">Delete</button>
    </li>
    </div>
    </>
  );
};

export default Task;
