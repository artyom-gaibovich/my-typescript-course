type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";


function sendGet(url: User, method: HttpMethod): void {}
function logMethod(method: HttpMethod ): void {}


type User = {
    id: number;
    name: string;
    email: string;
};


function getUser(): User {
    return { id: 1, name: "Иван", email: "ivan@bank.ru" };
}


type Formatter = (value: number) => string;



const formatAmount: Formatter = (value) => `${value.toFixed(2)} ₽`;
