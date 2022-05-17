import React from 'react';
import TaskList from './TaskList';

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

export default {
  title: 'TaskList',
  component: TaskList,
};

export const primary = () => <TaskList data={data} />;
