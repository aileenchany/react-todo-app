const LoginForm = () => {
  return (
    <form className='LoginForm'>
      <label for='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        z
        placeholder='user@rapptrlabs.com'
        required
      />
      <label for='password'>Password</label>
      <input
        type='password'
        id='password'
        name='password'
        placeholder='Must be at least 4 characters'
        maxLength={4}
        required
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
