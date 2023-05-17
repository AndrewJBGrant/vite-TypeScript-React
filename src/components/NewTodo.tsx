import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";



// This line below we need React.FC to establish that NewTodo will be a functional component
// Custom props using generic nature <{}>, we are establishing that onAddTodo is a function
// Assign a 'function type' we want a type of string and because we dont need a return value we call void
// {onAddTodo: (parameters required this function needs) => return type of function }
// const NewTodo: React.FC<{onAddTodo: (text: string) => void } > = () => {

  const NewTodo: React.FC = () => {

  const todoCtx = useContext(TodosContext);
  // useRef<HTMLInputElement> we need to tell typeScript exactly which element the ref will connect
  // We need a starting value to show where the ref is linked (null)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // .current hold the current value
    // current? is checking if useRef has an inital value.
    // Use current! if you are sure it will have an inital connection
    // .value is built in because we are accessing HTML element
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const enteredText = todoTextInputRef.current!.value;
    // console.log(enteredText)

    if (enteredText.trim().length === 0) {
      // Throw an error
      return;
    }

    // Calling a function that is stored in App.tsx
    // Pass pointers at functions as props to other components
    // adding a new ToDo
    // props.onAddTodo(enteredText);

    todoCtx.addTodo(enteredText);
};




  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo</label>
      {/* connecting the ref == ref={todoTextInputRef} */}
      <input type="text" id="text" ref={todoTextInputRef} />

      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
