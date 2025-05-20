import styled from 'styled-components';

export const HomeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  svg {
    background-color: var(--color-white);
    border-radius: 50%;
    padding: 12px;
    color: var(--color-secondary);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 30px;
`;

export const GameSessions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
