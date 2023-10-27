import { argv } from 'node:process';


export default function Timer(argvParams) {
  const [,, timerHours, timerMinutes, timerSeconds] = argvParams;

  const min = 60, sec = 60, ms = 1000;

  const hoursMs = timerHours * min * sec * ms,
        minutesMs = timerMinutes * sec * ms,
        secondsMs = timerSeconds * ms;

  const timerTotalTimeMs = hoursMs + minutesMs + secondsMs;

  setTimeout(() => {
    console.log(`Timer up ${performance.now()}`);
  }, timerTotalTimeMs);
}

Timer(argv);
