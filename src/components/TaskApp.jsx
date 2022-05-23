import React from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Task from "./Task/Task";


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    <div className="Todo_main_div">
     <h1 className={styles.head}>Todo List</h1>
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
    

      <AddTask/>
       {/* Add Task */}
       
      <Tasks/>
      {/* Tasks */}
   
    </div>
    </div>
    </>
  );
  
};

export default TaskApp;
