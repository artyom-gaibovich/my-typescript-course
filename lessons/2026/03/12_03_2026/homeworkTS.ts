

// 1. Сортировка клиентов по балансу (по убыванию)
function sortByBalance(clients: number[]): number[] {
    return [...clients].sort((a, b) => b.balance - a.balance);
}

// 2. Фильтрация заявок по сумме
function filterByAmount(loans: number[], minAmount: number): number[] {
    return loans.filter(loan => loan.amount >= minAmount);
}

// 3. Расчёт итоговой суммы выплат
function calcTotalPayment(principal: number, monthlyRate: number, months: number): number {
    return principal * monthlyRate * months;
}

// 4. Логирование (ничего не возвращает)
function logEvent(eventName: string, payload: any): void {
    console.log(`[${new Date().toISOString()}] ${eventName}`, payload);
}

// 5. Проверка лимита кредита
function checkCreditLimit(requestedAmount: number, clientLimit: number): boolean {
    return requestedAmount <= clientLimit;
}