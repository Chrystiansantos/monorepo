import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled?: boolean;
  onClick: () => void;
  children?: ReactNode;
  bgButton?: string;
}

export const Button = ({
  type = "button",
  title,
  disabled = false,
  onClick,
  children,
  bgButton
}: ButtonProps) => {
  return (
    <StyledButton type={type} disabled={disabled} bgButton={bgButton} onClick={onClick}>
      {children ? children : title}
    </StyledButton>
  );
};
