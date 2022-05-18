import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerData = { email, password };

  async function fetchLogin() {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });
    const data = await res.json();
    console.log(data);
  }

  function formHandler(e) {
    e.preventDefault();
    console.log(registerData);
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
        <Button type='submit'>register</Button>
      </form>
    </Section>
  );
};

export default Register;
