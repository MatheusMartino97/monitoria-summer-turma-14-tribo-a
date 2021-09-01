import React, { Component } from 'react';

export default class AddTask extends Component {
  handleTaskSubmit() {
    const title = window.prompt('Título');
    const task = window.prompt('Tarefa');

    const taskInfo = {
      title,
      task,
    }

    const currentTaskList = JSON.parse(localStorage.getItem('task-list'));
    const newTaskList = [...currentTaskList, taskInfo]

    localStorage.setItem('task-list', JSON.stringify(newTaskList));
  }

  render() {
    return (
      <form id="add-task" onSubmit={this.handleTaskSubmit}>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    );
  }
}
