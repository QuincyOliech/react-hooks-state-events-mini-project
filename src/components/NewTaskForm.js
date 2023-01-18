import React from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({categories,onTaskFormSubmit}) {
  function handleSubmit(e){
    e.preventDefault()
    
    onTaskFormSubmit({
      text: document.getElementById("text").value,
      category: document.getElementById("category").value,
    })
    // how to reset values being input in the form
    // e.target.reset()
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input id="text"type="text" name="text" required/>
      </label>
      <label>
        Category
        <select id="category"name="category">
          {
          categories.map(category=>{
            if (category==="All"){
              return null
            }else {
              return <option key={category}>{category}</option>
            }
          })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
