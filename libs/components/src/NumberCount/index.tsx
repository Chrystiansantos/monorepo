import React from 'react'
import { Container, Label, ContaierInput, IconMath, Number } from './styles'

interface INumberCountProps {
  titleInput: string;
  required?: boolean;
  value: number;
  setValue: (data: number) => void
}

export function NumberCount({ titleInput, required, value, setValue }: INumberCountProps) {

  const handleClick = (number: number, operator: string) => {
    const newNumber = operator === '+' ? (number + 1) : (number - 1);
    setValue(newNumber)
  }

  return (
    <Container>
      <Label required={!!required}>{titleInput}</Label>
      <ContaierInput>
        <IconMath onClick={() => handleClick(value, '-')}>-</IconMath>
        <Number>{value}</Number>
        <IconMath onClick={() => handleClick(value, '+')}>+</IconMath>
      </ContaierInput>
    </Container>
  )
}