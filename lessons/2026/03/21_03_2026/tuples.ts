const skill: [number, string] = [1, "TypeScript"]

/*
const id = skill[0]
const lang = skill[1]
*/

// Деструктуризация

const [id, code] = skill
console.log(id)
console.log(code)



/*
const point: readonly [number, number] = [10, 20];
point[0] = 5;       // Ошибка
point.push(30);     // Ошибка

*/


/*
Кортеж с rest-элементом — когда первые позиции фиксированы, а остальные — произвольны:
 */
const progress : [number, string, ...boolean[], number] = [1, "TypeScript", true, false, true, false, 123]

const skillReadonly:  [number, string] = [1, "TypeScript"]
