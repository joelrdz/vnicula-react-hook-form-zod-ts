import { Input } from 'react-daisyui';

interface TextFieldProps {
  id: string;
  label: string;
  type?: string;
}

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor={props.id} className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <Input
        color="ghost"
        id={props.id}
        type={props.type ?? 'text'}
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
