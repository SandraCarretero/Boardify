import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  width: ${props => (props.$isLarge ? '50px' : '32px')};
  aspect-ratio: 1;
  font-size: ${props => (props.$isLarge ? '18px' : '16px')};
  border-radius: 50%;
  overflow: hidden;
  background-color: #ccc;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => (props.$isLarge ? '0px' : '-10px')};
  border: 2px solid #fff;
  text-transform: uppercase;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
