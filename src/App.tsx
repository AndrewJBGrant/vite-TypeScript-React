import { useState } from "react";

// import NewTodo from "./components/NewTodo";
// import Todo from './models/todo'
import Todos from "./components/Todos";
import Todo from "./models/todo";

import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  //   const todos = [
  // new Todo('Learn TypeScript'),
  // new Todo('Build Pomodoro App'),
  //   ];


// useState<Todo[]>([])  Make it clear the data managed by this state (todos) is an array called Todo[]
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

      // Function form to update state
    setTodos((prevTodos) => {
      // concat(Creates a new array, does not mutate old array)
      return prevTodos.concat(newTodo);
    });
  };


// We need the id of todo
const removeTodoHandler = (todoId: string) => {
// console.log("I am clicked")
setTodos((prevTodos) => {
  // Call .filter to get the id we want to delete
  return prevTodos.filter(todo => todo.id !== todoId);
})
};


  return (
    <>
      <div>
        <h1>Pomodoro Timer</h1>
        <p className="text-card">
          The Pomodoro Technique is a time management method based on 25-minute
          stretches of focused work broken by five-minute breaks. Longer breaks,
          typically 15 to 30 minutes, are taken after four consecutive work
          intervals. Each work interval is called a pomodoro, the Italian word
          for tomato (plural: pomodori).
        </p>


        <NewTodo onAddTodo={addTodoHandler} />
        <Todos items={todos}  onRemoveTodo={removeTodoHandler}/>
      </div>
    </>
  );
}

export default App;
