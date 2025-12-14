import './components.css';a

export const Timer = ({ timer, onDelete, onDuplicate, onPause }) => {
  return (
    <>
      <div className="uniqTimer">
        {timer.seconds}
        <div className="buttons">
          <button
            onClick={() => {
              onDelete(timer.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              onDuplicate(timer.id);
            }}
          >
            Duplicate
          </button>
          <button
            onClick={() => {
              onPause(timer.id);
            }}
          >
            {timer.running === true ? 'Pause' : 'Continue'}
          </button>
        </div>
      </div>
    </>
  );
};
