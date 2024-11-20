import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginData } from '../store';

function Login() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoginData({ email, password }));
    alert(`Logged in with Email: ${email}`);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Stored Data:</h2>
        <p>Email: {loginData.email}</p>
        <p>Password: {loginData.password}</p>
      </div>
    </div>
  );
}

export default Login;
