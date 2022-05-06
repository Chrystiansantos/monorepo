import { Login, LoginData, Button } from "@monorepo/components";
import { FormEvent, useState } from "react";

const login = (event: FormEvent, data: LoginData): void => {
  event.preventDefault();

  console.log(data);
};
const App = () => {
  const [loginData, setLoginData] = useState<LoginData>({} as LoginData);

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
      <Button onClick={()=> console.log('oi')}>Ola mundo</Button>
      <Button bgButton="#212529" onClick={()=> console.log('oi')} >Ola mundo 2</Button>
    </>
  )

};

export default App;
