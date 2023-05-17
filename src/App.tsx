import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  //   const todos = [
  // new Todo('Learn TypeScript'),
  // new Todo('Build Pomodoro App'),
  //   ];

  return (
    <>
      <TodosContextProvider>
        <header>Pomodoro Timer</header>
        <section className="text-card">
          The Pomodoro Technique is a time management method based on 25-minute
          stretches of focused work broken by five-minute breaks. Longer breaks,
          typically 15 to 30 minutes, are taken after four consecutive work
          intervals. Each work interval is called a pomodoro, the Italian word
          for tomato (plural: pomodori).
        </section>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </>
  );
}

export default App;
