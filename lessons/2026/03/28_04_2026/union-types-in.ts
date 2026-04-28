
type Cat = { meow: () => void };
type Dog = { bark: () => void };


function makeSound(animal: Cat | Dog): void {
    if ("meow" in animal) {
        animal.meow()
    }
    if ("bark" in animal) {
        animal.bark()
    }
}