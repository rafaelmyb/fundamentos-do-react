import styled from 'styled-components'; 

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  border-radius: ${({ theme }) => theme.borderRadius};

  button {
    font-size: ${({ theme }) => theme.spacing.medium}px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;