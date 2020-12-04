import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form';
import Form from '../../containers/Form/Form'
import ILoginForm from './ILoginForm';

export default function LoginForm() {
  const { handleSubmit, errors, register } = useForm<ILoginForm>({mode: 'onChange'});

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };

  const Submit = <Button type="submit" color="primary" variant="contained" onClick={handleSubmit(onSubmit)}>Submit</Button>;

  const emailRegisterConfig = {
    required: 'Required',
    pattern: {
      value: /\s|\S/,
      message: 'Incorrect Format'
    }
  };

  const passwordRegisterConfig = {
    required: 'Required',
    minLength: {
      value: 6,
      message: 'Password is too short'
    }
  };

  return (
    <Form title="Login" buttons={Submit}>
      <TextField name="email" type="email" label="Email" inputRef={register(emailRegisterConfig)}/>
      <TextField name="password" type="password" label="Password" inputRef={register(passwordRegisterConfig)}/>
    </Form>
  )
}
