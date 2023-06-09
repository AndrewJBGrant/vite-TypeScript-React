// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
// import SettingsButton from "./SettingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "../store/settings-context";
import "./Timer.css";

// const red = '#f54e4e';
// const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  // const totalSeconds =
  //   mode === "work"
  //     ? settingsInfo.workMinutes * 60
  //     : settingsInfo.breakMinutes * 60;
  // // const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className="time-display">
      {minutes + ":" + seconds}

      <div className="button-start-stop">
        <button
          onClick={() => {
            setIsPaused(false);
            isPausedRef.current = false;
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default Timer;
