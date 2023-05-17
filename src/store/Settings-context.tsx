// main.tsx is now wrapped in <SettingContextProvider> meaning everything in the app is children of it

import React, { createContext, useState } from "react";

export const SettingContext = createContext(null);

const SettingsContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [pomodoro, setPomodoro] = useState(0);
  // Object that comes from the settings page
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(activeState: string) {
    updateExecute({
      ...executing,
      active: activeState,
    });

    setTimerTime(executing);
  }

  //Animation function
  function startTimer() {
    setStartAnimate(true);
  }
  function pauseTimer() {
    setStartAnimate(true);
  }
  function stopTimer() {
    setStartAnimate(true);
  }

  const settingsButton = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings: object) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setTimerTime = (evaluate: any) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);

        break;

      case "short":
        setPomodoro(evaluate.short);

        break;

      case "long":
        setPomodoro(evaluate.long);

        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remaingTimer }) => {
    const minutes = Math.floor(remaingTimer / 60);
    const seconds = remaingTimer % 60;

    return `${minutes}m:${seconds}s`;
  };

  return (
    <SettingContext.Provider
      value={{
        stopTimer,
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        settingsButton,
        setCurrentTimer,
        children,
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingsContextProvider;
