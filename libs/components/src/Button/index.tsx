import React, { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled?: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export const Button = ({
  type = "button",
  title,
  disabled = false,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <Button type={type} disabled={disabled} onClick={onClick}>
      {children ? children : title}
    </Button>
  );
};
