export const overlay = () => {
  const modalWrapper = document.createElement('div');
  const modal = document.createElement('div');
  const modalTitle = document.createElement('h2');
  const modalForm = document.createElement('form');
  modalWrapper.classList.add('overlay');
  modalWrapper.style = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
    `;
  document.body.append(modalWrapper);
  modal.style = `
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 200px;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
    `;
  modalWrapper.append(modal);
  modalTitle.textContent = 'Введите ваше имя';
  modal.append(modalTitle);
  modalForm.classList.add('modal-form');
  modalForm.insertAdjacentHTML(
    'afterbegin',
    `
      <label for="modalName"></label>
      <input name="modalName" id="modalName" type="text"
        placeholder="Имя" required>
      <button class="btn-primary" type="submit">Войти</button>
    `,
  );
  modal.append(modalForm);

  return modalWrapper;
};
