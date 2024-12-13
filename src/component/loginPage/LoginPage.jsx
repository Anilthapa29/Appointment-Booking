import '../../App.css';
import userdetails from '../../userdetails';
import './LoginPage.css';
import { useEffect, useRef, useState } from 'react';

export default function LoginPage({ setLoggedin, setLoggedinUserInfo }) {
  const usernameRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit');
    const loggedInUser = loginUser(username, password);
    console.log(loggedInUser);
    if (loggedInUser == null) {
      setErrMsg('Incorrect password');
    } else {
      setLoggedinUserInfo({
        id: loggedInUser.id,
        name: loggedInUser.name,
        isLoggedIn: true,
      });
      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          id: loggedInUser.id,
          name: loggedInUser.name,
          isLoggedIn: true,
        })
      );
      setLoggedin(true);
      setErrMsg('');
    }
  };
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="loginpage">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__controls">
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errMsg && <div className="error-message"> {errMsg} </div>}
        <div className="form__controls">
          <button className="button">Login</button>
        </div>
      </form>
    </div>
  );
}

function loginUser(username, password) {
  return userdetails.find((user) => {
    if ((user.username === username) & (user.password === password)) {
      console.log(user);
      return user;
    }
  });
}
