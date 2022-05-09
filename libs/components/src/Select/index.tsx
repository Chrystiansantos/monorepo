import React from "react";

import { Container, Label, SelectStyle } from './styles'

interface IOptions {
  value: string | number;
  label: string;

}

interface ISelectProps {
  label: string;
  options: IOptions[];
  value: string;
  onChangeValue: (data: string) => void;
}

export const Select = ({ label, options, value, onChangeValue }: ISelectProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SelectStyle
        value={value}
        onChange={(event) => onChangeValue(event.target.value)}
      >
        {
          options.map(el => (
            <option key={el.value} value={el.value}>{el.label}</option>
          ))
        }
      </SelectStyle>
    </Container>
  )
}
