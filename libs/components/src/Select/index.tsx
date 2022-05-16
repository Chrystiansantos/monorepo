import React from 'react';
import { InputHTMLAttributes, } from 'react';

import { Container, ContainerLabel, Label, SelectStyle, Info } from './styles';

interface IInputComponentProps extends InputHTMLAttributes<HTMLSelectElement> {
  titleInput?: string;
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  onChangeValue: (data: string) => void;
  textInfo?: string;
}

export function Select({
  titleInput,
  required,
  options,
  value,
  onChangeValue,
  textInfo,
  ...rest }: IInputComponentProps) {
  return (
    <Container>
      <ContainerLabel>
        <Label required={!!required}>{titleInput}</Label>
        {textInfo && <Info textInfo={textInfo}>i</Info>}
      </ContainerLabel>

      <SelectStyle
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        {...rest}
      >
        {
          options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))
        }
      </SelectStyle>
    </Container>
  )
}