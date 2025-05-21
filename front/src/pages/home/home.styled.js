import styled from 'styled-components';

export const HomeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
  padding-block: 10px;
  z-index: 10;
  background-color: var(--color-background);

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
  width: 36px;
`;

export const TextLogo = styled.span`
  font-size: 25px;
`;

export const GameSessions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100dvh;
  overflow-y: auto;
  padding-bottom: 230px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
