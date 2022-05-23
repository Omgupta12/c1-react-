import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";


const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
 
  
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
  
        {props.text}
        <Task/>
      
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {props.text==""}
     
      </div>
      
    </>
  );
};

export default Tasks;
