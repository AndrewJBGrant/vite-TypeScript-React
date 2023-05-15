import Todos from './components/Todos';
import Todo from './models/todo';

import "./App.css";

function App() {
  const todos = [
new Todo('Learn TypeScript'),
new Todo('Build Pomodoro App'),
  ];



  return (
    <>
      <div>
        <h1>Hello welcome to the Pomodoro</h1>
        <p>The Pomodoro Technique is a time management method based on 25-minute stretches of focused work broken by five-minute breaks. Longer breaks, typically 15 to 30 minutes, are taken after four consecutive work intervals. Each work interval is called a pomodoro, the Italian word for tomato (plural: pomodori).</p>
        <Todos items={todos}/>
      </div>
    </>
  );
}

export default App;
