// TODO: объявите enum LoanStatus со значениями:
// PENDING = "PENDING", APPROVED = "APPROVED", REJECTED = "REJECTED"

// TODO: напишите функцию getStatusDescription(status: LoanStatus): string
// которая возвращает:
// PENDING  → "Заявка на рассмотрении"
// APPROVED → "Заявка одобрена"
// REJECTED → "Заявка отклонена"

// Проверьте вызов:
// console.log(getStatusDescription(LoanStatus.APPROVED)); // "Заявка одобрена"


enum LoanStatus {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
function getStatusDesc(status: LoanStatus):string {
    switch (status) {
        case LoanStatus.Pending: return "Заявка на рассмотрении";
        case LoanStatus.Approved: return "Заявка одобрена" ;
        case LoanStatus.Rejected: return "Заявка отклонена";
        default: return "Неизвестный статус"
    }
}
console.log(getStatusDesc(LoanStatus.Approved));


// TODO: объявите числовой enum Priority:
// Low = 1, Medium = 2, High = 3
enum Priority {
    Low = 1,
    Medium = 2,
    High = 3
}
// TODO: напишите функцию filterByMinPriority(
//   applications: Array<{ id: number; priority: Priority }>,
//   minPriority: Priority
// ): Array<{ id: number; priority: Priority }>
// Функция должна вернуть только заявки с priority >= minPriority
function filterByMinPriority(
    applications: { id: number; priority: Priority }[],
    minPriority: Priority
){
    return applications.filter(app => app.priority >= minPriority);
}

const applications = [
    { id: 1, priority: Priority.Low },
    { id: 2, priority: Priority.High },
    { id: 3, priority: Priority.Medium },
];

// filterByMinPriority(applications, Priority.Medium) → [{ id: 2, ... }, { id: 3, ... }]
console.log(filterByMinPriority(applications, Priority.Medium));

// TODO: объявите тип ClientRecord = readonly [id: number, name: string, creditScore: number]
type ClientRecord = readonly [number, string, number];
// Создайте клиента
const client: ClientRecord = [101, "Пётр Сидоров", 720];

// TODO: попробуйте изменить элемент и убедитесь, что TypeScript выдаёт ошибку
// client[2] = 800; // должна быть ошибка
const [id, name, creditScore] = client;
// TODO: деструктурируйте запись и выведите в консоль
// "Клиент #101 Пётр Сидоров, кредитный рейтинг: 720"
console.log(`Client ID: ${id} (${name}), creditScore: ${creditScore})`);