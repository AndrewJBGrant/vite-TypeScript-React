import { useState } from 'react';

// import NewTodo from "./components/NewTodo";
// import Todo from './models/todo'
import Todos from './components/Todos';
import Todo from './models/todo';

import "./App.css";
import NewTodo from './components/NewTodo';

function App() {
//   const todos = [
// new Todo('Learn TypeScript'),
// new Todo('Build Pomodoro App'),
//   ];

const [todos, setTodos] = useState<Todo[]>([]);


const addTodoHandler = (todoText: string) => {
  const newTodo = new Todo(todoText);
  setTodos((prevTodos) => {
    return prevTodos.concat(newTodo)
  });

}
;

// const minutes = 25;
// let seconds = 60;

// const makeIteration = (): void => {
//     // console.clear();
//     if (seconds > 0) {
//         // console.log(seconds);
//         setTimeout(makeIteration, 1000); // 1 second waiting
//     }
//     seconds -= 1;
// };

// setTimeout(makeIteration, 1000); // 1 second waiting


  return (
    <>
      <div>
        <h1>Hello welcome to the Pomodoro</h1>
        <p className='text-card'>The Pomodoro Technique is a time management method based on 25-minute stretches of focused work broken by five-minute breaks. Longer breaks, typically 15 to 30 minutes, are taken after four consecutive work intervals. Each work interval is called a pomodoro, the Italian word for tomato (plural: pomodori).</p>

        {/* {minutes}: {seconds} */}
        <NewTodo  onAddTodo={addTodoHandler}/>
        <Todos items={todos}/>
      </div>
    </>
  );
}

export default App;
