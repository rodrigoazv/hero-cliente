import React from 'react';
import { Form, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, FormDiv, InputText } from '../Common/Forms';
import { sendRegisterAction } from '../../store/ducks/user/actions';

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
interface RegisterForm {
  email: string;
  password: string;
}
const Register: React.FC = () => {
  const dispatch = useDispatch();
  const initialValues: RegisterForm = { email: '', password: '' };
  const register = (values: any) => {
    dispatch(sendRegisterAction(values));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => register(values)}
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
};
export default Register;
