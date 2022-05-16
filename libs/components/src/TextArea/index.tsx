import React from 'react';

import { Container, Label, TextAreaStyle } from './styles'

interface INumberCountProps {
  titleInput: string;
  required?: boolean;
  value: string;
  setValue: (data: string) => void;
  placeholder: string;
}

export function TextArea({ titleInput, required, value, setValue, placeholder }: INumberCountProps) {
  return (
    <Container>
      <Label required={!!required}>{titleInput}</Label>
      <TextAreaStyle
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder} />
    </Container>
  )
}