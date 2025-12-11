import { User } from './User';
import './component.css';

export const ListUsers = ({ users, action, onChange }) => {
  return (
    <>
      <h1 className="headerUser">Users</h1>
      <div className="usersBackground">
        {users && users.map((user, index) => <User key={index} user={user} />)}
      </div>
      <div className="buttons">
        <button onClick={() => onChange(action === 'male' ? 'cancel' : 'male')}>
          {' '}
          {action === 'male' ? 'cancel' : 'Male'}
        </button>
        <button
          onClick={() => onChange(action === 'female' ? 'cancel' : 'female')}
        >
          {action === 'female' ? 'cancel' : 'Female'}
        </button>
        <button onClick={() => onChange(action === 'all' ? 'cancel' : 'all')}>
          {action === 'all' ? 'cancel' : 'All'}
        </button>
      </div>
    </>
  );
};
