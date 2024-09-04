type user = {
    userName: string,
    password: string
}

const getUser = ():user => ({
    userName: 'Jhosua',
    password: '123Abc'
});

const getUserNameDinamic = ( name:string ):user =>({
    userName: name,
    password: '123Abc'
});

export { getUser, getUserNameDinamic };