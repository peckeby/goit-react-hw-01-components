import { FriendListLi, FriendStateSpan } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendListLi>
      <FriendStateSpan isOnline={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListLi>
  );
}
