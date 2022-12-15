import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendListUl } from './FriendList.styled';

export default function FriendsList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </FriendListUl>
  );
}
