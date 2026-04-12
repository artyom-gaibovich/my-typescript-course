### Задание 1. Типизировать функции расчёта

Добавьте аннотации типов параметров и возвращаемых значений к следующим функциям:

```typescript
// До типизации (JavaScript)
function calcInterest(principal, rate, years) {
  return principal * rate * years / 100;
}

function formatAmount(amount) {
  return amount.toFixed(2) + ' ₽';
}

function isEligible(age, income) {
  return age >= 18 && income >= 30000;
}
```

<details>
<summary>Решение</summary>

```typescript
function calcInterest(principal: number, rate: number, years: number): number {
  return (principal * rate * years) / 100;
}

function formatAmount(amount: number): string {
  return amount.toFixed(2) + ' ₽';
}

function isEligible(age: number, income: number): boolean {
  return age >= 18 && income >= 30000;
}
```

</details>

---

### Задание 2. Стрелочные функции

Перепишите те же функции в виде стрелочных с явной типизацией:

```typescript
// Перепишите в стрелочный синтаксис с типами
const calcMonthlyPayment = /* ваш код */ (principal, months, rate) => {
  const monthlyRate = rate / 12 / 100;
  return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
};
```

<details>
<summary>Решение</summary>

```typescript
const calcMonthlyPayment = (
  principal: number,
  months: number,
  rate: number
): number => {
  const monthlyRate = rate / 12 / 100;
  return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
};
```

</details>

---

### Задание 3. Функции с `void`

Напишите две функции:
- `logTransaction` — принимает сумму и тип операции (`'deposit' | 'withdrawal'`), выводит в консоль, ничего не возвращает
- `printSummary` — принимает массив чисел, выводит сумму, ничего не возвращает

```typescript
// Ваш код здесь
function logTransaction(amount, type) {
  // ...
}

function printSummary(amounts) {
  // ...
}
```

<details>
<summary>Решение</summary>

```typescript
function logTransaction(amount: number, type: 'deposit' | 'withdrawal'): void {
  console.log(`[${type.toUpperCase()}] ${amount.toFixed(2)} ₽`);
}

function printSummary(amounts: number[]): void {
  const total = amounts.reduce((sum, n) => sum + n, 0);
  console.log(`Итого: ${total.toFixed(2)} ₽`);
}
```

</details>

---

### Задание 4. Функция с ветвлением

Напишите функцию `calcDiscount`, которая:
- принимает сумму покупки (`amount: number`) и флаг VIP-клиента (`isVip: boolean`)
- возвращает скидку в процентах: `20` если VIP и сумма > 10 000, `10` если VIP, иначе `0`

Явно аннотируйте возвращаемый тип. Убедитесь, что TypeScript не жалуется.

```typescript
function calcDiscount(amount: number, isVip: boolean): number {
  // ваш код
}
```

<details>
<summary>Решение</summary>

```typescript
function calcDiscount(amount: number, isVip: boolean): number {
  if (isVip && amount > 10000) {
    return 20;
  }
  if (isVip) {
    return 10;
  }
  return 0;
}
```