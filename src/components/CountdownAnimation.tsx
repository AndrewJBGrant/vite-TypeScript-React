import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingContext } from '../store/Settings-context';

// type MyProps = {
//     children?: React.ReactNode;

// }

const CountdownAnimation = ({key = 1, timer = 20, animate = true, children}) => {


const {stopTimer} = useContext(SettingContext)




return (

  <CountdownCircleTimer
  key={key}
  isPlaying={animate}
  duration={timer * 60}
  colors={'#ffffff'}
  strokeWidth={6}
  trailColor='#C34C25'
  onComplete={ () => {
    stopTimer()
  }}
  >

{children}
  </CountdownCircleTimer>
)



}

export default CountdownAnimation;
