console.log("Завдання: 9 ==============================");

function task9() {
  const errorMessage = new Error("Помилка при з'єднанні з сервером");
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  function fetchWithError() {
    return Promise.reject(errorMessage);
  }
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  fetchWithError()
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error);
    })
}

// Викликаємо функцію task10
task9();
