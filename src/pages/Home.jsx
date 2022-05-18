import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';
import TaskList from '../components/TaskList/TaskList';

const Home = () => {
  const [task, setTask] = useState('');
  const [validate, setValidate] = useState(false);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const taskData = {
    user_id: 100,
    description: task,
  };

  async function getTask() {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('login_token')}`,
      },
    });
    const resInJs = await res.json();
    console.log('resInJs ===', resInJs);
    if (resInJs.success) {
      setFetchData(resInJs.data);
      setValidate(true);
    }
  }

  async function fetchTask() {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('login_token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    const data = await res.json();
    console.log('data ===', data);
  }

  function formHandler(e) {
    e.preventDefault();
    console.log(task);
    fetchTask();
    getTask();
  }
  if (!validate) {
    return (
      <Section>
        <h1>SESSION TIMEOUT</h1>
      </Section>
    );
  }
  if (validate) {
    return (
      <Section>
        <TaskList data={fetchData} />
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
  }
};

export default Home;
