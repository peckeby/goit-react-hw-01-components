import styled from 'styled-components';

export const FriendListLi = styled.li``;

export const FriendStateSpanOnline = styled.span`
  ${props => {
    switch (props.$isOnline) {
      case 'true':
        return css`
          &:before {
            content: "\2022";
            color: green;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
        `;
      default:
        return css`
          &:before {
            content: "\2022";
            color: red;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
        `;
    }
  }}
`;
