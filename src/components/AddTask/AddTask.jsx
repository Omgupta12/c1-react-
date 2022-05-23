import React,{useState} from "react";
import styles from "./addTask.module.css";
import Tasks from "../Tasks/Tasks";

// import data from "..tasks.json"
const AddTask = () => {
  // console.log(data)
  // NOTE: do not delete `data-cy` key value pair

  const[input,setInput]=useState("")
const[add,setAdd]=useState([])

const inputEvent=(event)=>{
setInput(event.target.value)
}

const btnItem=()=>{
setAdd ((oldItem)=>{
return [...oldItem,input]
})
setInput("")
}

const deleteItem=()=>{
  console.log(deleteItem)
}


  return (
    <>
   
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={inputEvent} value={input} placeholder="Add task..." />
      <button className="btn" data-cy="add-task-button" onClick={btnItem}>+</button>
    </div>

    {add.map((el,index)=>{
return (
  <Tasks text={el} key={index} id={index} onSelect={deleteItem}/>

)
    })}
    </>
  );
};

export default AddTask;
