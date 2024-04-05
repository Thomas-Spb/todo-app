import { form, input, table, tbody } from './elements.js';
import { getStorage, setStorage } from './storage.js';
import { createRow } from './createElements.js';
import { taskSuccess, taskRemove, taskEdit, taskEditSave } from './taskControl.js';
import { tasksNumberChange } from './render.js';

export const events = (data, login) => {
  //   console.log(form);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    newTask.status = 'active';
    data.push(newTask);
    createRow(newTask, getStorage(login).length + 1);
    setStorage(login, JSON.stringify(newTask));
    form.reset();
    document.querySelector('.btn-primary').setAttribute('disabled', 'disabled');
  });
  document.querySelector('.btn-primary').setAttribute('disabled', 'disabled');
  input.addEventListener('input', e => {
    if (input.value === '') {
      document.querySelector('.btn-primary').setAttribute('disabled', 'disabled');
    } else {
      document.querySelector('.btn-primary').removeAttribute('disabled', 'disabled');
    }
  });
  table.addEventListener('click', e => {
    const target = e.target;
    const tasks = [...tbody.rows];
    if (target.closest('.btn-success')) {
      tasks.forEach(item => {
        if (target.closest('tr') === item) {
          taskSuccess(item, login);
        }
      });
    }
    if (target.closest('.btn-danger')) {
      tasks.forEach((item, index) => {
        if (target.closest('tr') === item) {
          const agree = confirm('Действительно хотите удалить задачу?');
          if (agree) {
            taskRemove(item, index, login);
          }
        }
      });
    }
    if (target.closest('.btn-edit')) {
      tasks.forEach(item => {
        if (target.closest('tr') === item) {
          taskEdit(item);
        }
      });
    }
    tasksNumberChange();
  });
  const tasks = [...tbody.rows];
  tasks.forEach((item, index) => {
    item.cells[1].addEventListener('blur', () => {
      taskEditSave(item, index, login);
    });
  });
};
