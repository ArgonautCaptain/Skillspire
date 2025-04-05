import react from 'react';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from './UserProfileInfo';
import UserProfilePosts from './UserProfilePosts';

const UserProfile = () => {

  const user = {
    name: 'Jane Doe',
    bio: 'Web developer and coffee lover ☕',
    avatarUrl: '/images/JaneDoe.png',
  };
  return (
    <div>
      <UserProfileHeader />
      <UserProfileInfo
        name={user.name}
        bio={user.bio}
        avatarUrl={user.avatarUrl}
      />
      <UserProfilePosts />
    </div>
  );
};

export default UserProfile;