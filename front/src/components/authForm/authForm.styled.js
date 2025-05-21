import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  color: white;
  padding: 18px 12px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: #15aaa9;
  }
`;

export const PasswordCriteria = styled.div`
  font-size: 0.85rem;
  margin-top: -12px;
  margin-bottom: 8px;
  padding-left: 10px;
  p {
    margin: 4px 0;
  }
`;
