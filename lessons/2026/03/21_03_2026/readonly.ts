type BankClient2 = {
    readonly id: number;
    firstName: string;
};


const clientBank: BankClient2 = {
    id: 10,
    firstName: 'John',
}

clientBank.id = 12
console.log(clientBank);

