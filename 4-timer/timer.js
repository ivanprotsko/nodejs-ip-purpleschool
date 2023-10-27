import { PerformanceObserver } from 'node:perf_hooks';


const performanceObserver = new PerformanceObserver((items, observer) => {
  console.log(items.getEntries());
  const entry = items.getEntriesByName('timer').pop();
  console.log(`${entry.name.toUpperCase()}: ${entry.duration}`);
  observer.disconnect();
});
performanceObserver.observe({ entryTypes: ['measure'] });

export default function timer(argvParams) {
  performance.mark('start');
  console.log(`Start: ${performance.now()}`);

  const min = 60, sec = 60, ms = 1000;
  const [,, timerHours, timerMinutes, timerSeconds] = argvParams;
  const hoursMs = timerHours * min * sec * ms,
        minutesMs = timerMinutes * sec * ms,
        secondsMs = timerSeconds * ms;

  const timerTotalTimeMs = hoursMs + minutesMs + secondsMs;


  setTimeout(() => {
    console.log('/////////////////////////////');
    console.log(`Timer up ${performance.now()}`);
    console.log('/////////////////////////////');
  }, timerTotalTimeMs);


  console.log(`End: ${performance.now()}`);
  console.log('----------------------------');
  performance.mark('end');
  console.log(performance.measure('timer', 'start', 'end'));
}
