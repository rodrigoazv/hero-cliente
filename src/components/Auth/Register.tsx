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
          name="login"
          placeholder="Teste"
          component={InputText}
        />
        <span />
        <Field
          required
          name="login"
          placeholder="Teste"
          component={InputText}
        />
        <span />
        <Field
          required
          type="password"
          name="login"
          placeholder="Teste"
          component={InputText}
        />
        <span />
        <Button>Entrar</Button>
      </FormDiv>
    </Form>
  </Formik>
);

export default Register;
