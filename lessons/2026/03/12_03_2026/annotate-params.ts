function getFullUsername(firstName: string, surname: string): string {

    return `${firstName}. ${surname}`;
}


const getFullUsernameArrow = (firstName: string, surname: string): string => {
    return `${firstName}.${surname}`;
}

function getNameVoid(name: string): undefined {
    console.log('Hello', name)


}

const b = getNameVoid("")


const names = ['Grisha', 'Egor', 'Egor 2']

const user: { children: string[] } = {
    children: [],
}

names.forEach((name) => {
    console.log(name)
    user.children.push(name)
})