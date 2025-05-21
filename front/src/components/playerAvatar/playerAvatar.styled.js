import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  width: ${props => {
    if (props.$isProfile) return '80px';
    if (props.$isLarge) return '34px';
    return '32px';
  }};
  aspect-ratio: 1;
  font-size: ${props => {
    if (props.$isProfile) return '25px';
    if (props.$isLarge) return '14px';
    return '16px';
  }};
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
