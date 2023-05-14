import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    setLoading(true); // Set loading state to true

    axios
      .post('https://pink-thankful-oyster.cyclic.app/login', user)
      .then(res => {
        console.log(res);
        navigate('/'); 
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          setError('Invalid email or password. Please try again.');
        } else if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('An error occurred. Please try again later.');
        }
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="input-control">
            <label htmlFor="uname">Username:</label>
            <input
              type="text"
              placeholder="Your email"
              id="username"
              name="uname"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className="input-control">
            <label htmlFor="psw">Password:</label>
            <input
              type="password"
              placeholder="***************"
              id="password"
              name="psw"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;