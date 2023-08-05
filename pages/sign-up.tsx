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
        label="email"
        type="email"
        inputProps={register('email', { required: 'Email is required' })}
      />
      <button>Submit</button>
    </form>
  );
}
