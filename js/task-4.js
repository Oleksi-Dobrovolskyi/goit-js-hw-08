
// Знаходимо форму
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit
loginForm.addEventListener('submit', (event) => {
  // Зупиняємо перезавантаження сторінки
  event.preventDefault();

  // Отримуємо всі елементи форми через властивість elements
  const { email, password } = event.target.elements;

  // Очищаємо значення від пробілів
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Формуємо об'єкт з даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо дані в консоль
  console.log(formData);

  // Очищаємо форму
  loginForm.reset();
});
