import { useCallback } from 'react';
import { Input } from 'react-daisyui';
import { useForm } from 'react-hook-form';

export default function SignUpPage() {
  const { register, handleSubmit } = useForm();

  const submitForm = useCallback((data: unknown) => {
    console.log('form is valid', data);
  }, []);

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
        <Input color="ghost" id="email" type="text" {...register('email')} />
        <span className="label-text text-error">An error</span>
      </div>
      <button>Submit</button>
    </form>
  );
}
