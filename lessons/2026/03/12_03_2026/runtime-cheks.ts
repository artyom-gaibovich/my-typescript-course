


function getUser(value: unknown): string {
    if (typeof value !== 'number') {
        throw new Error(`${value} must be a number`)
    }
    return value.toFixed(2)
}


getUser(10)