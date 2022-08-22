import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Suazo',
    email: 'suazodev@gmail.com',
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Simple Form</h1>
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
      {username === 'Suazo' && <Message />}
    </>
  );
};
