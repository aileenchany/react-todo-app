import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  /* testEmail & testPassword are for testing purposes only */
  const testEmail = 'test@rapptrlabs.com';
  const testPassword = 'Test123';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateInputs = (e) => {
    e.preventDefault();

    if (email === testEmail && password === testPassword) {
      navigate('/list');
    } else if (email !== testEmail || password !== testPassword) {
      const hidden = document.getElementById('hidden');
      hidden.textContent = 'Incorrect email or password';
    }
  };

  return (
    <form className='LoginForm' onSubmit={validateInputs}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        aria-label='Email field'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='user@rapptrlabs.com'
        autoComplete=''
        required
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        name='password'
        aria-label='Password field'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
        placeholder='Must be at least 4 characters'
        autoComplete=''
        minLength={4}
        required
      />
      <small id='hidden'></small>
      <button type='submit' disabled={email === '' || password === ''}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
