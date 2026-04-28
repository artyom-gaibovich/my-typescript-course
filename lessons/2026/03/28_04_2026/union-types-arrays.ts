
function logErrors(errors: string | string[]): void {
    if (Array.isArray(errors)) {
        errors.forEach(e => console.log(e)); // errors: string[]
    } else {
        console.log(errors);                 // errors: string
    }
}