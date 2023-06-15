import './App.css';
import {useState} from "react";
import Timer from "./components/Timer";
// import Settings from "./Settings";
import SettingsContext from "./store/settings-context";
import NewTodo from './components/NewTodo';
import TodoItem from './components/TodoItem';



function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(2);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <main>
      <header>Pomodoro Timer</header>
       <section className="text-card">
          The Pomodoro Technique is a time management method based on 25-minute
          stretches of focused work broken by five-minute breaks. Longer breaks,
          typically 15 to 30 minutes, are taken after four consecutive work
          intervals. Each work interval is called a pomodoro, the Italian word
          for tomato (plural: pomodori).
        </section>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        <Timer />
        <NewTodo />
        <TodoItem />
      </SettingsContext.Provider>

    </main>
  );
}

export default App;
