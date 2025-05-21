import styled from 'styled-components';

export const Container = styled.div`
  width: 100dvw;
  height: max-content;
  min-height: 80dvh;
  padding: 20px 40px;
  background-color: var(--color-white);
  border-radius: 40px 40px 0 0;
  box-shadow: 0 2px 8px var(--color-shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 26px;
  margin-top: 14px;
  text-align: center;
  font-weight: bold;
  color: var(--color-primary);
`;

export const FormWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SwitchText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-secondary);
`;

export const SwitchLink = styled.span`
  color: var(--color-primary);
  cursor: pointer;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
