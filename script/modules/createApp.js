export const createApp = (app = '#app') => {
  const container = document.querySelector(app);
  container.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

  const title = document.createElement('h3');
  title.textContent = `Todo App -`;
  container.append(title);

  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  form.insertAdjacentHTML(
    'beforeend',
    `
    <label class="form-group me-3 mb-0">
      <input type="text" class="form-control-lg" name="task"
        placeholder="ввести задачу">
    </label>

    <select class="form-select" style="margin-right: 15px;" name="important">
      <option>Обычная</option>
      <option>Важная</option>
      <option>Срочная</option>
    </select>

    <button type="submit" class="btn btn-primary me-3">
      Сохранить
    </button>

    <button type="reset" class="btn btn-warning">
      Очистить
    </button>
  `,
  );
  container.append(form);

  const wrapper = document.createElement('div');
  wrapper.classList.add('table-wrapper');
  container.append(wrapper);

  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  wrapper.append(table);

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
    'afterbegin',
    `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  `,
  );
  table.append(thead);

  const tbody = document.createElement('tbody');
  table.append(tbody);

  return tbody;
};
