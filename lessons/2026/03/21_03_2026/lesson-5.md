# Урок 5. Объекты: inline-тип, readonly, опциональные поля. Arrays и Tuples

## 🎯 Цели урока
- Научиться типизировать объекты inline прямо в месте использования
- Понять разницу между обязательными и опциональными полями
- Использовать модификатор `readonly` для защиты данных
- Освоить типизацию массивов и кортежей (tuples)

---

## 📚 Теория

### Типизация объектов

В TypeScript объект можно типизировать прямо там, где он используется — это называется **inline-тип**. Синтаксис похож на запись самого объекта, только вместо значений — типы.

```typescript
function getFullName(user: { firstName: string; lastName: string }): string {
  return `${user.firstName} ${user.lastName}`;
}

const client = {
  firstName: 'Иван',
  lastName: 'Петров',
  city: 'Москва',
};

// Передаём объект, который "шире" типа — это допустимо в TypeScript
console.log(getFullName(client)); // Иван Петров
```

> TypeScript проверяет, что переданный объект содержит **все необходимые поля**. Дополнительные поля — допустимы. Отсутствие обязательных — ошибка.

```typescript
// Ошибка: отсутствует поле firstName
getFullName({ lastName: 'Петров' });
// Argument of type '{ lastName: string }' is not assignable...
```

**Вложенные объекты** типизируются аналогично:

```typescript
function printSkills(user: {
  name: string;
  skills: {
    development: boolean;
    devOps: boolean;
  };
}): void {
  console.log(user.name, user.skills.development);
}
```

---

### Опциональные поля

Поле помечается как необязательное с помощью `?`. Если оно не передано, TypeScript считает его `undefined`.

```typescript
type BankClient = {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;     // необязательное
  phone?: string;          // необязательное
  email: string;
};

const client: BankClient = {
  id: 1,
  firstName: 'Иван',
  lastName: 'Петров',
  email: 'ivan@example.com',
  // middleName и phone можно не передавать
};
```

При работе с опциональным полем TypeScript напомнит, что значение может быть `undefined`:

```typescript
function greet(client: BankClient): string {
  // Используем ?. (optional chaining) для безопасного обращения
  return `Здравствуйте, ${client.middleName ?? client.firstName}`;
}
```

---

### Модификатор readonly

`readonly` запрещает изменение поля после инициализации. Это полезно для идентификаторов, конфигурации, и любых данных, которые не должны меняться.

```typescript
type BankClient = {
  readonly id: number;    // нельзя изменить после создания
  firstName: string;
  lastName: string;
};

const client: BankClient = { id: 1, firstName: 'Иван', lastName: 'Петров' };

client.firstName = 'Пётр';  // OK — поле не readonly
client.id = 99;             // Ошибка: Cannot assign to 'id' because it is a read-only property
```

---

### Массивы

TypeScript умеет вывести тип массива автоматически. Явная аннотация записывается двумя способами:

```typescript
// Два равнозначных способа записи
const skills: string[] = ['dev', 'devops'];
const skills2: Array<string> = ['dev', 'devops'];
```

TypeScript знает тип каждого элемента при итерации:

```typescript
const skills: string[] = ['dev', 'devops', 'testing'];

for (const skill of skills) {
  console.log(skill.toUpperCase()); // skill — это string, автодополнение работает
}

// map, filter, reduce — тоже полностью типизированы
const filtered = skills.filter(s => s !== 'devops'); // string[]
const lengths = skills.map(s => s.length);           // number[]
```

**readonly-массив** нельзя изменять: запрещены push, pop и прямое присваивание элементов:

```typescript
const config: readonly string[] = ['production', 'v2'];
// ReadonlyArray<string> — эквивалентная запись

config.push('test');     // Ошибка: Property 'push' does not exist on type 'readonly string[]'
config[0] = 'staging';  // Ошибка: Index signature in type 'readonly string[]' only permits reading
```

---

### Кортежи (Tuples)

Кортеж — это массив **фиксированной длины**, где каждая позиция имеет свой тип. Используется, когда нужно передать несколько разнотипных значений вместе.

```typescript
// Тип кортежа: [идентификатор, название]
const skill: [number, string] = [1, 'TypeScript'];

const id = skill[0];        // number
const name = skill[1];      // string
// skill[2]                 // Ошибка: Tuple type '[number, string]' of length '2' has no element at index '2'
```

**Деструктуризация** — самый удобный способ работать с кортежами:

```typescript
const [skillId, skillName] = skill;
// skillId: number, skillName: string

// Знакомый пример из React:
const [count, setCount] = useState(0);
```

**readonly-кортеж** не допускает изменений:

```typescript
const point: readonly [number, number] = [10, 20];
point[0] = 5;       // Ошибка
point.push(30);     // Ошибка
```

**Кортеж с rest-элементом** — когда первые позиции фиксированы, а остальные — произвольны:

```typescript
// [id, name, ...флаги модулей]
const progress: [number, string, ...boolean[]] = [1, 'TS Course', true, false, true];
```

---

### Когда что использовать?

| Структура | Когда применять |
|---|---|
| `object type` | Разовая типизация без переиспользования |
| `readonly` поле | ID, конфигурация, неизменяемые данные |
| `?` поле | Необязательные атрибуты сущности |
| `T[]` | Однородная коллекция одного типа |
| `readonly T[]` | Конфигурационные массивы, параметры |
| `tuple` | Пары/тройки разнотипных значений, useState |

---

## 🧪 Практика на занятии

### Задание 1. Типизация клиента банка

Опишите тип `BankClient` с обязательными и опциональными полями, используя inline-типизацию в функции:

```typescript
// TODO: замените any на правильный объектный тип
function printClientInfo(client: any): void {
  console.log(`Клиент #${client.id}: ${client.firstName} ${client.lastName}`);
  if (client.phone) {
    console.log(`Телефон: ${client.phone}`);
  }
}

// Проверьте, что TypeScript ловит ошибку при передаче неполного объекта
printClientInfo({
  id: 42,
  firstName: 'Мария',
  lastName: 'Иванова',
  phone: '+7 999 123-45-67',
});
```

---

### Задание 2. Объект с вложенными полями и readonly

Создайте типизированный объект клиента с вложенным адресом и защищённым ID:

```typescript
// TODO: опишите тип ClientRecord
// Поля: id (readonly), fullName, address (вложенный объект: city, street, zip?)

type ClientRecord = {
  // ... ваш тип
};

const client: ClientRecord = {
  id: 1001,
  fullName: 'Алексей Смирнов',
  address: {
    city: 'Санкт-Петербург',
    street: 'ул. Ленина, 5',
    // zip необязателен
  },
};

// Эта строка должна давать ошибку TypeScript:
// client.id = 9999;
```

---

### Задание 3. Типизация массивов

Напишите функцию, которая принимает массив сумм транзакций и возвращает сумму только положительных:

```typescript
// TODO: добавьте типы параметра и возвращаемого значения
function sumPositive(amounts) {
  return amounts.filter(a => a > 0).reduce((acc, a) => acc + a, 0);
}

console.log(sumPositive([100, -50, 200, -30, 150])); // 450
```

---

### Задание 4. Кортеж для хранения заявки

Смоделируйте краткую запись кредитной заявки в виде кортежа и работайте с ней через деструктуризацию:

```typescript
// Кортеж: [id заявки, статус, сумма кредита]
// TODO: задайте тип явно через tuple-аннотацию
const application = [1001, 'PENDING', 500000];

// TODO: деструктурируйте кортеж в переменные
const [appId, status, amount] = application;

console.log(`Заявка ${appId}: ${status}, сумма ${amount} руб.`);

// TODO: сделайте кортеж readonly и убедитесь, что изменение вызывает ошибку
```

---

## 🏠 Домашнее задание

Типизируйте объект **кредитной заявки** — сущность, с которой мы будем работать весь курс.

Создайте файл `src/types/loan-application.ts` и опишите в нём тип `LoanApplication`:

```typescript
// Требования к типу LoanApplication:
// - id: неизменяемый числовой идентификатор
// - applicantName: строка
// - amount: запрашиваемая сумма (число)
// - termMonths: срок в месяцах (число)
// - purpose?: необязательная цель кредита (строка)
// - applicantAddress: вложенный объект с полями city (обязательно) и street (необязательно)
// - documents: массив строк (названия приложенных документов)
// - reviewHistory: кортеж [дата: string, решение: string] для последнего решения (может отсутствовать)

type LoanApplication = {
  // ... ваша типизация
};

// Создайте минимум 2 объекта этого типа: один полный, один с только обязательными полями
// Напишите функцию formatApplication(app: LoanApplication): string
// которая возвращает читаемое описание заявки
```

---

## ✅ Результат

После урока вы умеете:
- Описывать форму объекта прямо в месте использования (inline-тип)
- Делать поля обязательными и необязательными (`?`)
- Защищать поля от изменения через `readonly`
- Типизировать однородные массивы (`T[]`)
- Создавать кортежи с фиксированной структурой и деструктурировать их
- Запрещать модификацию массивов и кортежей через `readonly`

---

## ⚠️ Частые ошибки

- **`[number]` vs `number[]`** — первое кортеж из одного числа, второе — массив чисел любой длины. Не путайте!
- **`const` не защищает элементы массива** — `const arr = [1,2,3]` позволяет `arr[0] = 99`. Нужен `readonly`.
- **Опциональное поле ≠ nullable** — `name?: string` означает `string | undefined`, а не `string | null`.
- **push в readonly** — TypeScript запретит мутирующие методы (push, pop, splice) для `readonly`-массивов и кортежей.
- **Передача литерального объекта шире типа** — при прямой передаче объектного литерала TypeScript проверяет на лишние поля (excess property check), через переменную — нет.

## 💡 Советы

- Используйте `readonly` для `id`-полей сразу — это хорошая привычка, которая предотвратит случайные мутации.
- Кортежи особенно удобны при деструктуризации — именуйте переменные осмысленно: `const [userId, userName] = userEntry`.
- Inline-типы удобны для одноразового использования; как только тип нужен в двух местах — выносите его в `type` или `interface` (тема следующих уроков).
- `readonly` на уровне типа работает только в compile-time. В runtime JavaScript никаких ограничений нет — это важно понимать.
