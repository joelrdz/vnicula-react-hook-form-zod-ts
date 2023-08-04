import { useCallback } from 'react';
import { Input } from 'react-daisyui';
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
      <div className="form-control w-full max-w-xs">
        <label htmlFor="email" className="label">
          <span className="label-text">email</span>
        </label>
        <Input
          color="ghost"
          id="email"
          type="text"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email?.message ? (
          <span className="label-text text-error">
            {errors.email.message as string}
          </span>
        ) : null}
      </div>
      <TextField />
      <button>Submit</button>
    </form>
  );
}
