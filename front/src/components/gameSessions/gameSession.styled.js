import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HostName = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GameInfoLeft = styled.div`
  display: flex;
  gap: 12px;
`;

export const GameImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const GameName = styled.div`
  font-weight: 600;
`;

export const GameDate = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

export const GameLocation = styled.div`
  color: #999;
  font-size: 0.9rem;
`;

export const Players = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-left: auto; 
`;

export const ExtraPlayers = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #eee;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: -10px;
  border: 2px solid #fff;
  z-index: 0;
`;
