import { createRow } from './createElements.js';
import { tbody } from './elements.js';

export const render = data => {
  //   console.log(data);
  //   const nameTitle = 'Thomas';
  //   createApp(app, nameTitle);
  data.forEach((task, index) => {
    console.log('task: ', task);

    createRow(task, index + 1);
  });
  //   createRow(data);
};

export const tasksNumberChange = () => {
  const tasks = tbody.querySelectorAll('tr');
  tasks.forEach((item, index) => {
    item.cells[0].textContent = `${index + 1}`;
  });
};
