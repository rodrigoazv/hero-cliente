/* eslint-disable react/require-default-props */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useHistory } from 'react-router';
import { Button, FormDiv } from '../Common/forms';
import {
  sendRegisterAction,
  sendUpdateAction,
} from '../../store/ducks/user/actions';
import { ApplicationState } from '../../store';
import { User } from '../../store/ducks/user/types';
/*
  Componentes styles
*/

/*
  Componentes props
*/
// eslint-disable-next-line no-unused-vars
const registerSchema = yup.object().shape({
  email: yup.string().email().required('Informe um email'),
  firstName: yup.string().required('Informe seu primeiro nome'),
  lastName: yup.string().required('Informe seu ultimo nome'),
  nickName: yup.string().required('Informe um nickname'),
  password: yup.string().required('Informe uma senha '),
  birthDay: yup
    .date()
    .max(
      '2003-01-01T00:00:00.000Z',
      'Ainda não permitimos essa idade selecione algo antes de 2003',
    )
    .default(() => new Date())
    .required('Selecione uma data'),
});
/*
  MAIN
  @TEX
*/

interface Props {
  isUpdate?: boolean;
}

const Register: React.FC<Props> = ({ isUpdate }: Props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: ApplicationState) => state.notify);
  const { userData } = useSelector((state: ApplicationState) => state.user);
  const history = useHistory();
  const initialValues: User = {
    email: isUpdate ? userData.email : '',
    password: '',
    nickName: isUpdate ? userData.nickName : '',
    firstName: isUpdate ? userData.firstName : '',
    lastName: isUpdate ? userData.lastName : '',
    birthDay: isUpdate ? userData.birthDay : new Date(),
  };
  const register = (values: User) => {
    dispatch(sendRegisterAction(values));
    if (localStorage.getItem('@authorization') !== '') {
      history.push('/home');
    }
  };
  const update = (values: User) => {
    dispatch(sendUpdateAction(values));
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: User) =>
          isUpdate ? update(values) : register(values)
        }
        validationSchema={registerSchema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormDiv>
              <TextField
                variant="outlined"
                type="text"
                name="nickName"
                size="small"
                label="Escolha um nickname, ex.(batman10)"
                onChange={handleChange}
                value={values.nickName}
                error={touched.nickName && Boolean(errors.nickName)}
              />
              <span>
                <ErrorMessage name="nickName" />
              </span>

              <TextField
                variant="outlined"
                type="text"
                size="small"
                name="firstName"
                disabled={isUpdate}
                label="Qual seu primeiro nome ?"
                onChange={handleChange}
                value={values.firstName}
                error={touched.firstName && Boolean(errors.firstName)}
              />
              <span>
                <ErrorMessage name="firstName" />
              </span>

              <TextField
                variant="outlined"
                type="text"
                size="small"
                name="lastName"
                disabled={isUpdate}
                label="Qual seu ultimo nome ?"
                onChange={handleChange}
                value={values.lastName}
                error={touched.lastName && Boolean(errors.lastName)}
              />
              <span>
                <ErrorMessage name="lastName" />
              </span>

              <TextField
                variant="outlined"
                type="email"
                size="small"
                name="email"
                label="Qual seu e-mail ?"
                disabled={isUpdate}
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
                label={
                  isUpdate
                    ? 'Digite sua senha'
                    : 'Escolha uma senha beeem segura'
                }
                onChange={handleChange}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
              />
              <span>
                <ErrorMessage name="password" />
              </span>

              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                size="small"
                format="dd/MM/yyyy"
                margin="normal"
                name="birthDay"
                disabled={isUpdate}
                id="date-picker-inline"
                label="Selecione uma data"
                inputVariant="outlined"
                value={values.birthDay}
                onChange={(value) => setFieldValue('birthDay', value)}
                error={touched.birthDay && Boolean(errors.birthDay)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <span>
                <ErrorMessage name="birthDay" />
              </span>

              <Button type="submit" fullWidth disabled={loading}>
                {isUpdate ? 'Salvar' : 'Registrar'}
              </Button>
            </FormDiv>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
};
export default Register;
