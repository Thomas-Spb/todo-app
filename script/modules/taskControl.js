import { getStorage } from './storage.js';

export const taskSuccess = (task, login) => {
  console.log('task: ', task);

  if (task.cells[2].textContent === 'В процессе') {
    task.classList.add('table-success');
    task.classList.remove('table-light', 'table-warning', 'table-danger');
    task.cells[0];
    task.cells[2].textContent = 'Выполнена';
    task.cells[1].classList.add('text-decoration-line-through');

    const data = getStorage(login);
    data.map(item => {
      if (item.task === task.cells[1].textContent) {
        item.status = 'done';
      }
    });
    localStorage.setItem(login, JSON.stringify(data));
    console.log('В процессе');
  } else {
    task.classList.add('table-light', 'table-warning', 'table-danger');
    task.cells[2].textContent = 'В процессе';
    task.cells[1].classList.remove('text-decoration-line-through');

    const data = getStorage(login);
    // console.log('data: ', data);
    data.map(item => {
      if (item.task === task.cells[1].textContent) {
        item.status = 'active';
        console.log(item.status);
      }
    });
    localStorage.setItem(login, JSON.stringify(data));
  }
};

export const taskRemove = (task, number, login) => {
  const data = getStorage(login);
  data.splice(number, 1);
  localStorage.setItem(login, JSON.stringify(data));
  task.remove();
};

export const taskEdit = task => {
  task.cells[1].setAttribute('contenteditable', 'true');
};

export const taskEditSave = (task, number, login) => {
  console.log('task, number, login: ', task, number, login);

  const data = getStorage(login);
  data[number].task = task.cells[1].textContent;
  localStorage.setItem(login, JSON.stringify(data));
};
