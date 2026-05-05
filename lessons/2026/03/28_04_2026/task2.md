### Задание 1. Функция логирования с narrowing

Напишите функцию `logValue`, которая принимает `string | number | boolean` и:
- для строк — выводит в верхнем регистре
- для чисел — выводит с двумя знаками после запятой
- для булевых — выводит `"Да"` или `"Нет"`

```typescript
// Стартовый код
function logValue(value: string | number | boolean): void {
  // TODO: используй typeof для сужения типов
}

logValue("hello");  // → "HELLO"
logValue(3.14159);  // → "3.14"
logValue(true);     // → "Да"
logValue(false);    // → "Нет"
```

---

### Задание 2. Literal Types для статусов заявки

Объявите тип `LoanStatus` через Literal Types (не Enum). Напишите функцию `getStatusLabel`, которая принимает `LoanStatus` и возвращает человекочитаемую строку.

```typescript
// TODO: объявить тип LoanStatus
// Допустимые значения: "pending", "approved", "rejected", "cancelled"

// TODO: реализовать функцию
function getStatusLabel(status: LoanStatus): string {
  // ...
}

console.log(getStatusLabel("approved"));   // → "Одобрена"
console.log(getStatusLabel("rejected"));   // → "Отклонена"
console.log(getStatusLabel("pending"));    // → "На рассмотрении"
console.log(getStatusLabel("cancelled")); // → "Отменена"
// getStatusLabel("unknown") — должна быть ошибка TypeScript
```

---

### Задание 3. Type Alias для банковской сущности

Создайте Type Alias `BankClient` и `LoanRequest`. Используйте Intersection для добавления полей `id` и `createdAt`.

```typescript
// TODO: создать базовый тип WithMeta
// id: number, createdAt: Date

// TODO: создать тип BankClient
// name: string, email: string, creditScore: number

// TODO: создать тип LoanRequest
// clientId: number, amount: number, termMonths: number, status: LoanStatus

// Оба типа должны содержать поля из WithMeta через intersection

// Пример использования:
const client: BankClient = {
  id: 1,
  createdAt: new Date(),
  name: "Мария Иванова",
  email: "maria@example.com",
  creditScore: 720,
};

const loan: LoanRequest = {
  id: 101,
  createdAt: new Date(),
  clientId: 1,
  amount: 150000,
  termMonths: 24,
  status: "pending",
};
```

---

### Задание 4. Discriminated Union для ответа банковского API

Смоделируйте ответ API перевода средств. Эндпоинт принимает запрос и возвращает один из трёх вариантов.

```typescript
// Запрос на перевод
type TransferRequest = {
  fromAccountId: number;
  toAccountId: number;
  amount: number;
};

// TODO: создать тип TransferSuccess
// status: "success", transactionId: string, processedAt: Date

// TODO: создать тип TransferFailed
// status: "failed", errorCode: number, reason: string

// TODO: создать тип TransferPending
// status: "pending", estimatedTime: number (секунды)

// TODO: объединить в TransferResponse через Union

// TODO: реализовать функцию handleTransfer
function handleTransfer(response: TransferResponse): void {
  // Используй сужение по полю status
  // success → выведи transactionId
  // failed → выведи errorCode и reason
  // pending → выведи estimatedTime
}

// Тесты:
handleTransfer({ status: "success", transactionId: "TXN-001", processedAt: new Date() });
handleTransfer({ status: "failed", errorCode: 403, reason: "Недостаточно средств" });
handleTransfer({ status: "pending", estimatedTime: 30 });
```

---

## 🏠 Домашнее задание

Типизируйте ответы банковского сервера через Union-типы.

Есть три эндпоинта. Для каждого создайте запрос и все возможные варианты ответа.

**1. Получение баланса счёта** `GET /accounts/:id/balance`

- Успех: `{ status: "ok", accountId: number, balance: number, currency: "RUB" | "USD" | "EUR" }`
- Счёт не найден: `{ status: "not_found", accountId: number }`
- Ошибка сервера: `{ status: "error", message: string }`

**2. Создание кредитной заявки** `POST /loans`

- Принята: `{ status: "accepted", loanId: number, reviewDeadline: Date }`
- Отклонена сразу: `{ status: "rejected", reasons: string[] }`
- Требует документы: `{ status: "documents_required", requiredDocs: string[] }`

**3. Список транзакций** `GET /accounts/:id/transactions`

- Успех с данными: `{ status: "ok", transactions: Transaction[], total: number }`
- Пустой список: `{ status: "empty" }`
- Нет доступа: `{ status: "forbidden", message: string }`

Для каждого эндпоинта напишите функцию-обработчик с полным narrowing по `status`.