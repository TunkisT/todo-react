import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TaskList.style';
import Task from '../Task/Task';

function TaskList({ data }) {
  return (
    <S.TaskList>
      {data.map((obj) => (
        <Task>{obj.title}</Task>
      ))}
    </S.TaskList>
  );
}

TaskList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TaskList;
