import React from 'react';
import { InputHTMLAttributes, } from 'react'

import { Container, Label, Input_ } from './styles';

interface IInputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  titleInput?: string;
}

export function Input({
  titleInput,
  required,
  ...rest }: IInputComponentProps) {
  return (
    <Container>
      <Label required={!!required}>{titleInput}</Label>
      <Input_ {...rest} />
    </Container>
  )
}
