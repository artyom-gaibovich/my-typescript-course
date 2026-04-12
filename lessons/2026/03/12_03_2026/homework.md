## 🏠 Домашнее задание

Типизируйте 5 функций из банковской предметной области. Для каждой функции:
1. Добавьте типы всем параметрам
2. Явно укажите возвращаемый тип
3. Убедитесь, что код компилируется без ошибок (`tsc`)

```typescript
// 1. Сортировка клиентов по балансу (по убыванию)
function sortByBalance(clients) {
  return [...clients].sort((a, b) => b.balance - a.balance);
}

// 2. Фильтрация заявок по сумме
function filterByAmount(loans, minAmount) {
  return loans.filter(loan => loan.amount >= minAmount);
}

// 3. Расчёт итоговой суммы выплат
function calcTotalPayment(principal, monthlyRate, months) {
  return principal * monthlyRate * months;
}

// 4. Логирование (ничего не возвращает)
function logEvent(eventName, payload) {
  console.log(`[${new Date().toISOString()}] ${eventName}`, payload);
}

// 5. Проверка лимита кредита
function checkCreditLimit(requestedAmount, clientLimit) {
  return requestedAmount <= clientLimit;
}
```
