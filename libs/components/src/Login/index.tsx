import React, { FormEvent } from "react";
import { StyledLogin } from "./styles";

export interface LoginData {
  username: string;
  password: string;
}

interface LoginProps {
  onSubmit: (event: FormEvent) => void;
  formState: LoginData;
  setFormState: (data: LoginData) => void;
  submitButtonText: string;
}

export const Login = ({
  formState,
  setFormState,
  submitButtonText,
  onSubmit,
}: LoginProps) => {
  return (
    <StyledLogin onSubmit={onSubmit}>
      <input
        name="username"
        type="text"
        onChange={(event) =>
          setFormState({
            ...formState,
            username: event.target.value,
          })
        }
      />
      <br />
      <input
        name="password"
        type="password"
        onChange={(event) =>
          setFormState({
            ...formState,
            password: event.target.value,
          })
        }
      />
      <br />
      <button type="submit">{submitButtonText}</button>
    </StyledLogin>
  );
};
