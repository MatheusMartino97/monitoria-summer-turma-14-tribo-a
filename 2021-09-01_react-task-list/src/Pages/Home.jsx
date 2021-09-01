import React, { Component } from 'react';
import AddTask from '../Components/AddTask';
import Task from '../Components/Task';

export default class Home extends Component {
  render() {
    if (!localStorage.getItem('task-list'))
      localStorage.setItem('task-list', JSON.stringify([]));

    const taskList = JSON.parse(localStorage.getItem('task-list'));

    return (
      <>
        <AddTask />
        <form>
          <button
            type="submit"
            onClick={() => {
              localStorage.setItem('task-list', JSON.stringify([]));
            }}
          >
            Limpar
          </button>
        </form>
        <ul>
          {taskList.map((taskInfo, index) => (
            <Task {...taskInfo} key={index} />
          ))}
        </ul>
      </>
    );
  }
}
