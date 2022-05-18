import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TaskList.style';
import Task from '../Task/Task';

function TaskList({ data }) {
  return (
    <S.TaskList>
      {data.map((obj) => (
        <Task key={obj.id}>{obj.description}</Task>
      ))}
    </S.TaskList>
  );
}

TaskList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TaskList;
