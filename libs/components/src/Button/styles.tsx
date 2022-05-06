import styled from "styled-components";

interface IStyledButtonProps {
  bgButton?: string;
}

// export const StyledButton = styled.button<StyledButtonProps>`
export const StyledButton = styled.button<IStyledButtonProps>`
  background-color: ${({ bgButton }) => bgButton || 'red'};
  color: white;
  font-weight: bold;
  /* height: 400px;
  width: 400px; */
`;
