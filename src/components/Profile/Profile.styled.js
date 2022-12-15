import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ced9eb;
  padding: 10px;
  border-radius: 7px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileName = styled.p`
  font-weight: 600;
  text-transform: uppercase;
`;

export const ProfileStats = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ProfileLabel = styled.span`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const ProfileQuantity = styled.span`
  text-align: center;
`;
