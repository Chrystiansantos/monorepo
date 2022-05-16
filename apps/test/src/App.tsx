import { Input, Select, NumberCount, TextArea, CheckBox } from "@monorepo/components";
import { useState } from "react";

import { InputButton } from "./components/InputButton";

import { Container } from './styles'
import { GlobalStyle } from "./styles/global";

const App = () => {
  const [option, setOption] = useState('1');
  const [value, setValue] = useState<number>(0);
  const [textArea, setTextArea] = useState('')

  const options = [
    { value: '1', label: 'opção 1' },
    { value: '2', label: 'opção 2' },
    { value: '3', label: 'opção 3' }
  ];

  return (
    <Container>
      <Input type="text" value="Input Text" titleInput="Text Field" required></Input>
      <Input type="text" placeholder="Ola"></Input>
      <Select options={options} onChangeValue={setOption} value={option} titleInput="Select Field" required textInfo="Ola mundo 123"></Select>
      <NumberCount titleInput="Number Count" required={false} setValue={setValue} value={value}></NumberCount>
      <TextArea titleInput="Text Area" required value={textArea} setValue={setTextArea} placeholder="Text Area" ></TextArea>
      <CheckBox />
      <InputButton></InputButton>
      <GlobalStyle />

    </Container>
  )
};

export default App;
