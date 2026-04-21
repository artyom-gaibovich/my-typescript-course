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
};


function greet(client: BankClient): string {
    return `Здравствуйте, ${client.middleName ?? client.firstName}`;
}