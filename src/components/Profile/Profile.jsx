import {
  ProfileContainer,
  ProfileDescription,
  ProfileLabel,
  ProfileStats,
  ProfileStatsItem,
  ProfileQuantity,
  ProfileName,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <img
          src={avatar}
          alt="User avatar"
          class="avatar"
          width="160px"
          height="180px"
        />
        <ProfileName>{username}</ProfileName>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </ProfileDescription>
      <ProfileStats>
        <ProfileStatsItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{stats.views}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileContainer>
  );
};

export default Profile;
