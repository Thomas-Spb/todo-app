// import { modalForm } from './modules/elements.js';
import { events } from './modules/events.js';
import { getStorage, setStorage } from './modules/storage.js';
import { render } from './modules/render.js';
import { modalForm } from './modules/elements.js';

{
  const data = [
    { number: 0, task: 'fasdf4214asdf', status: 'active', important: 'Важная' },
    // { number: 1, task: 'task 2', status: 'finish', important: 'Важная' },
    // { number: 2, task: 'fasdf4214asdf', status: 'active', important: 'Срочная' },
    // { number: 3, task: 'task 2', status: 'finish' },
    // { number: 4, task: 'task 2', status: 'active' },
  ];

  const init = login => {
    render(getStorage(login));

    // render(data);
    events(data, login);
    // setStorage(login);
  };

  modalForm.addEventListener('submit', e => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    // console.log('formData: ', formData);
    const login = Object.fromEntries(formData).modalName;
    console.log('login: ', login);
    modalForm.parentElement.parentElement.style.display = 'none';
    // setStorage(login);
    init(login);
  });
  //   init('thomas');
}
