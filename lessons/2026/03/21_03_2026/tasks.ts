// 1 TODO: замените any на правильный объектный тип
function printClientInfo(client:{id: number; firstName: string; lastName: string; phone?: string}): void {
    console.log(`Клиент #${client.id}: ${client.firstName} ${client.lastName}`);
    if (client.phone) {
        console.log(`Телефон: ${client.phone}`);
    }
}
// 2 Проверьте, что TypeScript ловит ошибку при передаче неполного объекта
printClientInfo({
    id: 42,
    firstName: 'Мария',
    lastName: 'Иванова',
    phone: '+7 999 123-45-67',
});

// TODO: опишите тип ClientRecord
// Поля: id (readonly), fullName, address (вложенный объект: city, street, zip?)

type ClientRecord = {
    readonly id: number;
    fullName: string;
    address: {
        city: string;
        street: string;
        zip?: number;
    }
};

const client3: ClientRecord = {
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

// 3 TODO: добавьте типы параметра и возвращаемого значения
function sumPositive(amounts: number[]): number {
    return amounts.filter(a => a > 0).reduce((acc, a) => acc + a, 0);
}

console.log(sumPositive([100, -50, 200, -30, 150])); // 450

// 4 Кортеж: [id заявки, статус, сумма кредита]
// TODO: задайте тип явно через tuple-аннотацию
const application: readonly [number, string, number] = [1001, 'PENDING', 500000];

// TODO: деструктурируйте кортеж в переменные
const [appId, state, amount] = application;

console.log(`Заявка ${appId}: ${state}, сумма ${amount} руб.`);

// TODO: сделайте кортеж readonly и убедитесь, что изменение вызывает ошибку