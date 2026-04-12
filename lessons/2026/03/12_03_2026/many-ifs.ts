

function multiply(a: number, b?: number): number {
    if (!b) {
       return a * a
    }
    return a * b

}

const result = multiply(10)



