import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [emailErr, setEmailErr] = useState(false);
  // const [passwordErr, setPasswordErr] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [apiData, setApiData] = useState({});
  const navigate = useNavigate();

  const validateInputs = (e) => {
    e.preventDefault();

    if (email && password) {
      //regex to validate email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      //make a POST request to the API & send user input to the validated
      fetch('http://dev.rapptrlabs.com/Tests/scripts/user-login.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((resData) => {
          setApiData({ ...apiData, ...resData });
          if (resData.user_email === email) {
            navigate('/list');
          }
        })
        .catch((err) => {
          console.log(err);
          setLoginErr(true);
        });
    }
  };

  return (
    <form className='LoginForm' onSubmit={validateInputs} method='post'>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='user@rapptrlabs.com'
        autoComplete=''
        maxLength={50}
        required
      />
      {/* {email && <small>Not a valid Email</small>} */}
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Must be at least 4 characters'
        autoComplete=''
        minLength={4}
        maxLength={16}
        required
      />
      <small id='hidden'></small>
      <button type='submit' disabled={email === '' || password === ''}>
        Login
      </button>
      {loginErr && (
        <small>The server could not be reached. Please try again later.</small>
      )}
    </form>
  );
};

export default LoginForm;
