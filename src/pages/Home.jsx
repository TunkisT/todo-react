import React from 'react';
import Section from '../components/Section/Section';
import TaskList from '../components/TaskList/TaskList';
const data = [
  {
    id: 1,
    title: 'Todo task',
  },
  {
    id: 1,
    title: 'Todo task',
  },
  {
    id: 1,
    title: 'Todo task',
  },
];

const Home = () => {
  return (
    <Section>
      <TaskList data={data} />
    </Section>
  );
};

export default Home;
