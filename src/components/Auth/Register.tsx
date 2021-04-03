import React from 'react';
import { Form, Field, Formik } from 'formik';
import { Button, FormDiv, InputText } from '../Common/Forms';

/*
  Componentes styles
*/
/*
  Componentes props
*/

/*
  MAIN
  @TEX
*/
const Register: React.FC = () => (
  <Formik
    initialValues={{
      login: '',
      password: '',
    }}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <FormDiv>
        <Field
          required
          type="password"
          name="login"
          placeholder="Qual seu @"
          component={InputText}
        />
        <span />
        <Field
          required
          name="login"
          placeholder="Email"
          component={InputText}
        />
        <span />
        <Field
          required
          name="login"
          placeholder="Senha"
          component={InputText}
        />
        <span />
        <Field
          required
          type="password"
          name="login"
          placeholder="Primeiro nome"
          component={InputText}
        />
        <span />
        <Field
          required
          type="password"
          name="login"
          placeholder="Ultimo nome"
          component={InputText}
        />
        <span />
        <Field
          required
          type="password"
          name="login"
          placeholder="Nascimento"
          component={InputText}
        />
        <span />

        <Button fullWidth>Entrar</Button>
      </FormDiv>
    </Form>
  </Formik>
);

export default Register;
