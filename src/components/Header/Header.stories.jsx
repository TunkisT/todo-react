import React from 'react';
import Header from './Header';

const data = [
  {
    title: 'Login',
    link: '/login',
  },
  {
    title: 'Register',
    link: '/register',
  },
];

export default {
  title: 'Header',
  component: Header,
};

export const primary = () => <Header data={data} />;
