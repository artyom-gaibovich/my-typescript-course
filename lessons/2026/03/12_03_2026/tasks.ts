// До типизации (JavaScript)
function calcInterest(principal: number, rate: number, years: number): number {
    return principal * rate * years / 100;
}

function formatAmount(amount: number): string {
    return amount.toFixed(2) + ' ₽';
}

function isEligible(age: number, income: number): boolean {
    return age >= 18 && income >= 30000;
}


// Перепишите в стрелочный синтаксис с типами
const calcMonthlyPayment = (principal: number, months: number, rate: number): number => {
    const monthlyRate = rate / 12 / 100;
    return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
};

// Ваш код здесь
function logTransaction(amount: number, type: 'deposit' | 'withdrawal'): void {
    console.log(amount, type);
}

function printSummary(amounts : number[]): void {
    const sum = amounts.reduce((acc, val) => acc + val, 0);
    console.log(sum);
}

printSummary([1,2.3,4,5])

function calcDiscount(amount: number, isVip: boolean): number {
    if (isVip && amount > 10000) {
        return 20;
    }
    if (isVip) {
        return 10;
    }
    return 0;
}
