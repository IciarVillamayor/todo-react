import React from "react";
import AddNewTodo from "./AddNew/AddNewTodo";
import TodoList from "./ListItems/TodoList";
import TitleApp from "./ListItems/TitleApp"

import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const NewTodoHandler = ()=>{
    dispatch({
      type: 'ADD_NEW_TODO',
      payload: {
      }
  })
  }
  

  return (
    <div className="App p-4 mt-4">
      <div>
        <TitleApp></TitleApp>
        <div className="slab bg-secondary w-15 h-10">

        </div>
       <TodoList/>
      </div>
     
      <button onClick={NewTodoHandler} className="addTodo rounded-circle btn btn-primary btn-lg bg-primary text-white fixed-bottom">+</button>
      <AddNewTodo></AddNewTodo>
      
    </div>
  );
}

export default App;
