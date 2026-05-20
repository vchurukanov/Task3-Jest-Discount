# Task 3 — Unit Testing with Jest

## Опис проєкту

Цей проєкт створено для виконання завдання з дисципліни **«Програмна інженерія»**.

Мета роботи — написати набір unit-тестів за допомогою фреймворку **Jest** для перевірки функції розрахунку знижки `calculateDiscount`.

Функція приймає два параметри:

- `price` — ціна товару;
- `customerType` — тип клієнта.

Залежно від типу клієнта функція повертає ціну зі знижкою або без неї.

---

## Умова завдання

Дано функцію розрахунку знижки:

```javascript
function calculateDiscount(price, customerType) {
  if (price < 0) throw new Error("Invalid price");

  if (customerType === "vip") return price * 0.8; // -20%
  if (customerType === "regular") return price * 0.95; // -5%

  return price; // без знижки
}
