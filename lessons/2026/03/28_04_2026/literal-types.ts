
const method = "GET";


function sendRequest(url: string, method: "GET" | "POST" | "PUT" | "DELETE"): void {

}


sendRequest("/api/loans", method);    // ОК
sendRequest("/api/loans", "DELETE"); // ❌ Ошибка: "DELETE" не входит в допустимые значения




type SortDirection = 1 | -1;


function sort(items: string[], direction: SortDirection): string[] {
    return [...items].sort((a, b) => a.localeCompare(b) * direction);
}

sort(["banana", "apple"], 1);  // ОК — по возрастанию
sort(["banana", "apple"], -1); // ОК — по убыванию
sort(["banana", "apple"], 0);  // ❌ Ошибка