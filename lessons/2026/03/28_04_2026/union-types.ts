function logId(id: string | number): void {
    console.log(id);
    if (typeof id === "string") {
        console.log(id.toLowerCase())
    }
    if (typeof id === "number") {
        console.log(id.toFixed(2))
    }
}


logId(42);       // ОК
logId("abc-7");  // ОК
//logId(true);     // Ошибка TS: boolean сюда не подходит