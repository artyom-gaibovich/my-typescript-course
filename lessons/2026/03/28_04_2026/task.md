### Задание 1. Создать enum статусов кредитной заявки

Реализуйте enum для статусов заявки и функцию, которая выводит текстовое описание.

```typescript
// TODO: объявите enum LoanStatus со значениями:
// PENDING = "PENDING", APPROVED = "APPROVED", REJECTED = "REJECTED"

// TODO: напишите функцию getStatusDescription(status: LoanStatus): string
// которая возвращает:
// PENDING  → "Заявка на рассмотрении"
// APPROVED → "Заявка одобрена"
// REJECTED → "Заявка отклонена"

// Проверьте вызов:
// console.log(getStatusDescription(LoanStatus.APPROVED)); // "Заявка одобрена"
```

**Ожидаемое решение:**

```typescript
enum LoanStatus {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

function getStatusDescription(status: LoanStatus): string {
  switch (status) {
    case LoanStatus.Pending:  return "Заявка на рассмотрении";
    case LoanStatus.Approved: return "Заявка одобрена";
    case LoanStatus.Rejected: return "Заявка отклонена";
  }
}

console.log(getStatusDescription(LoanStatus.Approved)); // "Заявка одобрена"
```

---

### Задание 2. Enum для приоритетов и числовое сравнение

Создайте числовой enum для приоритета обработки заявки и функцию фильтрации.

```typescript
// TODO: объявите числовой enum Priority:
// Low = 1, Medium = 2, High = 3

// TODO: напишите функцию filterByMinPriority(
//   applications: Array<{ id: number; priority: Priority }>,
//   minPriority: Priority
// ): Array<{ id: number; priority: Priority }>
// Функция должна вернуть только заявки с priority >= minPriority

const applications = [
  { id: 1, priority: Priority.Low },
  { id: 2, priority: Priority.High },
  { id: 3, priority: Priority.Medium },
];

// filterByMinPriority(applications, Priority.Medium) → [{ id: 2, ... }, { id: 3, ... }]
```

---

### Задание 3. Readonly-кортеж для записи о клиенте

Объявите тип `ClientRecord` как readonly tuple и убедитесь, что TypeScript не даёт его изменить.

```typescript
// TODO: объявите тип ClientRecord = readonly [id: number, name: string, creditScore: number]

// Создайте клиента
const client: ClientRecord = [101, "Пётр Сидоров", 720];

// TODO: попробуйте изменить элемент и убедитесь, что TypeScript выдаёт ошибку
// client[2] = 800; // должна быть ошибка

// TODO: деструктурируйте запись и выведите в консоль
// "Клиент #101 Пётр Сидоров, кредитный рейтинг: 720"
```

---

### Задание 4. Readonly-массив конфигурации

Создайте массив допустимых статусов для перехода из состояния "PENDING" и защитите его от изменения.

```typescript
// TODO: объявите readonly массив allowedTransitions, содержащий
// статусы, в которые можно перейти из PENDING: [LoanStatus.Approved, LoanStatus.Rejected]

// TODO: напишите функцию canTransition(
//   current: LoanStatus,
//   next: LoanStatus,
//   allowed: readonly LoanStatus[]
// ): boolean

// Проверьте:
// canTransition(LoanStatus.Pending, LoanStatus.Approved, allowedTransitions) → true
// canTransition(LoanStatus.Pending, LoanStatus.Pending, allowedTransitions)  → false
```

