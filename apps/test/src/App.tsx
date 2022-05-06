import { Login, LoginData, Button } from "@monorepo/components";
import { FormEvent, useState } from "react";

const login = (event: FormEvent, data: LoginData): void => {
  event.preventDefault();

  console.log(data);
};

const App = () => {
  const [loginData, setLoginData] = useState<LoginData>({} as LoginData);

  return (
    <>
      <h1>Ola mundo</h1>
      <Login
        onSubmit={(event: FormEvent) => login(event, loginData)}
        formState={loginData}
        setFormState={setLoginData}
        submitButtonText="Entrar"
      />
      <Button type="button" onClick={() => console.log("Oi")}></Button>
    </>
  );
};

export default App;
