export const getStorage = login => {
  if (localStorage.getItem(login) === null) {
    console.log(localStorage.getItem(login));
    console.log('123');
    return [];
  } else {
    console.log('456');
    return JSON.parse(localStorage.getItem(login));
  }
};

export const setStorage = (login, task) => {
  const tasks = getStorage(login);
  localStorage.setItem(login, task);
  tasks.push(JSON.parse(localStorage.getItem(login)));
  localStorage.setItem(login, JSON.stringify(tasks));
};
