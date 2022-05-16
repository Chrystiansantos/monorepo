import React from 'react';
import { Container, ContainerInput, Input, Label, CheckBoxStyle, CheckBoxLabel, CheckBoxWrapper } from './styles'

interface INumberCountProps {
  // titleInput: string;
  // required?: boolean;
  // value: string;
  // setValue: (data: string) => void;
  // placeholder: string;
}

export function CheckBox({ /* titleInput, required, value, setValue, placeholder  */ }: INumberCountProps) {
  const label = "Teste"
  return (
    <Container>
      <ContainerInput>
        <Input id="key" type="checkbox"></Input>
        <Label htmlFor='key'>CheckBox</Label>
      </ContainerInput>
      <ContainerInput>
        <Input id="key2" type="radio"></Input>
        <Label htmlFor='key2'>CheckBox</Label>
      </ContainerInput>
      <ContainerInput>
        <CheckBoxWrapper>
          <CheckBoxStyle id="checkbox" type="checkbox" />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </ContainerInput>
    </Container>
  )
}