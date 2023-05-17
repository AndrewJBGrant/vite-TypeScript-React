/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import Todo from "../models/todo";

// Type alias
type TodosContextObj = {
  items: Todo[];
  // Function Type definition defining the return type (void)
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// createContext() wants a default value, one arguments
// Here the argument is an object to describe the shape
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  // Concrete function definition
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
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
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
