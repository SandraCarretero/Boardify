import styled from 'styled-components';

export const StyledWrapper = styled.div`
  .coolinput {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .coolinput label.text {
    font-size: 0.75rem;
    color: var(--color-secondary);
    font-weight: 700;
    position: relative;
    top: 0.4rem;
    margin: 0 0 0 7px;
    padding: 0 8px;
    background: var(--color-white);
    width: fit-content;
  }

  .coolinput .input {
    padding: 18px 12px;
    font-size: 1rem;
    border-radius: 12px;
    border: 1px solid var(--color-secondary);
    transition: border-color 0.3s ease;
  }

  .coolinput .input:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  .coolinput .input.error {
    border-color: var(--color-danger);
  }

  .coolinput .error-message {
    color: var(--color-danger);
    font-size: 0.75rem;
    margin-block: 4px 0;
    margin-left: 8px;
  }
`;
