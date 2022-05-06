import styled from "styled-components";

interface StyledButtonProps {
  disabled: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: red;
  color: white;
  font-weight: bold;
`;
