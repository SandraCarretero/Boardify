import styled from 'styled-components';

export const Sticky = styled.div`
  position: sticky;
  top: 0;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const AddIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--color-primary);
  color: white;
  width: 28px;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  flex: 1;
`;

export const UserName = styled.h2`
  margin: 0;
`;

export const Stats = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Stat = styled.span`
  font-size: 0.9rem;
  color: #555;
  display: flex;
  flex-direction: column;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  margin: 1.5rem 0;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: var(--color-secondary);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;

export const ButtonOutline = styled(Button)`
  background-color: transparent;
  outline: 1px solid var(--color-secondary);
  color: var(--color-secondary);
`;

export const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
  border-bottom: 1px solid var(--color-secondary);
`;

export const Tab = styled.button`
  background: none;
  border: none;
  border-bottom: 2px solid
    ${props => (props.$isActive ? 'var(--color-primary)' : 'transparent')};
  color: ${props => (props.$isActive ? 'var(--color-primary)' : '#333')};
  padding: 0.5rem;
  cursor: pointer;
  font-weight: bold;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.$isPartidas ? '1fr' : 'repeat(2, 1fr)'};
  gap: 16px;
  height: calc(100vh - 220px);
  overflow-y: auto;
  padding-bottom: 135px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
