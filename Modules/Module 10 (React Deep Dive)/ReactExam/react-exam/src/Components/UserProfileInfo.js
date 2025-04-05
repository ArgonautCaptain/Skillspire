import react from 'react';

const UserProfileInfo = ({ name, bio, avatarUrl }) => {
  return (
    <div>
      <img src={avatarUrl} alt={`${name}'s avatar`} width="100" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfileInfo;
