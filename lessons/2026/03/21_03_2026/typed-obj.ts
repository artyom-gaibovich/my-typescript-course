function getFullName(user: { firstName: string, lastName: string }): string {
    return `${user.firstName} ${user.lastName}`;
}

const myUser = {firstName: 'John', lastName: 'Doe', someProperty: 123};
getFullName(myUser)


function getFullNameNested(user: {
    firstName: string, lastName: string, children: {
        username: string
    }
}): string {
    return `${user.firstName} ${user.lastName}`;
}


const myUser2 = {
    firstName: 'John', lastName: 'Doe', children: {
        username: 'John',
    }
};
getFullNameNested(myUser2)