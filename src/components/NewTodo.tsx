import { useRef } from "react";


const NewTodo: React.FC<{onAddTodo: (text: string) => void } > = (props) => {
  // useRef<HTMLInputElement> we need to tell typeScript exactly which element the ref will connect
  // We need a starting value to show where the ref is linked (null)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // .current hold the current value
    // current? is checking if useRef has an inital value.
    // Use current! if you are sure it will have an inital connection
    const enteredText = todoTextInputRef.current?.value;
    // console.log(enteredText)

    if (enteredText?.trim().length === 0) {
      // Throw an error
      return;
    }
    // Calling a function that is stored in App.tsx
    // Pass pointers at functions as props to other components

    props.onAddTodo(enteredText);
};




  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo</label>
      <input type="text" id="text" ref={todoTextInputRef} />

      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
