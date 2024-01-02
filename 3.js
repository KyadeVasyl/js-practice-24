console.log("Завдання: 3 ==============================");

// Створюємо функцію task3, в якій буде виконуватися завдання
function task3() {
  // Створюємо функцію promise1, яка створює і повертає новий проміс
  // Метод new Promise приймає в якості параметра функцію (executor), яка має два параметри: resolve і reject.
  // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 1 секунду
  // Викликаємо resolve з рядком 'Проміс 1 виконано', що означає успішне вирішення проміса
  function promise1() {
    return new Promise(function executor(resolve, reject) {
      setTimeout(() => {
        resolve("Проміс 1 виконано")
      }, 1000)
    })
  }
  // Створюємо функцію promise2, яка створює і повертає новий проміс, який відхиляється
  // Використовуємо setTimeout для імітації асинхронної операції, яка не вдається і відхиляє проміс через 2 секунди
  // Викликаємо reject з рядком 'Проміс 2 відхилено', що означає відхилення проміса
  function promise2() {
    return new Promise(function executor(resolve, reject) {
      setTimeout(() => {
        reject("Проміс 2 виконано")
      }, 2000)
    })
  }
  // Використовуємо Promise.allSettled який приймає масив промісів і повертає новий проміс, який вирішується, коли всі проміси вирішено або відхилено
  // Він повертає масив об'єктів, кожний з яких відображає стан кожного проміса
  // Функція then викликається, коли проміс вирішено
  // Вона приймає результати промісів і обробляє їх
  // Для кожного результату виводимо статус проміса
  // Функція finally викликається після того, як проміс вирішено або відхилено
  // Вона використовується для виконання дій, які повинні виконуватися незалежно від того, чи було проміс вирішено чи відхилено
  // В нашому випадку ми просто виводимо повідомлення, "Завдання 3 завершено"
  Promise.allSettled([promise1(), promise2()])
    .then((result) => {
      result.forEach((elem, index) => {
        if (elem.status === 'fulfilled') {
          console.log(`Проміс ${index + 1}: 'fulfilled'`)
        } else if (elem.status === 'rejected') {
          console.log(`Проміс ${index + 1}: 'rejected'`)
        }
      })
    })
    .finally(() => {
      console.log("Завдання 3 завершено")
    })
}

// Викликаємо функцію task3
task3();
