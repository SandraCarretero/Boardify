import styled from 'styled-components';

export const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  padding: 1rem;
`;

export const Title = styled.h1`
  text-align: left;
  margin-top: 0;
  font-size: 25px;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  max-width: 100dvw;
`;

export const Card = styled.div`
  background: ${({ bg }) => bg || '#f0f0f0'};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row-reverse'};
  align-items: center;
  text-align: left;
  gap: 12px;
`;

export const StatValue = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const GameCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
`;

export const GameImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ChartSection = styled.section``;

export const ChartContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-end;
  height: 150px;
`;

export const BarGroup = styled.div`
  text-align: center;
  width: 40px;
`;

export const Bar = styled.div`
  width: 10px;
  background-color: ${({ color }) => color};
  height: ${({ height }) => height}px;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
`;
