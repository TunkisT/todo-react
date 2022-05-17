import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const primary = () => (
  <Input type='text' name='email' placeholder='email' labeltext='email' />
);
