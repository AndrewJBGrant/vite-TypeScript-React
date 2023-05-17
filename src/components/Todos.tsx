import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

// Here React.FC shows that what follows is a function component
// https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/
// Here { items: Todo[] } we are letting it known that items will be based on the decription of the todo class id and text (both string)
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul>
      {todosCtx.items.map((item) => (
        // Prop chain forwarding onRemoveTodo={}
        //  bind() === https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
