import styled from 'styled-components';

/* eslint-disable import/prefer-default-export */

export const Component = styled.button`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;
