import { Container, Label, ContainerInput, LabelInput, Input, Button } from './styles'

interface INumberCountProps {
}

export function InputButton() {

  return (
    <Container>
      <Label>
        Text Field with Add-ons
      </Label>
      <ContainerInput>
        <LabelInput>Label</LabelInput>
        <Input placeholder='Input Text'/>
        <Button>Button</Button>
      </ContainerInput>
    </Container>
  )
}