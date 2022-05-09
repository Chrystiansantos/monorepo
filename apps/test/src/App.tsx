import { Login, LoginData, Button, Select } from "@monorepo/components";
import { FormEvent, useState } from "react";

const login = (event: FormEvent, data: LoginData): void => {
  event.preventDefault();

  console.log(data);
};
const App = () => {
  const [loginData, setLoginData] = useState<LoginData>({} as LoginData);
  const [first, setfirst] = useState('')

  const options = [
    {
      label: 'Audi',
      value: '1',
    },
    {
      label: 'BMW',
      value: '2',
    },
    {
      label: 'Citroen',
      value: '3',
    },
    {
      label: 'Ford',
      value: '4',
    },
    {
      label: 'Honda',
      value: '5',
    },
    {
      label: 'Jaguar',
      value: '6',
    },
  ]

  const handleButton = () => {
    console.log('oi')
  }

  return (
    <>
      <h1>Ola mundo</h1>
      <Login
        onSubmit={(event: FormEvent) => login(event, loginData)}
        formState={loginData}
        setFormState={setLoginData}
        submitButtonText="Entrar"
      />
      <Select label="Selecione" options={options} onChangeValue={setfirst} value={first} />
      <Button onClick={()=> console.log('oi')}>Ola mundo</Button>
      <Button bgButton="#212529" onClick={()=> console.log('oi2')} >Ola mundo 2</Button>
    </>
  )

};

export default App;
