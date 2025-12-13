import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [timers, setTimers] = useState([]);
  const nextIdRef = useRef(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimers((timers) =>
        timers.map((timer) => {
          if (!timer.running) return timer;
          if (timer.seconds <= 0)
            return { ...timer, seconds: 0, running: false };
          return { ...timer, seconds: timer.seconds - 1 };
        }),
      );
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const newTimer = () => {
    const id = nextIdRef.current++;
    const seconds = Math.floor(Math.random() * 100 + 10);
    setTimers((timers) => [...timers, { id, seconds, running: true }]);
  };

  const deleteTimer = (id) => {
    setTimers((timers) => timers.filter((timer) => timer.id !== id));
  };

  const pauseTimer = (id) => {
    setTimers((timers) =>
      timers.map((timer) =>
        timer.id === id ? { ...timer, running: !timer.running } : timer,
      ),
    );
  };

  const duplicateTimer = (id) => {
    const newTimer = timers.find((timer) => timer.id === id);
    const newId = nextIdRef.current++;
    setTimers([...timers, { ...newTimer, id: newId }]);
  };

  return (
    <>
      <div className="TitleOfApp">App Timer</div>
      <Dashboard
        timers={timers}
        onSetNewTimer={newTimer}
        onDelete={deleteTimer}
        onDuplicate={duplicateTimer}
        onPause={pauseTimer}
      />
    </>
  );
}
