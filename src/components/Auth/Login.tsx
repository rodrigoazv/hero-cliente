import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormDiv } from '../Common/Forms';
import { ApplicationState } from '../../store';
import { sendLoginAction } from '../../store/ducks/user/actions';

interface LoginForm {
  email: string;
  password: string;
}
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Informe um email'),
  password: yup.string().required('Informe uma senha '),
});
const Login: React.FC = () => {
  const { loading } = useSelector((state: ApplicationState) => state.notify);
  const dispatch = useDispatch();
  const initialValues: LoginForm = { email: '', password: '' };

  const login = (values: any) => {
    dispatch(sendLoginAction(values));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => login(values)}
      validationSchema={loginSchema}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <FormDiv>
            <TextField
              variant="outlined"
              type="text"
              name="email"
              size="small"
              label="Informe seu login"
              onChange={handleChange}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
            />
            <span>
              <ErrorMessage name="email" />
            </span>
            <TextField
              variant="outlined"
              type="password"
              size="small"
              name="password"
              label="Informe sua senha"
              onChange={handleChange}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
            />
            <span>
              <ErrorMessage name="password" />
            </span>
            <Button type="submit" disabled={loading} fullWidth>
              Entrar
            </Button>
          </FormDiv>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
