import styled from 'styled-components';

export const FriendListLi = styled.li`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 2px solid greenyellow;
  border-radius: 9px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: beige;
`;

export const FriendStateSpan = styled.span`
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    display: inline-block;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    border-radius: 50%;
  }
`;
