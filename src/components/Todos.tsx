import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";


// Here React.FC shows that what follows is a function component
// https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/


// Here { items: Todo[] } we are letting it known that items will be based on the decription of the todo class id and text (both string)
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // Prop chain forwarding onRemoveTodo={}
        //  bind() === https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
