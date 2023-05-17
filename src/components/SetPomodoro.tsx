// Settings component
import { useContext, useState } from 'react';
import { SettingContext } from '../store/Settings-context';
// import Button from './Button'


const SetPomodoro = () => {

const {updateExecute} = useContext(SettingContext)


const [newTimer, setNewTimer] = useState({
  work: 0.3,
  short: 0.2,
  long: 1,
  // active will indicate which timer we want to run
  active: 'work',
});

const handleChange = (event: React.FormEvent) => {
  // for the switch statement

  const {name, value} = event.target as HTMLButtonElement;

  switch (name) {
    case 'work':
      setNewTimer({
        ...newTimer,
        work: parseInt(value)
      })
break;
case 'short':
  setNewTimer({
    ...newTimer,
    short: parseInt(value)
  })
  break;
case 'long':
  setNewTimer({
    ...newTimer,
    long: parseInt(value)
  })

break;
    default:
      break;
  }
  // console.log(newTimer);
}

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateExecute(newTimer)
    // console.log("I am submitted")
}



  return(
<div>
  <form noValidate onSubmit={handleSubmit}>
    <div>
      <input name="work" onChange={handleChange} value={newTimer.work} />
      <input name="short"  onChange={handleChange} value={newTimer.short} />
    <input name="long" onChange={handleChange} value={newTimer.long} />
    <button>Set Timer</button>
    </div>
    {/* <Button title="Set Timer" onSubmit={handleSubmit}  /> */}
  </form>
</div>
  )
};


export default SetPomodoro;


// onChange={handleChange} for the input
