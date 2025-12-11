import './component.css';

export const User = ({ user }) => {
  return (
    <>
      <div className="everyUser">
        <img src={user.picture.medium} />
        {user.name.first} {user.name.last} {user.gender}{' '}
      </div>
    </>
  );
};
