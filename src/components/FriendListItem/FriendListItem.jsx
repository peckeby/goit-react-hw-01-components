import { FriendListLi, FriendStateSpan } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendListLi>
      {isOnline ? (
        <FriendStateSpan $isOnline="true"></FriendStateSpan>
      ) : (
        <FriendStateSpan></FriendStateSpan>
      )}
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FriendListLi>
  );
}
