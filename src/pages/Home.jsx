import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';
import TaskList from '../components/TaskList/TaskList';
const data = [
  {
    id: 1,
    title: 'Todo task1',
  },
  {
    id: 1,
    title: 'Todo task2',
  },
  {
    id: 1,
    title: 'Todo task3',
  },
];

const Home = () => {
  const [task, setTask] = useState('');

  function formHandler(e) {
    e.preventDefault();
    console.log(task);
  }
  return (
    <Section>
      <TaskList data={data} />
      <form onSubmit={formHandler}>
        <Input
          type='text'
          name='email'
          placeholder='New task'
          labeltext='Enter new task'
          handleChange={(e) => setTask(e)}
          value={task}
        />
        <Button type='submit'>add</Button>
      </form>
    </Section>
  );
};

export default Home;
