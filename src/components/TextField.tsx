import { Input } from 'react-daisyui';

export const TextField = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor="password" className="label">
        <span className="label-text">password</span>
      </label>
      <Input
        color="ghost"
        id="password"
        type="password"
        // {...register('password', { required: 'Password is required' })}
      />
      {/* {errors.password?.message ? (
        <span className="label-text text-error">
          {errors.password.message as string}
        </span>
      ) : null} */}
    </div>
  );
};
