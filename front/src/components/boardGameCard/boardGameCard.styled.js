import styled from 'styled-components';

export const Card = styled.div`
  width: 150px;
  height: 185px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

export const GameImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
`;

export const GameTitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;
