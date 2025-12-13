import { Timer } from './Timer';
import './components.css';

export const Dashboard = ({
  timers,
  onSetNewTimer,
  onDelete,
  onDuplicate,
  onPause,
}) => {
  return (
    <>
      <button className="newTimer" onClick={onSetNewTimer}>
        Create new Timer
      </button>
      {timers.map((timer) => (
        <Timer
          key={timer.id}
          timer={timer}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onPause={onPause}
        />
      ))}
    </>
  );
};
