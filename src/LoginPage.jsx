import { useDispatch } from 'react-redux';
import { updateLoginFields } from './store';

export default function LoginPage({ email, password }) {
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(updateLoginFields({ name, value }));
  }

  function handleClick() {
    // TODO : 로그인 처리 api 를 호출한다.
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="login-email">email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          id="login-email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          id="login-password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
      >
        Log In
      </button>
    </div>
  );
}
