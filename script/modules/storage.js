export const getStorage = login => {
  if (localStorage.getItem(login) === null) {
    console.log(localStorage.getItem(login));
    return [];
  } else {
    return JSON.parse(localStorage.getItem(login));
  }
};

export const setStorage = (login, task) => {
  const tasks = getStorage(login);
  localStorage.setItem(login, task);
  tasks.push(JSON.parse(localStorage.getItem(login)));
  localStorage.setItem(login, JSON.stringify(tasks));
};
