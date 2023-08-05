import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '../src/components/TextField';

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = useCallback((data: unknown) => {
    console.log('form is valid', data);
  }, []);

  console.log('SignUpPage running render function', errors);

  return (
    <form
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
      onSubmit={handleSubmit(submitForm)}
    >
      <TextField
        id="email"
        label="Email"
        type="email"
        inputProps={register('email', { required: 'Email is required' })}
        error={errors.email?.message as string}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        inputProps={register('password', { required: 'Password is required' })}
        error={errors.password?.message as string}
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        inputProps={register('confirmPassword', {
          required: 'Confirm Password is required',
        })}
        error={errors.confirmPassword?.message as string}
      />
      <button>Submit</button>
    </form>
  );
}
