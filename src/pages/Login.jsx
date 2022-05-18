import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginData = { email, password };

  async function fetchLogin() {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const respInJs = await res.json();
    console.log(respInJs);
    if (respInJs.success) {
      localStorage.setItem('login_token', respInJs.data);
    }
  }

  function formHandler(e) {
    e.preventDefault();
    console.log(loginData);
    fetchLogin();
  }
  return (
    <Section>
      <form onSubmit={formHandler}>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          labeltext='Email'
          handleChange={(e) => setEmail(e)}
          value={email}
        />
        <Input
          type='Password'
          name='Password'
          placeholder='Password'
          labeltext='Password'
          handleChange={(e) => setPassword(e)}
          value={password}
        />
        <Button type='submit'>login</Button>
      </form>
    </Section>
  );
};

export default Login;
