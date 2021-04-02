import React from 'react';
import { Form, Field, Formik } from 'formik';
import { Button, FormDiv, InputText } from '../Common/Forms';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const initialValues: LoginForm = { email: '', password: '' };
  const loading = false;

  const login = (values: any) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => login(values)}>
      <Form>
        <FormDiv>
          <Field id="login" name="email" placeholder="Email" as={InputText} />
          <span />
          <Field
            type="password"
            name="password"
            placeholder="Senha"
            as={InputText}
          />
          <span />
          <Button type="submit" disabled={loading}>
            Entrar
          </Button>
        </FormDiv>
      </Form>
    </Formik>
  );
};

export default Login;
