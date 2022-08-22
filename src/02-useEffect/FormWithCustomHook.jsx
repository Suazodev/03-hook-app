import { useForm } from '../hooks/useForm';

export const CustomHookForm = () => {
  const { handleInputChange, onResetForm, username, email, password } = useForm(
    { username: '', email: '', password: '' }
  );

  return (
    <>
      <h1>Custom Hook Form</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={handleInputChange}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='test@test.com'
        name='email'
        value={email}
        onChange={handleInputChange}
      />
      <input
        type='password'
        className='form-control mt-2'
        placeholder='Password'
        name='password'
        value={password}
        onChange={handleInputChange}
      />

      <button className='btn btn-danger mt-2' onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};
